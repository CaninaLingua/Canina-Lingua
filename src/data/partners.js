import {
    faPersonWalking,
    faHouseChimney,
    faStethoscope,
} from "@fortawesome/free-solid-svg-icons";


import canopeeLogo from "../assets/img/img_logo_partenaires/Canina_Lingua_Logo_partenaire_Canopée_Dog_Walker.webp";
import GardienneDeVos4PattesLogo from "../assets/img/img_logo_partenaires/Canina_Lingua_Logo_partenaire_Gardienne_de_vos_4_pattes.webp";
import CabinetVeterinaireLaRoseraieLogo from "../assets/img/img_logo_partenaires/Canina_Lingua_Logo_partenaire_Cabinet_Vétérinaire_La_Roseraie.webp";

/*
    AFFICHAGE DE LA SECTION PARTENAIRES

    - En local (npm run dev) : la section et tous les partenaires s'affichent,
      avec une étiquette « À confirmer » sur ceux qui ne sont pas encore validés.
    - En production (build) : rien ne s'affiche tant que SHOW_PARTNERS_SECTION
      vaut false. Une fois passé à true, seuls les partenaires « confirmed: true »
      sont affichés.
*/
export const SHOW_PARTNERS_SECTION = true;

/*
    CHAMPS D'UN PARTENAIRE

    id          : identifiant unique (sert de clé React)
    name        : nom exact de la structure
    category    : type d'activité (affiché en badge)
    city        : commune (null si inconnue : la ligne n'est pas affichée)
    url         : lien vers son site ou sa page (null : carte non cliquable)
    logo        : logo importé fourni par le partenaire (null : icône à la place)
    icon        : icône Font Awesome utilisée si pas de logo
    confirmed   : true quand le partenaire a donné son accord écrit
*/
const partners = [
    {
        id: "canopee",
        name: "CANOPÉE Dog walker",
        category: "Dog walker",
        city: "Boulogne-sur-Mer", // TODO : commune à confirmer
        url: "https://canopeedogwalker.com/",
        logo: canopeeLogo,
        icon: faPersonWalking,
        confirmed: true,
    },
    {
        id: "gardienne-de-vos-4-pattes",
        name: "Gardienne de vos 4 pattes",
        category: "Pension familiale",
        city: "Téteghem-Coudekerque-Village", // TODO : vérifier (Coudekerque ou Coudekerque-Branche)
        url: "https://ifpm092.wixsite.com/gardienne-des-4-pa-1",
        logo: GardienneDeVos4PattesLogo,
        icon: faHouseChimney,
        confirmed: false,
    },
    {
        id: "la-roseraie",
        name: "Cabinet vétérinaire La Roseraie",
        category: "Cabinet vétérinaire",
        city: "Baincthun",
        url: "https://www.monrendezvousveto.fr/clinique/baincthun/clinique-veterinaire-de-la-roseraie",
        logo: CabinetVeterinaireLaRoseraieLogo,
        icon: faStethoscope,
        confirmed: false,
    },
];

export default partners;