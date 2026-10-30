
import React, { useEffect, useState } from 'react';
import PhotoItem from '../components/PhotoItem';
import '../css/Photos.css';

import useRevealOnScroll from "../hooks/useRevealOnScroll";

// Photos gallery page
function Photos() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useRevealOnScroll(".fade-in-up");
    useRevealOnScroll(".zoom-animation", images);

    useEffect(() => {
        document.title = "Canina Lingua - Galerie photos";

        const url = `https://script.google.com/macros/s/AKfycbzBUcyxZY1naHAliQ0NwNreurJG8pds3TstxytTt9NGwWjZGKu5bv4k4G6Q7CBs3q3v/exec`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setImages(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur lors du chargement des images :", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="photos-container">

            {/* =========================
                HERO BANNER
            ========================= */}
            <div className="photos-hero-banner fade-in-up">
                <div className="photos-hero-banner-overlay"></div>

                <div className="photos-hero-banner-card">
                    <div className="photos-hero-paw-bg"></div>

                    <h1 className="photos-hero-banner-title">
                        Galerie Photos
                    </h1>

                    <p className="photos-hero-banner-subtitle">
                        Des séances d’éducation aux moments partagés en balade,
                        découvrez le quotidien de Canina Lingua à travers des
                        photos prises dans les environnements de vie des chiens,
                        à domicile comme en extérieur.
                    </p>

                    <div className="photos-hero-banner-stats">
                        <div className="photos-stat-item">
                            <span className="photos-stat-value">
                                {loading ? "..." : images.length}
                            </span>

                            <span className="photos-stat-label">
                                Photos immortalisées
                            </span>
                        </div>

                        <div className="photos-stat-divider"></div>

                        <div className="photos-stat-item">
                            <span className="photos-stat-value">
                                Environnements réels
                            </span>

                            <span className="photos-stat-label">
                                À domicile & En balade
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* =========================
                PHOTOS GALLERY
            ========================= */}
            <div
                className="photos-gallery-container fade-in-up"
                id="photos-gallery"
                aria-label="Galerie photos de Canina Lingua"
            >

                {/* Gallery introduction */}
                <section
                    className="photos-gallery-intro"
                    aria-labelledby="photos-gallery-intro-title"
                >
                    <div className="photos-gallery-intro-heading">
                        <span className="photos-gallery-eyebrow">
                            L'univers Canina Lingua en images
                        </span>

                        <h2 id="photos-gallery-intro-title">
                            Des moments de vie,
                            <span> d'apprentissage et de complicité</span>
                        </h2>
                    </div>

                    <div className="photos-gallery-intro-copy">
                        <p>
                            Cette galerie rassemble des images du quotidien de
                            Canina Lingua : séances d'éducation, moments de
                            complicité et instants partagés avec les chiens.
                            Prises à domicile ou en balade, elles vous donnent
                            un aperçu concret de l'activité, dans les environnements
                            où les chiens évoluent réellement.
                        </p>

                        <p>
                            Prenez le temps de parcourir les photos : elles vous
                            permettront de découvrir l'univers de Canina Lingua
                            autrement qu'à travers les mots.
                        </p>
                    </div>
                </section>


                {/* Loading state */}
                {loading && (
                    <div className="photos-gallery-loader"></div>
                )}


                {/* Empty gallery state */}
                {!loading && images.length === 0 && (
                    <p className="photos-gallery-notFound">
                        Aucune photo n'a été trouvée.
                    </p>
                )}


                {/* Gallery photos */}
                {images.map((file) => (
                    <PhotoItem
                        key={file.id}
                        file={file}
                    />
                ))}

            </div>

        </div>
    );
}

export default Photos;
