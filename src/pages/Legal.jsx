
import React from 'react';

import usePageMetaData from '../hooks/usePageMetaData';

import '../css/Legal.css';

import NavLink from "../components/NavLink.jsx";


// Legal & privacy policy page
function Legal() {
    usePageMetaData(
        "Canina Lingua - Mentions légales et politique de confidentialité",
        "Retrouvez les mentions légales et la politique de confidentialité de Canina Lingua : collecte, utilisation, conservation et protection de vos données personnelles."
    );

    return (
        <div className="legal-container">
            <h1>Mentions légales et politique de confidentialité</h1>

            {/* Part 1: Legal section */}
            <div className="legal-section">
                <h2>Mentions légales</h2>

                <div className="legal-section-text">
                    <p><strong>Nom commercial : </strong>Canina Lingua</p>

                    <p><strong>Forme Juridique : </strong>Entrepreneur individuel</p>

                    <p><strong>Forme d'exercice : </strong>Libérale non règlementée, Commerciale, Artisanale</p>

                    <p><strong>Représentant légal et Directeur de la publication : </strong>LEVEL David, Philippe, Francis</p>

                    <p><strong>SIREN : </strong>888 209 483</p>

                    <p><strong>SIRET (siège) : </strong>888 209 483 00021</p>

                    <p><strong>Date d'immatriculation au RNE : </strong>20/08/2020</p>

                    <p><strong>Date de début d'activité : </strong>08/09/2020</p>

                    <p><strong>Activité principale : </strong>Education comportementaliste canin en clientèle et vente d'articles et accessoires pour animaux.</p>

                    <p><strong>Code APE : </strong>9609Z - Autres services personnels n.c.a.</p>

                    <p><strong>Code APRM : </strong>9609ZP - Toilettage d'animaux de compagnie</p>

                    <p>
                        <strong>Adresse de l'entreprise : </strong>
                        16 rue de l'Amiral Courbet, Appartement 5, 62480 Le Portel, France
                    </p>

                    <p><strong>Numéro de téléphone : </strong>06 61 97 01 16</p>

                    <p><strong>Adresse électronique : </strong>david.level@caninalingua.fr</p>
                </div>
            </div>


            {/* Part 2: Privacy section */}
            <div className="privacy-section">
                <h2>Politique de confidentialité</h2>

                <div className="privacy-section-text">

                    <h3>Collecte et utilisation des données personnelles</h3>

                    <p>
                        Dans le cadre de l'utilisation du site Canina Lingua, certaines données à caractère personnel
                        peuvent être collectées, notamment lorsque vous utilisez le formulaire de contact.
                        Leur traitement est effectué conformément au règlement (UE) 2016/679 du 27 avril 2016,
                        dit Règlement général sur la protection des données (RGPD), ainsi qu'à la loi
                        n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés.
                    </p>

                    <p>
                        Les informations collectées via le formulaire de contact sont les suivantes :
                    </p>

                    <ul>
                        <li>Nom complet ;</li>
                        <li>Adresse e-mail ;</li>
                        <li>Numéro de téléphone (facultatif) ;</li>
                        <li>Sujet du message ;</li>
                        <li>Contenu du message.</li>
                    </ul>

                    <p>
                        Ces informations sont utilisées exclusivement pour prendre connaissance de votre demande,
                        y répondre et, le cas échéant, organiser ou préparer une prestation d'éducation canine
                        ou d'accompagnement comportemental.
                    </p>


                    <h3>Base légale du traitement</h3>

                    <p>
                        Le traitement des données repose, selon la nature de votre demande, sur les mesures
                        précontractuelles prises à votre demande ou sur l'intérêt légitime de Canina Lingua
                        à assurer la gestion et le suivi des demandes de contact reçues.
                    </p>


                    <h3>Transmission et traitement des données - RG Forms et services Google</h3>

                    <p>
                        Le formulaire de contact utilise{' '}
                        <a href="https://rgforms.com/" target="_blank" rel="noopener noreferrer">
                            RG Forms
                        </a>,
                        un outil permettant de configurer un système de réception de formulaires à partir des services Google.
                    </p>

                    <p>
                        Lors de l'envoi du formulaire, les données saisies sont transmises directement depuis votre
                        navigateur vers un point de réception Google Apps Script, déployé dans le compte Google
                        utilisé par Canina Lingua.
                    </p>

                    <p>
                        Elles sont ensuite enregistrées dans une feuille de calcul Google Sheets, stockée dans
                        un espace Google Drive associé à ce compte. Une notification contenant les informations
                        de votre demande est également envoyée à l'adresse e-mail configurée pour recevoir les messages.
                    </p>

                    <p>
                        Selon la politique de confidentialité de son éditeur, RG Forms ne collecte, ne stocke
                        et ne transmet pas les données contenues dans les soumissions des formulaires.
                        Les données des visiteurs sont envoyées directement vers les ressources Google configurées
                        par Canina Lingua, sans transiter par un serveur de stockage exploité par RG Forms.
                        Vous pouvez consulter sa{' '}
                        <a href="https://rgforms.com/privacy/" target="_blank" rel="noopener noreferrer">
                            politique de confidentialité
                        </a>.
                    </p>

                    <p>
                        Le traitement technique des soumissions repose ainsi sur les services Google nécessaires
                        à leur transmission, leur enregistrement et l'envoi des notifications par e-mail.
                        Les données sont soumises aux conditions et à la{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            politique de confidentialité de Google
                        </a>.
                    </p>


                    <h3>Destinataires des données</h3>

                    <p>
                        Les données recueillies sont destinées à David Level, responsable de Canina Lingua,
                        dans le cadre du traitement des demandes de contact.
                        Elles sont également traitées techniquement par les services Google nécessaires
                        à leur transmission, leur enregistrement et l'envoi des notifications.
                    </p>

                    <p>
                        Les données personnelles ne sont ni vendues, ni louées, ni utilisées à des fins
                        commerciales pour le compte de tiers.
                    </p>


                    <h3>Durée de conservation</h3>

                    <p>
                        Les données sont conservées pendant le temps nécessaire au traitement de votre demande
                        et au suivi des échanges.
                        Lorsqu'une demande n'aboutit pas à une relation commerciale, les données relatives
                        au prospect sont conservées pendant une durée maximale de trois ans à compter de leur
                        collecte ou du dernier contact émanant de celui-ci, sous réserve d'une suppression
                        anticipée lorsqu'elles ne sont plus nécessaires.
                    </p>

                    <p>
                        Lorsqu'une relation commerciale est établie, les informations nécessaires à son suivi
                        sont conservées pendant la durée de cette relation, puis, le cas échéant,
                        archivées conformément aux obligations légales applicables.
                    </p>


                    <h3>Vos droits concernant vos données personnelles</h3>

                    <p>
                        Conformément à la réglementation applicable, vous disposez, selon les conditions prévues
                        par le RGPD, d'un droit d'accès, de rectification, d'effacement et de limitation du traitement
                        de vos données.
                        Vous pouvez également vous opposer à certains traitements et demander la portabilité
                        de vos données lorsque ce droit est applicable.
                    </p>

                    <p>
                        Ces droits peuvent être exercés directement auprès du responsable du traitement des données,
                        <strong> David Level (Canina Lingua)</strong>, en précisant dans l'objet de votre demande
                        « Droit des personnes (RGPD) » :
                    </p>

                    <p>
                        <strong>David Level - Canina Lingua</strong>
                        <br />
                        16 rue de l'Amiral Courbet, Appartement 5
                        <br />
                        62480 Le Portel, France
                        <br />
                        Adresse e-mail : <strong>david.level@caninalingua.fr</strong>
                    </p>

                    <p>
                        Vous pouvez effectuer votre demande :
                    </p>

                    <ul>
                        <li>
                            Soit directement sur le site, via notre page de{' '}
                            <NavLink to="/contact" content="Contact" />;
                        </li>

                        <li>
                            Soit par e-mail : <strong>david.level@caninalingua.fr</strong> ;
                        </li>

                        <li>
                            Soit par voie postale en écrivant à : <strong>Canina Lingua - David Level,
                            16 rue de l'Amiral Courbet, Appartement 5, 62480 Le Portel, France</strong>.
                        </li>
                    </ul>

                    <p>
                        Un justificatif d'identité pourra être demandé uniquement en cas de doute raisonnable
                        sur l'identité du demandeur.
                    </p>

                    <p>
                        Si vous estimez, après avoir contacté Canina Lingua, que vos droits ne sont pas respectés,
                        vous pouvez adresser une réclamation à la{' '}
                        <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">
                            Commission nationale de l'informatique et des libertés (CNIL)
                        </a>.
                    </p>

                </div>
            </div>


            {/* Part 3: Hosting and credits */}
            <div className="hosting-section">
                <h2>Hébergement et crédits</h2>

                <div className="hosting-section-text">

                    <h3>Centre serveur et nom de domaine :</h3>

                    <p>
                        Le site et son centre serveur sont hébergés par <strong>Cloudflare Pages</strong> (
                        <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">
                            Cloudflare
                        </a>, Inc.),
                        dont le siège social est situé : <strong>101 Townsend St, San Francisco, CA 94107, États-Unis.</strong>
                    </p>

                    <p>
                        Le nom de domaine <a href="">www.nomdomaine.fr</a> est enregistré et géré par{' '}
                        <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer">
                            OVHcloud
                        </a>,
                        dont le siège social est établi : <strong>2 rue Kellermann, 59100 Roubaix, France.</strong>
                    </p>


                    <h3>Conception et développement du site :</h3>

                    <p>
                        <strong>
                            <a href="https://www.webuniv.fr/" target="_blank" rel="noopener noreferrer">
                                WebUniv
                            </a>
                        </strong> - Jovany Hochart
                    </p>

                    <p><strong>Liens de contact :</strong></p>

                    <p>
                        <a href="mailto:webuniv.pro@gmail.com">
                            Envoyer un mail à WebUniv
                        </a>
                        {' '}|{' '}
                        <a
                            href="https://www.webuniv.fr/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contacter via le site de WebUniv
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Legal;
