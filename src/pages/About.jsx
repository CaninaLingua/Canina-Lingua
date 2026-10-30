
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faAward,
    faBookOpen,
    faHeart,
    faBone,
    faComments
} from "@fortawesome/free-solid-svg-icons";

import useRevealOnScroll from "../hooks/useRevealOnScroll";
import NavLink from "../components/NavLink.jsx";

import "../css/About.css";

import davidWithDogPhoto1 from "../assets/img/img_david_level/Canina_Lingua_David_Level_photo_1.webp";
import davidWithDogPhoto2 from "../assets/img/img_david_level/Canina_Lingua_David_Level_photo_2.webp";
import davidWorkingLandscape from "../assets/img/img_david_level/Canina_Lingua_David_Level_photo_3.webp";
import davidValuesPhoto from "../assets/img/img_david_level/Canina_Lingua_David_Level_photo_4.webp";
import davidBeachWalk from "../assets/img/img_david_level/Canina_Lingua_David_Level_photo_5.webp";
import davidWorkingPortrait from "../assets/img/img_david_level/Canina_Lingua_David_Level_photo_6.webp";

function About() {
    useRevealOnScroll(
        ".fade-in-up, .fade-in-side-left, .fade-in-side-right"
    );

    useEffect(() => {
        document.title = "Canina Lingua - À propos de moi & Mes valeurs";
    }, []);

    return (
        <div className="about-container">

            {/* ABOUT HERO BANNER */}
            <div className="about-hero-banner fade-in-up">
                <div className="about-hero-banner-overlay"></div>

                <div className="about-hero-banner-card">
                    <div className="about-hero-paw-bg"></div>

                    <h1 className="about-hero-banner-title">
                        À propos de moi & Mes valeurs
                    </h1>

                    <p className="about-hero-banner-subtitle">
                        Découvrez mon parcours, les raisons qui m'ont amené à créer Canina Lingua et les valeurs
                        qui guident mon métier d'éducateur canin. Passionné par les chiens
                        et leur bien-être, je privilégie une approche éthique et éthologique,
                        fondée sur la compréhension de leurs comportements,
                        de leurs émotions et de leurs besoins.
                    </p>

                    <div className="about-hero-banner-stats">
                        <div className="about-stat-item">
                            <span className="about-stat-value">
                                Éducateur diplômé d'État
                            </span>

                            <span className="about-stat-label">
                                Brevet Professionnel d'Éducateur Canin
                            </span>
                        </div>

                        <div className="about-stat-divider"></div>

                        <div className="about-stat-item">
                            <span className="about-stat-value">
                                Des valeurs éthiques
                            </span>

                            <span className="about-stat-label">
                                Une méthode positive pour progresser
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="about-section">

                {/* 1. GETTING TO KNOW DAVID */}
                <div className="about-story-intro">
                    <div className="about-story-copy fade-in-side-left">
                        <span className="about-eyebrow">
                            Faisons connaissance
                        </span>

                        <h2 className="about-main-title">
                            David Level, une passion pour les chiens
                        </h2>

                        <p>
                            Passionné depuis toujours par les chiens,
                            leur socialité et leur bien-être, j'ai choisi
                            de me former à l'éducation canine et à la
                            rééducation comportementale.
                        </p>

                        <p>
                            Ce qui m'importe, ce n'est pas seulement
                            d'apprendre au chien à réaliser un exercice
                            ou de faire disparaître un comportement.
                            C'est aussi de comprendre ce qu'il exprime,
                            ce qu'il ressent et ce dont il a besoin pour
                            évoluer dans de bonnes conditions.
                        </p>

                        <p>
                            C'est cette vision de la relation entre
                            le maître et le chien qui guide aujourd'hui
                            mon métier : vous aider à mieux comprendre
                            votre compagnon pour avancer ensemble.
                        </p>

                        <div className="about-story-signature">
                            <span className="about-signature-line"></span>

                            <span>
                                David Level
                                <small>Canina Lingua</small>
                            </span>
                        </div>
                    </div>

                    <div className="about-story-photo-wrap fade-in-side-right">
                        <div className="about-story-photo-frame">
                            <img
                                className="about-story-photo"
                                src={davidWithDogPhoto1}
                                alt="Canina Lingua - David Level photo 1"
                                fetchPriority="high"
                            />
                        </div>

                        <div className="about-photo-caption">
                            <span className="about-photo-caption-mark">
                                +
                            </span>

                            <span>
                                Mieux se comprendre pour mieux vivre ensemble
                            </span>
                        </div>
                    </div>
                </div>

                {/* 2. PROFESSIONAL JOURNEY */}
                <div className="about-journey">
                    <div className="about-journey-heading fade-in-up">
                        <span className="about-eyebrow">
                            Mon parcours
                        </span>

                        <h2>
                            Une formation en accord avec mes convictions
                        </h2>

                        <p>
                            Faire de cette passion mon métier nécessitait
                            une formation qui corresponde à ma vision
                            d'une relation humain-chien éthique et
                            respectueuse.
                        </p>
                    </div>

                    <div className="about-journey-content">

                        {/* CARD 1: CHOICE OF TRAINING */}
                        <div className="about-journey-item fade-in-side-left">

                            <div className="about-journey-item-heading">
                                <div className="about-journey-marker">
                                    <FontAwesomeIcon
                                        icon={faGraduationCap}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>
                                    Le choix de la formation
                                </h3>
                            </div>

                            <div className="about-journey-text">
                                <p>
                                    Le C.F.P.P.A. de Cibeins, dans l'Ain,
                                    s'est imposé comme une évidence.
                                    J'y ai suivi des enseignements en
                                    éthologie, en zootechnie et en
                                    éducation canine, auprès notamment de Séverine Belkir,
                                    Mélodie Pichoir,{" "}
                                    <a
                                        href="https://www.caprices-de-sirius.fr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Sandrine Verneaut
                                    </a>
                                    ,{" "}
                                    <a
                                        href="https://www.cestpluscanin.fr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Nicolas Tessier
                                    </a>{" "}
                                    et Rémy Wrobel.
                                </p>
                            </div>
                        </div>

                        {/* CARD 2: DIPLOMA */}
                        <div className="about-journey-item fade-in-side-right">

                            <div className="about-journey-item-heading">
                                <div className="about-journey-marker">
                                    <FontAwesomeIcon
                                        icon={faAward}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>
                                    L'obtention de mon diplôme
                                </h3>
                            </div>

                            <div className="about-journey-text">
                                <p>
                                    Cette formation m'a permis d'obtenir
                                    le Brevet Professionnel d'Éducateur
                                    Canin et de développer les connaissances
                                    nécessaires pour accompagner les
                                    chiens et leurs maîtres.
                                </p>
                            </div>
                        </div>

                        {/* CARD 3: CONTINUOUS LEARNING */}
                        <div className="about-journey-item fade-in-side-left">

                            <div className="about-journey-item-heading">
                                <div className="about-journey-marker">
                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>
                                    Continuer à apprendre
                                </h3>
                            </div>

                            <div className="about-journey-text">
                                <p>
                                    J'ai également participé à des stages
                                    avec Jacinthe Bouchard, notamment
                                    autour du clicker-training. J'ai pu
                                    découvrir le travail avec plusieurs
                                    espèces : chiens, poules, chèvres
                                    et alpagas.
                                </p>

                                <p>
                                    Ces expériences ont enrichi ma
                                    compréhension des mécanismes
                                    d'apprentissage et de la relation
                                    entre l'humain et l'animal.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="about-diploma">
                        <span
                            className="about-diploma-icon"
                            aria-hidden="true"
                        >
                            ✓
                        </span>

                        <div>
                            <span className="about-diploma-label">
                                Formation professionnelle
                            </span>

                            <strong>
                                Brevet Professionnel d'Éducateur Canin
                            </strong>

                            <p>
                                Des connaissances en éducation canine,
                                en comportement et en apprentissage.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. PERSONAL PHILOSOPHY */}
                <div className="about-philosophy-feature fade-in-up">
                    <div className="about-philosophy-feature-photo">
                        <img
                            src={davidWithDogPhoto2}
                            alt="Canina Lingua - David Level photo 2"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="about-philosophy-feature-copy">
                        <span className="about-eyebrow">
                            Ma philosophie
                        </span>

                        <div
                            className="about-philosophy-feature-quote"
                            aria-hidden="true"
                        >
                            “
                        </div>

                        <h2>
                            Je ne travaille pas uniquement sur les
                            apprentissages, mais également sur les émotions.
                        </h2>

                        <p>
                            Un chien ne se résume pas à ce qu'il fait.
                            Sa façon de réagir dépend aussi de ce qu'il
                            ressent, de ce qu'il a appris et de la manière
                            dont il perçoit son environnement.
                        </p>

                        <p>
                            Comprendre ces éléments permet d'adapter
                            l'accompagnement plutôt que de chercher
                            simplement à obtenir un résultat immédiat.
                        </p>

                        <span className="about-philosophy-motto">
                            Comprendre pour entreprendre
                        </span>
                    </div>
                </div>

                {/* 4. VALUES WITH PORTRAIT PHOTO */}
                <div className="about-values">
                    <div className="about-group-heading fade-in-up">
                        <span className="about-eyebrow">
                            Mes valeurs
                        </span>

                        <h2>
                            Une éducation respectueuse du chien
                        </h2>

                        <p>
                            Cette approche repose sur des principes
                            simples : respecter l'animal, favoriser
                            sa motivation et apprendre à écouter
                            sa communication.
                        </p>
                    </div>

                    <div className="about-values-content">
                        <div className="about-values-grid">
                            <div className="about-value-card fade-in-up">
                                <div className="about-value-icon">
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>
                                    Le respect avant tout
                                </h3>

                                <p>
                                    Le chien est un être vivant doté de
                                    sensibilité. Les méthodes employées
                                    doivent préserver son intégrité physique
                                    et mentale. Ses besoins, ses limites
                                    et ses émotions font partie intégrante
                                    du travail éducatif.
                                </p>
                            </div>

                            <div className="about-value-card fade-in-up">
                                <div className="about-value-icon">
                                    <FontAwesomeIcon
                                        icon={faBone}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>
                                    Apprendre par la motivation
                                </h3>

                                <p>
                                    Une caresse, une félicitation, une
                                    friandise ou de l'attention peuvent
                                    encourager les apprentissages. Je
                                    privilégie la motivation à recevoir
                                    plutôt qu'une approche fondée sur
                                    la sanction, afin de favoriser des
                                    émotions positives pendant le travail.
                                </p>
                            </div>

                            <div className="about-value-card fade-in-up">
                                <div className="about-value-icon">
                                    <FontAwesomeIcon
                                        icon={faComments}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>
                                    Comprendre sa communication
                                </h3>

                                <p>
                                    Les postures, les réactions et les
                                    signaux d'apaisement nous renseignent
                                    sur la façon dont le chien vit une
                                    situation. Apprendre à les reconnaître
                                    aide à mieux comprendre le chien et
                                    à limiter les situations susceptibles
                                    de le mettre en difficulté.
                                </p>
                            </div>
                        </div>

                        <figure className="about-values-photo fade-in-side-right">
                            <img
                                src={davidValuesPhoto}
                                alt="Canina Lingua - David Level photo 3"
                                loading="lazy"
                                decoding="async"
                            />

                            <figcaption className="about-values-photo-caption">
                                Une relation fondée sur la confiance et le respect
                            </figcaption>
                        </figure>
                    </div>
                </div>

                {/* 5. FIELD WORK WITH PORTRAIT PHOTO */}
                <div className="about-field">
                    <div className="about-field-photo fade-in-side-left">
                        <img
                            src={davidWorkingPortrait}
                            alt="Canina Lingua - David Level photo 4"
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="about-field-photo-label">
                            <span>Sur le terrain</span>
                            <small>
                                Dans l'environnement réel du chien
                            </small>
                        </div>
                    </div>

                    <div className="about-field-copy fade-in-side-right">
                        <span className="about-eyebrow">
                            Ma pratique
                        </span>

                        <h2>
                            Travailler là où la vie se passe
                        </h2>

                        <p>
                            Les apprentissages ne s'arrêtent pas à un
                            terrain d'entraînement. Ils doivent pouvoir
                            trouver leur place dans la vie quotidienne :
                            à la maison, pendant les sorties et dans
                            les lieux que le chien rencontre régulièrement.
                        </p>

                        <p>
                            C'est pourquoi mon accompagnement se déroule
                            à domicile et dans des lieux de balade
                            adaptés à la situation. Cela permet de
                            prendre en compte l'environnement, les
                            habitudes et les difficultés réelles
                            rencontrées par le chien et son maître.
                        </p>

                        <div className="about-field-note">
                            <span
                                className="about-field-note-icon"
                                aria-hidden="true"
                            >
                                ✓
                            </span>

                            <p>
                                L'objectif : construire des apprentissages
                                qui ont du sens et peuvent être réutilisés
                                au quotidien.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 6. HOW DAVID HELPS WITH LANDSCAPE PHOTO */}
                <div className="about-support">
                    <div className="about-support-content fade-in-side-left">
                        <span className="about-eyebrow">
                            Vous accompagner
                        </span>

                        <h2>
                            Chaque duo maître-chien a son histoire
                        </h2>

                        <p>
                            Un chiot qui découvre le monde, un chien qui
                            rencontre des difficultés ou un maître qui
                            cherche à mieux comprendre son compagnon :
                            les situations sont différentes et méritent
                            d'être abordées individuellement.
                        </p>

                        <p>
                            Mon rôle est de vous aider à faire le point
                            sur votre situation, à mieux lire les
                            comportements de votre chien et à travailler
                            sur des objectifs adaptés à votre quotidien.
                        </p>

                        <div className="about-support-list">
                            <div className="about-support-item">
                                <span className="about-support-check">
                                    ✓
                                </span>

                                <div>
                                    <strong>
                                        Éducation canine
                                    </strong>

                                    <p>
                                        Accompagner les apprentissages
                                        et les habitudes du quotidien.
                                    </p>
                                </div>
                            </div>

                            <div className="about-support-item">
                                <span className="about-support-check">
                                    ✓
                                </span>

                                <div>
                                    <strong>
                                        Rééducation comportementale
                                    </strong>

                                    <p>
                                        Travailler sur les difficultés
                                        liées au stress, à la peur,
                                        à la frustration, aux destructions
                                        ou à la réactivité.
                                    </p>
                                </div>
                            </div>

                            <div className="about-support-item">
                                <span className="about-support-check">
                                    ✓
                                </span>

                                <div>
                                    <strong>
                                        Chiots et balades
                                    </strong>

                                    <p>
                                        Découvrir les besoins du chiot,
                                        la communication canine et les
                                        apprentissages pendant les balades
                                        sociales ou pédagogiques.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <NavLink
                            to="/prestations-tarifs"
                            content="Découvrir mes prestations"
                            id="about-services-contact"
                        />
                    </div>

                    <div className="about-support-photo fade-in-side-right">
                        <img
                            src={davidWorkingLandscape}
                            alt="Canina Lingua - David Level photo 5"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* 7. INTERVENTION AREA */}
                <div className="about-area fade-in-up">
                    <div className="about-area-distance">
                        <span className="about-area-distance-number">
                            40 <small>km</small>
                        </span>

                        <div className="about-area-distance-info">
                            <strong>
                                Zone d'intervention principale
                            </strong>

                            <p>
                                Autour de Boulogne-sur-Mer
                            </p>
                        </div>
                    </div>

                    <div className="about-area-content">
                        <span className="about-eyebrow">
                            La Côte d'Opale
                        </span>

                        <h2>
                            Un accompagnement près de chez vous
                        </h2>

                        <p>
                            Je me déplace à domicile et dans les lieux de balade
                            du quotidien, dans mon secteur principal autour de
                            Boulogne-sur-Mer. Les sorties sont organisées sur
                            différents sites naturels de la Côte d'Opale ou dans
                            des lieux adaptés aux besoins du chien. Je n'interviens
                            pas sur des terrains d'entraînement clos.
                        </p>

                        <div
                            className="about-area-places"
                            aria-label="Exemples de secteurs concernés"
                        >
                            <span>Boulogne-sur-Mer</span>
                            <span>Marquise</span>
                            <span>Wimereux</span>
                            <span>Hardelot</span>
                            <span>Calais</span>
                            <span>Bien d'autres secteurs de la Côte d'Opale...</span>
                        </div>
                    </div>

                    <figure className="about-area-photo">
                        <img
                            src={davidBeachWalk}
                            alt="Canina Lingua - David Level photo 6"
                            loading="lazy"
                            decoding="async"
                        />

                        <figcaption className="about-area-photo-caption">
                            <span>Balades sur la Côte d'Opale</span>
                        </figcaption>
                    </figure>
                </div>

                {/* 8. CONTACT */}
                <div className="about-contact-cta fade-in-up">
                    <div
                        className="about-cta-paw"
                        aria-hidden="true"
                    ></div>

                    <span className="about-eyebrow">
                        Faisons connaissance
                    </span>

                    <h2>
                        Mieux comprendre votre chien, ça commence par un échange
                    </h2>

                    <p>
                        Vous souhaitez être accompagné dans l'éducation
                        de votre chien ou mieux comprendre une difficulté ?
                        Parlons de votre situation et des besoins de
                        votre compagnon.
                    </p>

                    <NavLink
                        to="/contact"
                        content="Contacter Canina Lingua"
                        id="about-main-contact"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;