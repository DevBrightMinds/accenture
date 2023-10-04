import React from "react";

import { Link } from "react-router-dom";

import AppLogo from "../assets/svgs/logo.svg";

import $ from "jquery";

export const NavMenu: React.FC<{}> = (): JSX.Element => {
    const toggleMenu = () => {
        $(".app-nav-menu").slideToggle(500);
    }

    return <>
        <header>
            <div className="app-header-container">
                <div className="app-header-content">
                    <div className="app-header-contents">
                        <div className="app-logo">
                            <img src={AppLogo} alt="logo" />
                        </div>
                        <div className="app-nav-menu">
                            <ul>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/industries">Industries</Link></li>
                                <li><Link to="/cases">Cases</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="lets-talk-btn">
                            <button className="button is-rounded">Let's Talk</button>
                        </div>
                        <div className="app-mobile-nav-btn" onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}