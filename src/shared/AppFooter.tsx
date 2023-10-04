import React from "react";

import { Link } from "react-router-dom";

import { RectangleBand } from "./RectangleBand";

export const AppFooter: React.FC<{}> = (): JSX.Element => {
    return <>
        <footer>
            <div className="app-footer-container">
                <div className="app-footer-content">
                    <div className="footer-top-item">
                        <RectangleBand Text="Contact us" />
                    </div>
                    <div className="footer-mid-item">
                        <div className="mid-item-container">
                            <h4>Have a project in mind?
                                Let's make it happen</h4>
                        </div>
                        <div className="mid-item-container">
                            <ul>
                                <li> 22 Street Name, Suburb, 8000,</li>
                                <li> Cape Town, South Africa</li>
                                <li>+27 21 431 0001</li>
                                <li><Link to="mailto:enquirie@website.co.za">enquirie@website.co.za</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-lower-items">
                        <div className="lower-contents">
                            <div className="lower-items">
                                <ul>
                                    <li><Link to="/">Terms of service</Link></li>
                                    <li><Link to="/">Privacy policy</Link></li>
                                    <li><Link to="/">Impressum</Link></li>
                                </ul>
                            </div>
                            <div className="lower-items">
                                <ul>
                                    <li><Link to="/">Facebook</Link></li>
                                    <li><Link to="/">Instagram</Link></li>
                                    <li><Link to="/">Twitter</Link></li>
                                </ul>
                            </div>
                            <div className="lower-items">
                                <ul>
                                    <li><Link to="/">Github</Link></li>
                                    <li><Link to="/">Linkedin</Link></li>
                                    <li><Link to="/">Teams</Link></li>
                                </ul>
                            </div>
                            <div className="lower-items">
                                <ul>
                                    <li><Link to="/">Youtube</Link></li>
                                    <li><Link to="/">Behance</Link></li>
                                    <li><Link to="/">Dribbble</Link></li>
                                </ul>
                            </div>
                            <div className="lower-items">
                                <p>Explore open jobs</p>
                                <br />
                                <p>&copy; 2000—2023 Company Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}