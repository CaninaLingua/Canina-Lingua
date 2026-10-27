import React, { useEffect, useState } from 'react';
import '../css/Contact.css';

import useRevealOnScroll from '../hooks/useRevealOnScroll';

import Schedules from '../components/Schedules';
import NavLink from '../components/NavLink';
import PhoneButton from '../components/PhoneButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    // Scroll reveal animation initialization
    useRevealOnScroll(".fade-in-up, .fade-in-side-left, .fade-in-side-right");

    // Set page title on component mount
    useEffect(() => {
        document.title = "Canina Lingua - Contactez-moi !";
    }, []);

    // Form input state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    // Form submission status
    const [status, setStatus] = useState({
        loading: false,
        success: null
    });

    // Optional phone field validation error
    const [phoneError, setPhoneError] = useState('');

    // Handle input field changes
    const handleChange = (e) => {
        const { name } = e.target;
        let { value } = e.target;

        // Allow only digits and common phone number separators
        if (name === 'phone') {
            value = value.replace(/[^\d+ .-]/g, '');
            setPhoneError('');
        }

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission via FormSubmit AJAX endpoint
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the optional French phone number
        const phone = formData.phone.trim();
        const normalizedPhone = phone.replace(/[ .-]/g, '');
        const phoneRegex = /^(?:0[1-9]\d{8}|\+33[1-9]\d{8})$/;

        if (phone && !phoneRegex.test(normalizedPhone)) {
            setPhoneError(
                "Veuillez saisir un numéro valide, par exemple 06 12 34 56 78 ou +33 6 12 34 56 78."
            );
            setStatus({ loading: false, success: null });
            return;
        }

        setPhoneError('');
        setStatus({ loading: true, success: null });

        // Send AJAX request to avoid external page redirection
        fetch("https://formsubmit.co/ajax/a08fb2b7d86ca96e76a05666333d5e97", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
           body: JSON.stringify({
                "Nom complet": formData.name,
                email: formData.email,
                "Numéro de téléphone": formData.phone || "Non renseigné",
                "Sujet du message": formData.subject,
                "Message": formData.message,
                _replyto: formData.email,
                _subject: `🐾🐶 Nouveau message de contact : ${formData.subject}`,
                _template: "box"
            })
        })
        .then(async (response) => {
            const data = await response.json();

            if (
                response.ok &&
                (data.success === "true" || data.success === true)
            ) {
                setStatus({ loading: false, success: true });

                // Reset form input fields
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });

                setPhoneError('');
            } else {
                console.error("Erreur FormSubmit :", data);
                setStatus({ loading: false, success: false });
            }
        })
        .catch((error) => {
            console.error("Erreur lors de l'envoi du formulaire :", error);
            setStatus({ loading: false, success: false });
        });
    };

    return (
        <div className="contact-container">

            {/* Contact Hero Banner */}
            <div className="contact-hero-banner fade-in-up">
                <div className="contact-hero-banner-overlay"></div>

                <div className="contact-hero-banner-card">
                    <div className="contact-hero-paw-bg"></div>

                    <h1 className="contact-hero-banner-title">Contact</h1>

                    <p className="contact-hero-banner-subtitle">
                        Vous souhaitez être accompagné dans l’éducation de votre chien, améliorer un comportement ou simplement obtenir un renseignement ? Contactez-moi par téléphone (de préférence) ou par écrit.
                    </p>

                    <div className="contact-hero-banner-stats">
                        <div className="contact-stat-item">
                            <span className="contact-stat-value">Sur rendez-vous</span>
                            <span className="contact-stat-label">Bilan & Séances</span>
                        </div>

                        <div className="contact-stat-divider"></div>

                        <div className="contact-stat-item">
                            <span className="contact-stat-value">À Domicile</span>
                            <span className="contact-stat-label">Boulogne-sur-Mer & Alentours</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Contact Wrapper */}
            <div className="contact-wrap">

                {/* Left Side: Information & Direct Contact Details */}
                <div className="contact-infos-side fade-in-side-left">
                    <h1 className="contact-infos-title">Informations</h1>

                    <h2 className="contact-infos-subtitle">
                        Infos pratiques & Coordonnées
                    </h2>

                    <p className="contact-infos-desc">
                        Retrouvez ici l'ensemble des informations pratiques concernant nos déplacements, nos horaires d'ouverture et nos moyens de contact direct.
                    </p>

                    {/* Intervention Zone Section */}
                    <div className="contact-zone-section">
                        <h3 className="contact-zone-title">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="contact-zone-icon"
                            />
                            Boulogne-sur-Mer et ses alentours
                        </h3>

                        <p className="contact-zone-details">
                            Déplacements jusqu'à <strong>40 km</strong> autour.
                            <br />
                            <em>
                                (Possibilité d'intervention jusqu'à <strong>60 km</strong> avec frais supplémentaires).
                            </em>
                        </p>
                    </div>

                    {/* Direct Contact Buttons (Phone & Email) */}
                    <div className="contact-direct-actions">
                        <PhoneButton className="contact-direct-btn" />

                        <a
                            href="mailto:david.level@caninalingua.fr"
                            className="contact-direct-btn"
                        >
                            <FontAwesomeIcon
                                className="contact-direct-icon"
                                icon={faEnvelope}
                            />
                            <span>david.level@caninalingua.fr</span>
                        </a>
                    </div>

                    {/* Opening Hours Section */}
                    <Schedules className="contact-infos" />

                    {/* Social Media Links Section */}
                    <div className="contact-socials-section">
                        <h2 className="contact-socials-title">
                            Rejoignez mes réseaux sociaux
                        </h2>

                        <div className="contact-socials-links">
                            <a
                                href="https://www.facebook.com/caninalingua62/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>

                            <a
                                href="https://www.instagram.com/caninalingua/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form Section */}
                <div className="contact-form-section fade-in-side-right">
                    <h1 className="contact-form-title">Me contacter</h1>

                    <form
                        onSubmit={handleSubmit}
                        className="contact-form-element"
                    >
                        <div className="contact-form-group">
                            <label htmlFor="name">Nom complet*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Saisissez votre nom complet..."
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="email">Adresse e-mail*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Saisissez votre adresse e-mail..."
                                autoComplete="email"
                                required
                            />
                        </div>

                        {/* Optional Phone Number */}
                        <div className="contact-form-group">
                            <label htmlFor="phone">
                                Numéro de téléphone (facultatif)
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Ex. : 06 12 34 56 78"
                                autoComplete="tel"
                                inputMode="tel"
                                aria-invalid={phoneError ? "true" : "false"}
                                aria-describedby={
                                    phoneError ? "phone-error" : undefined
                                }
                            />

                            {phoneError && (
                                <p
                                    id="phone-error"
                                    className="contact-field-error"
                                    role="alert"
                                >
                                    {phoneError}
                                </p>
                            )}
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="subject">Sujet du message*</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Ex. : Bilan comportemental, éducation canine, balade sociale..."
                                required
                            />
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="message">Votre message*</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Décrivez brièvement vos besoins, vos idées..."
                                required
                            ></textarea>
                        </div>

                        <p className="contact-form-note">
                            * Champs obligatoires
                        </p>

                        <p className="contact-privacy-text">
                            En soumettant ce formulaire, vous acceptez que les informations saisies soient exploitées dans le cadre de la demande de contact et de la relation professionnelle qui peut en découler. Pour en savoir plus, consultez notre{' '}
                            <NavLink
                                to="/legal"
                                content="Politique de confidentialité"
                            />.
                        </p>

                        <div className="contact-form-actions">
                            <button
                                type="submit"
                                className="contact-submit-btn"
                                disabled={status.loading}
                            >
                                {status.loading
                                    ? "Transmission en cours..."
                                    : "Envoyer le message"
                                }
                            </button>

                            {status.success === true && (
                                <p className="contact-alert success" role="status">
                                    ✅ Message envoyé avec succès ! Je vous réponds au plus vite.
                                </p>
                            )}

                            {status.success === false && (
                                <p className="contact-alert error" role="alert">
                                    ❌ Une erreur est survenue. Merci de réessayer ou d'utiliser le mail direct.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Contact;