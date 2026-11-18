import {
    faPersonWalking,
    faHouseChimney,
    faStethoscope,
} from "@fortawesome/free-solid-svg-icons";


import canopeeLogo from "../assets/img/img_logo_partenaires/Canina_Lingua_Logo_partenaire_Canopee_Dog_Walker.webp";
import GardienneDeVos4PattesLogo from "../assets/img/img_logo_partenaires/Canina_Lingua_Logo_partenaire_Gardienne_de_vos_4_pattes.webp";
import CabinetVeterinaireLaRoseraieLogo from "../assets/img/img_logo_partenaires/Canina_Lingua_Logo_partenaire_Cabinet_Veterinaire_La_Roseraie.webp";

/*
    CHAMPS D'UN PARTENAIRE

    id          : identifiant unique (sert de clé React)
    name        : nom exact de la structure
    category    : type d'activité (affiché en badge)
    city        : commune (null si inconnue : la ligne n'est pas affichée)
    url         : lien vers son site ou sa page (null : carte non cliquable)
    logo        : logo importé fourni par le partenaire (null : icône à la place)
    icon        : icône Font Awesome utilisée si pas de logo
*/
const partners = [
    {
        id: "canopee",
        name: "CANOPÉE Dog walker",
        category: "Dog walker",
        city: "Boulogne-sur-Mer",
        url: "https://canopeedogwalker.com/",
        logo: canopeeLogo,
        icon: faPersonWalking,
    },
    {
        id: "gardienne-de-vos-4-pattes",
        name: "Gardienne de vos 4 pattes",
        category: "Pension familiale",
        city: "Téteghem-Coudekerque-Village",
        url: "https://ifpm092.wixsite.com/gardienne-des-4-pa-1",
        logo: GardienneDeVos4PattesLogo,
        icon: faHouseChimney,
    },
    {
        id: "la-roseraie",
        name: "Cabinet vétérinaire La Roseraie",
        category: "Cabinet vétérinaire",
        city: "Baincthun",
        url: "https://www.monrendezvousveto.fr/clinique/baincthun/clinique-veterinaire-de-la-roseraie",
        logo: CabinetVeterinaireLaRoseraieLogo,
        icon: faStethoscope,
    },
];

export default partners;