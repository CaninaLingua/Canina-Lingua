import React, { useEffect, useMemo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLocationDot,
    faArrowUpRightFromSquare,
    faHandPointer,
} from "@fortawesome/free-solid-svg-icons";

// Carousel settings
const MIN_ITEMS_PER_SET = 6;   // Partners are repeated until one set holds at least 6 cards
const COPIES = 3;              // 3 identical sets: the visible one + one buffer on each side
const DRAG_THRESHOLD = 6;      // Mouse movement (px) before a click becomes a drag

// Repeats the partners so the loop is always wider than the screen
function buildLoopSet(items) {
    if (!items.length) return [];

    const set = [];

    while (set.length < MIN_ITEMS_PER_SET) {
        set.push(...items);
    }

    return set;
}

// Single partner card (link if a URL exists, otherwise a simple block)
function PartnerCard({ partner, isFocusable }) {
    const content = (
        <>
            <span className={`home-partners-logo${partner.logo ? " home-partners-logo-image" : ""}`}>
                {partner.logo ? (
                    <img
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        loading="lazy"
                        draggable={false}
                    />
                ) : (
                    <FontAwesomeIcon icon={partner.icon} aria-hidden="true" />
                )}
            </span>

            <span className="home-partners-info">
                <span className="home-partners-category">
                    {partner.category}
                </span>

                <strong className="home-partners-name">
                    {partner.name}
                </strong>

                {partner.city && (
                    <span className="home-partners-city">
                        <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
                        {partner.city}
                    </span>
                )}
            </span>

            {partner.url && (
                <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="home-partners-external"
                    aria-hidden="true"
                />
            )}
        </>
    );

    if (partner.url) {
        return (
            <a
                href={partner.url}
                className="home-partners-card"
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                tabIndex={isFocusable ? undefined : -1}
                aria-label={`${partner.name} - ${partner.category} : visiter le site (nouvel onglet)`}
            >
                {content}
            </a>
        );
    }

    return (
        <div className="home-partners-card home-partners-card-static">
            {content}
        </div>
    );
}

// Infinite horizontal partners carousel (moved only by the user: drag, swipe, horizontal scroll)
function PartnersCarousel({ partners }) {
    const viewportRef = useRef(null);

    const loopSet = useMemo(() => buildLoopSet(partners), [partners]);

    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport || !loopSet.length) return;

        let setWidth = 0;
        let drag = null;
        let preventClick = false;

        // Keeps the scroll inside the middle set (seamless loop)
        const wrapScroll = (value) => {
            if (!setWidth) return value;
            if (value < setWidth * 0.5) return value + setWidth;
            if (value >= setWidth * 1.5) return value - setWidth;
            return value;
        };

        // Width of one set = distance between the start of set 1 and set 2
        const measure = () => {
            const firstSet = viewport.querySelector('[data-copy-start="0"]');
            const secondSet = viewport.querySelector('[data-copy-start="1"]');
            if (!firstSet || !secondSet) return;

            const newWidth = secondSet.offsetLeft - firstSet.offsetLeft;
            if (newWidth <= 0) return;

            const progress = setWidth ? (viewport.scrollLeft - setWidth) / setWidth : 0;

            setWidth = newWidth;
            viewport.scrollLeft = wrapScroll(setWidth + progress * setWidth);
        };

        // Horizontal scroll (trackpad, Shift + wheel, touch swipe)
        const handleScroll = () => {
            if (drag) return;

            const wrapped = wrapScroll(viewport.scrollLeft);

            if (wrapped !== viewport.scrollLeft) {
                viewport.scrollLeft = wrapped;
            }
        };

        // Mouse drag
        const handlePointerMove = (event) => {
            if (!drag) return;

            const deltaX = event.clientX - drag.startX;

            if (!drag.moved && Math.abs(deltaX) > DRAG_THRESHOLD) {
                drag.moved = true;
                viewport.classList.add("is-dragging");
            }

            if (!drag.moved) return;

            const next = drag.startScroll - deltaX;
            const wrapped = wrapScroll(next);

            drag.startScroll += wrapped - next;
            viewport.scrollLeft = wrapped;
        };

        const handlePointerUp = () => {
            if (drag?.moved) preventClick = true;

            drag = null;
            viewport.classList.remove("is-dragging");

            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };

        const handlePointerDown = (event) => {
            if (event.pointerType !== "mouse" || event.button !== 0) return;

            preventClick = false;
            drag = {
                startX: event.clientX,
                startScroll: viewport.scrollLeft,
                moved: false,
            };

            window.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", handlePointerUp);
        };

        // Blocks the link click at the end of a drag
        const handleClickCapture = (event) => {
            if (!preventClick) return;

            event.preventDefault();
            event.stopPropagation();
            preventClick = false;
        };

        const handleDragStart = (event) => event.preventDefault();

        viewport.addEventListener("scroll", handleScroll, { passive: true });
        viewport.addEventListener("pointerdown", handlePointerDown);
        viewport.addEventListener("click", handleClickCapture, true);
        viewport.addEventListener("dragstart", handleDragStart);

        // Re-measure on resize (and when logos finish loading)
        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(viewport.firstElementChild);

        measure();

        return () => {
            resizeObserver.disconnect();

            viewport.removeEventListener("scroll", handleScroll);
            viewport.removeEventListener("pointerdown", handlePointerDown);
            viewport.removeEventListener("click", handleClickCapture, true);
            viewport.removeEventListener("dragstart", handleDragStart);

            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };
    }, [loopSet]);

    if (!loopSet.length) return null;

    return (
        <div className="home-partners-carousel-wrap">
            <div
                ref={viewportRef}
                className="home-partners-carousel"
                role="region"
                aria-label="Partenaires de Canina Lingua"
            >
                <ul className="home-partners-track">
                    {Array.from({ length: COPIES }, (_, copy) =>
                        loopSet.map((partner, index) => {
                            // Only the first occurrence of each partner is read by screen readers
                            const isAccessible = copy === 1 && index < partners.length;

                            return (
                                <li
                                    key={`${copy}-${index}-${partner.id}`}
                                    className="home-partners-item"
                                    data-copy-start={index === 0 ? copy : undefined}
                                    aria-hidden={isAccessible ? undefined : "true"}
                                >
                                    <PartnerCard
                                        partner={partner}
                                        isFocusable={isAccessible}
                                    />
                                </li>
                            );
                        })
                    )}
                </ul>
            </div>

            <p className="home-partners-hint">
                <FontAwesomeIcon icon={faHandPointer} aria-hidden="true" />
                Faites glisser pour parcourir, cliquez sur un partenaire pour découvrir son activité
            </p>
        </div>
    );
}

export default PartnersCarousel;