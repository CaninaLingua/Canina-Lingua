import React from 'react';

import { NavLink, useLocation } from "react-router-dom";

import logo from '../assets/img/Canina_Lingua_Logo_Full.webp';

//this component is the logo of the website that brings to the homepage when clicked on
function Logo() {
    const location = useLocation();

    const handleClick = (event) => {
        // if the user is already in home page
        if (location.pathname === "/") {
            // prevent useless navigation to current page
            event.preventDefault();

            // scroll back smoothly to the top of the page
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <NavLink
            to="/"
            className="logo"
            onClick={handleClick}
            aria-label="Retour à l'accueil Canina Lingua"
        >
            <div className="logo-img-wrapper">
                <img
                    src={logo}
                    alt="Logo Canina Lingua"
                    className="logo-img"
                />
            </div>

            <div className="logo-text-container">
                <h1 className="logo-title">Canina Lingua</h1>
                <h4 className="logo-subtitle">
                    Éducateur comportementaliste canin
                </h4>
            </div>
        </NavLink>
    );
}

export default Logo;