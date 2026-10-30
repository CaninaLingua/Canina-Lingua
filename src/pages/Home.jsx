
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPaw,
    faHouse,
    faHeart,
    faGraduationCap,
    faComments,
    faArrowRight,
    faLocationDot,
    faCheck,
    faXmark,
    faCompass,
    faLeaf,
    faMagnifyingGlass,
    faPersonWalking,
    faBrain,
} from "@fortawesome/free-solid-svg-icons";

import useRevealOnScroll from "../hooks/useRevealOnScroll";

import davidWithDogPhoto1 from "../assets/img/img_david_level/Canina_Lingua_David_Level_photo_1.webp";
import davidWithDogPhoto2 from "../assets/img/img_david_level/Canina_Lingua_David_Level_photo_2.webp";

import zoneChalandise from "../assets/img/Canina_Lingua_zone_de_chalandise.webp";

import dogPositiveMotivation from "../assets/img/img_chiens_accueil/Canina_Lingua_chien_accueil_photo_1.webp";
import dogEducation from "../assets/img/img_chiens_accueil/Canina_Lingua_chien_accueil_photo_2.webp";
import dogsWalking from "../assets/img/img_chiens_accueil/Canina_Lingua_chien_accueil_photo_3.webp";

import "../css/Home.css";

// Home page
function Home() {
    useRevealOnScroll(
        ".fade-in-up, .fade-in-side-left, .fade-in-side-right"
    );

    useEffect(() => {
        document.title =
            "Canina Lingua - Éducateur comportementaliste canin";
    }, []);

    return (
        <div className="home-container">

            {/* =========================
                MAIN HERO BANNER
            ========================= */}
            <div className="home-hero">
                <img
                    className="home-hero-image"
                    src={davidWithDogPhoto1}
                    alt="Canina Lingua - David Level avec un chien"
                    aria-hidden="true"
                    fetchPriority="high"
                />

                <div className="home-hero-overlay" />

                <div className="home-hero-card-reveal fade-in-up">
                    <div className="home-hero-card">
                        <div className="home-hero-paw-bg" aria-hidden="true">
                            <FontAwesomeIcon
                                icon={faPaw}
                                className="home-paw-icon"
                            />
                        </div>

                        <span className="home-hero-eyebrow">
                            <FontAwesomeIcon
                                icon={faPaw}
                                className="home-paw-icon"
                            />
                            CANINA LINGUA
                        </span>

                        <h1 className="home-hero-title">
                            L’éducation
                            <span>dans le sens du poil</span>
                        </h1>

                        <p className="home-hero-subtitle">
                            Une méthode éthique et éthologique.
                            <strong> Comprendre pour entreprendre.</strong>
                        </p>

                        <div className="home-hero-actions">
                            <Link
                                to="/prestations-tarifs"
                                className="home-button"
                            >
                                Découvrir les prestations
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>

                            <Link
                                to="/contact"
                                className="home-button"
                            >
                                <FontAwesomeIcon icon={faComments} />
                                Prendre contact
                            </Link>
                        </div>

                        <div className="home-hero-credentials">
                            <div className="home-hero-credential">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <span>Éducateur canin diplômé d’État</span>
                            </div>

                            <span
                                className="home-hero-credential-divider"
                                aria-hidden="true"
                            />

                            <div className="home-hero-credential">
                                <FontAwesomeIcon icon={faHouse} />
                                <span>Éducation canine à domicile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================
                MAIN CONTENT
            ========================= */}
            <div className="home-content-panel">

                {/* =========================
                    DAVID'S INTRODUCTION
                ========================= */}
                <div
                    className="home-section home-intro"
                    id="home-presentation"
                >
                    <div className="home-intro-visual fade-in-side-left">
                        <div className="home-intro-photo-frame">
                            <img
                                src={davidWithDogPhoto2}
                                alt="Canina Lingua - David Level avec un chien sur la plage"
                                loading="lazy"
                            />

                            <span className="home-photo-corner home-photo-corner-top" />
                            <span className="home-photo-corner home-photo-corner-bottom" />
                        </div>

                        <div className="home-intro-photo-label">
                            <span className="home-icon-disc">
                                <FontAwesomeIcon
                                    icon={faPaw}
                                    className="home-paw-icon"
                                />
                            </span>

                            <span>
                                <strong>David Level</strong>
                                <small>Éducateur comportementaliste canin</small>
                            </span>
                        </div>
                    </div>

                    <div className="home-intro-copy fade-in-side-right">
                        <span className="home-eyebrow">
                            Faisons connaissance
                        </span>

                        <h2 className="home-section-title">
                            Une passion pour les chiens,
                            <span> une approche réfléchie</span>
                        </h2>

                        <p>
                            Passionné par les chiens, leur socialité et leur
                            bien-être, je me suis formé à l’éducation canine
                            et à la rééducation comportementale canine.
                            J’ai choisi le C.F.P.P.P.A de Cibeins pour y préparer
                            et obtenir le Brevet Professionnel d’Éducateur Canin,
                            une formation en accord avec ma vision de la relation
                            humain-chien.
                        </p>

                        <p>
                            Mon approche est éthique et éthologique :
                            je ne travaille pas uniquement sur les apprentissages,
                            mais également sur les émotions. Comprendre les
                            comportements, les signaux de communication et les
                            besoins du chien est essentiel pour l’accompagner
                            dans de bonnes conditions.
                        </p>

                        <div className="home-intro-signature">
                            <FontAwesomeIcon
                                icon={faPaw}
                                className="home-paw-icon"
                            />
                            <span>Comprendre pour entreprendre.</span>
                        </div>

                        <Link
                            to="/a-propos"
                            className="home-button"
                        >
                            Découvrir mon parcours
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* =========================
                    SERVICES AND PRICING
                ========================= */}
                <div className="home-section home-services">

                    <div className="home-services-spotlight">

                        {/* INTRODUCTION AND MAIN CTA */}
                        <div className="home-services-copy fade-in-side-left">

                            <span className="home-eyebrow">
                                <FontAwesomeIcon icon={faPaw} />
                                Les accompagnements Canina Lingua
                            </span>

                            <h2 className="home-section-title">
                                Un accompagnement adapté à
                                <span> chaque duo</span>
                            </h2>

                            <p>
                                Bilan, éducation, rééducation, balades ou découverte
                                d'activités : plusieurs possibilités pour avancer
                                avec votre chien, selon ses besoins et votre quotidien.
                            </p>

                            <p>
                                Chaque accompagnement s'inscrit dans une approche
                                éthique et éthologique, attentive aux comportements,
                                aux émotions et à la communication de votre compagnon.
                            </p>

                            <Link
                                to="/prestations-tarifs"
                                className="home-button home-services-button"
                            >
                                Découvrir les prestations & tarifs
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>

                            <span className="home-services-footnote">
                                Retrouvez les descriptions, durées et tarifs sur la page dédiée.
                            </span>
                        </div>

                        {/* OVERVIEW OF THE MAIN SERVICE CATEGORIES */}
                        <div className="home-services-overview fade-in-side-right">

                            <div className="home-services-overview-paw" aria-hidden="true">
                                <FontAwesomeIcon icon={faPaw} />
                            </div>

                            <div className="home-services-overview-heading">
                                <span>Les prestations</span>

                                <h3>
                                    Plusieurs façons d'avancer ensemble
                                </h3>
                            </div>

                            <ul className="home-services-overview-list">

                                {/* BILANS */}
                                <li className="home-services-overview-item">
                                    <Link
                                        to="/prestations-tarifs#bilans"
                                        className="home-services-overview-link"
                                    >
                                        <span className="home-services-overview-icon">
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlass}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className="home-services-overview-text">
                                            <strong>Bilans et premiers repères</strong>
                                            <small>
                                                Comprendre la situation de votre chien
                                            </small>
                                        </span>

                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="home-services-overview-arrow"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>

                                {/* EDUCATION AND REHABILITATION */}
                                <li className="home-services-overview-item">
                                    <Link
                                        to="/prestations-tarifs#accompagnement"
                                        className="home-services-overview-link"
                                    >
                                        <span className="home-services-overview-icon">
                                            <FontAwesomeIcon
                                                icon={faGraduationCap}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className="home-services-overview-text">
                                            <strong>Éducation et rééducation</strong>
                                            <small>
                                                Des objectifs adaptés à votre duo
                                            </small>
                                        </span>

                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="home-services-overview-arrow"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>

                                {/* WALKS AND ACTIVITIES */}
                                <li className="home-services-overview-item">
                                    <Link
                                        to="/prestations-tarifs#activites"
                                        className="home-services-overview-link"
                                    >
                                        <span className="home-services-overview-icon">
                                            <FontAwesomeIcon
                                                icon={faPersonWalking}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className="home-services-overview-text">
                                            <strong>Balades et activités</strong>
                                            <small>
                                                Apprendre et découvrir en extérieur
                                            </small>
                                        </span>

                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="home-services-overview-arrow"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>

                                {/* MANTRAILING */}
                                <li className="home-services-overview-item">
                                    <Link
                                        to="/prestations-tarifs#mantrailing"
                                        className="home-services-overview-link"
                                    >
                                        <span className="home-services-overview-icon">
                                            <FontAwesomeIcon
                                                icon={faCompass}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className="home-services-overview-text">
                                            <strong>Découverte du mantrailing</strong>
                                            <small>
                                                Explorer les capacités olfactives du chien
                                            </small>
                                        </span>

                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="home-services-overview-arrow"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>

                            </ul>

                            <div className="home-services-overview-footer">
                                <FontAwesomeIcon icon={faPaw} aria-hidden="true" />

                                <span>
                                    Des prestations pensées autour des besoins de votre chien.
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* =========================
                    SERVICE AREA
                ========================= */}
                <div className="home-section home-area">
                    <div className="home-area-copy fade-in-side-left">
                        <span className="home-eyebrow">
                            À domicile, près de chez vous
                        </span>

                        <h2 className="home-section-title">
                            Éducateur canin à
                            <span> Boulogne-sur-Mer et ses alentours</span>
                        </h2>

                        <p>
                            J’interviens à domicile dans un rayon habituel de
                            40 km autour de Boulogne-sur-Mer, dans le Pas-de-Calais
                            et les environs.
                        </p>

                        <p>
                            Je peux également me déplacer jusqu’à 60 km,
                            avec des frais supplémentaires. Consultez la carte
                            pour visualiser mon secteur d’intervention.
                        </p>

                        <div className="home-area-info">
                            <span className="home-icon-disc">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>

                            <div>
                                <strong>40 km autour de Boulogne-sur-Mer</strong>
                                <span>
                                    Jusqu’à 60 km avec frais supplémentaires
                                </span>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="home-button"
                        >
                            Me contacter pour en discuter
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>

                    <div className="home-area-visual fade-in-side-right">
                        <div className="home-image-panel home-map-panel">
                            <div className="home-image-panel-heading">
                                <FontAwesomeIcon icon={faCompass} />
                                <span>Zone de chalandise</span>
                            </div>

                            <div className="home-map-image-wrap">
                                <img
                                    src={zoneChalandise}
                                    alt="Canina Lingua - Zone de chalandise Boulogne-sur-Mer"
                                    loading="lazy"
                                />
                            </div>

                            <div
                                className="home-map-legend"
                                aria-label="Légende de la zone d’intervention"
                            >
                                <div className="home-map-legend-item">
                                    <span
                                        className="home-map-legend-swatch home-map-legend-swatch-orange"
                                        aria-hidden="true"
                                    />

                                    <span className="home-map-legend-text">
                                        <strong>Rayon de 40 km</strong>
                                        <small>Zone principale</small>
                                    </span>
                                </div>

                                <div className="home-map-legend-item">
                                    <span
                                        className="home-map-legend-swatch home-map-legend-swatch-green"
                                        aria-hidden="true"
                                    />

                                    <span className="home-map-legend-text">
                                        <strong>Jusqu’à 60 km</strong>
                                        <small>Avec frais supplémentaires</small>
                                    </span>
                                </div>
                            </div>

                            <div className="home-map-caption">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>Nord et Pas-de-Calais</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================
                    ETHICS AND VALUES
                ========================= */}
                <div className="home-section home-ethics">
                    <div className="home-section-heading home-section-heading-centered fade-in-up">
                        <span className="home-eyebrow">
                            Une méthode éthique et éthologique
                        </span>

                        <h2 className="home-section-title">
                            Le chien est un être vivant
                            <span> doté de sensibilité</span>
                        </h2>

                        <p>
                            Les méthodes que j’emploie doivent respecter
                            l’intégrité physique et mentale du chien.
                            Pour moi, comprendre ses émotions et ses signaux
                            de communication fait partie intégrante de
                            l’accompagnement que je propose.
                        </p>
                    </div>

                    <div className="home-ethics-grid">

                        {/* ETHICS CARD 1: POSITIVE MOTIVATION */}
                        <div className="home-ethics-card-reveal fade-in-up">
                            <div className="home-ethics-card">
                                <div className="home-ethics-image">
                                    <img
                                        src={dogPositiveMotivation}
                                        alt="Canina Lingua - Photo accueil Motivation positive"
                                        loading="lazy"
                                    />

                                    <span className="home-ethics-image-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </div>

                                <div className="home-ethics-content">
                                    <span className="home-card-kicker">
                                        <FontAwesomeIcon icon={faLeaf} />
                                        Méthode positive et éthique canine
                                    </span>

                                    <h3>La motivation à recevoir</h3>

                                    <p>
                                        Caresse, félicitation, friandise ou attention :
                                        je privilégie la motivation à recevoir pour
                                        associer une émotion positive à l’apprentissage
                                        ou à la rééducation, plutôt que de travailler
                                        sur la motivation à éviter une sanction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ETHICS CARD 2: EMOTIONS AND COMMUNICATION */}
                        <div className="home-ethics-card-reveal fade-in-up">
                            <div className="home-ethics-card">
                                <div className="home-ethics-image">
                                    <img
                                        src={dogEducation}
                                        alt="Canina Lingua - Photo accueil Éducation"
                                        loading="lazy"
                                    />

                                    <span className="home-ethics-image-icon">
                                        <FontAwesomeIcon icon={faBrain} />
                                    </span>
                                </div>

                                <div className="home-ethics-content">
                                    <span className="home-card-kicker">
                                        <FontAwesomeIcon
                                            icon={faPaw}
                                            className="home-paw-icon"
                                        />
                                        Comprendre les émotions
                                    </span>

                                    <h3>
                                        Ne pas travailler uniquement les apprentissages
                                    </h3>

                                    <p>
                                        Je ne me limite pas aux apprentissages :
                                        je prends également en compte les émotions
                                        et les signaux de communication, comme les
                                        signaux d’apaisement. Ils m’aident à mieux
                                        comprendre le chien et à repérer les situations
                                        susceptibles de générer du mal-être.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="home-ethics-quote fade-in-up">
                        <FontAwesomeIcon
                            icon={faPaw}
                            className="home-paw-icon"
                        />

                        <p>
                            « Je ne travaille pas uniquement sur les apprentissages
                            mais également sur les émotions. »
                        </p>

                        <span>David Level - Canina Lingua</span>
                    </div>
                </div>

                {/* =========================
                    HOME VISITS AND DAILY WALKS
                ========================= */}
                <div className="home-section home-homevisit">
                    <div className="home-homevisit-visual fade-in-side-left">
                        <div className="home-homevisit-photo">
                            <img
                                src={dogsWalking}
                                alt="Canina Lingua - Chiens balade environnement réel"
                                loading="lazy"
                            />

                            <div className="home-homevisit-photo-badge">
                                <FontAwesomeIcon icon={faHouse} />
                                <span>Dans l’environnement du chien</span>
                            </div>
                        </div>
                    </div>

                    <div className="home-homevisit-copy fade-in-side-right">
                        <span className="home-eyebrow">
                            Éducation canine à domicile
                        </span>

                        <h2 className="home-section-title">
                            Chez vous et en balade
                            <span> Jamais sur un terrain d’entraînement clos</span>
                        </h2>

                        <p>
                            Les comportements de votre chien prennent place
                            dans son environnement habituel : à la maison,
                            en promenade et au fil des situations de tous
                            les jours.
                        </p>

                        <p>
                            Je réalise les séances à domicile ou sur les lieux
                            de vos balades quotidiennes. J’interviens dans votre
                            environnement réel, en tenant compte des émotions
                            et des besoins de votre compagnon, jamais sur un
                            terrain d’entraînement clos.
                        </p>

                        <ul className="home-homevisit-list">
                            <li>
                                <FontAwesomeIcon icon={faCheck} />
                                <span>
                                    Observer le chien dans son contexte quotidien
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faCheck} />
                                <span>
                                    Comprendre ses signaux de communication
                                </span>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faCheck} />
                                <span>
                                    Adapter les apprentissages à votre duo
                                </span>
                            </li>

                            <li className="home-homevisit-not">
                                <FontAwesomeIcon icon={faXmark} />
                                <span>
                                    Jamais sur un terrain d’entraînement clos
                                </span>
                            </li>
                        </ul>

                        <Link
                            to="/a-propos"
                            className="home-button"
                        >
                            En savoir plus sur mon approche
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>

                {/* =========================
                    CONTACT CALL TO ACTION
                ========================= */}
                <div className="home-contact-cta fade-in-up">
                    <div
                        className="home-cta-paw"
                        aria-hidden="true"
                    />

                    <span className="home-eyebrow">
                        Faisons connaissance
                    </span>

                    <h2>
                        Une question sur votre chien ?
                    </h2>

                    <p>
                        Éducation de base, rééducation comportementale,
                        stress, peurs, frustration ou réactivité :
                        contactez-moi pour que nous puissions échanger
                        sur les besoins de votre compagnon et envisager
                        un accompagnement adapté.
                    </p>

                    <Link
                        to="/contact"
                        className="home-button"
                    >
                        Contactez-moi
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Home;
