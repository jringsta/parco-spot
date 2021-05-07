import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';

const Footer = props => {
    return (
        <footer className="footer-position pv4">
            <Fade>
                <div>
                    <h2 className="footer-title body-title">Follow Us!</h2>
                </div>
                <div className="footer-icons">
                    <div className="footer-icon-container">
                        <a href="https://www.instagram.com/parcospot/">
                            <FontAwesomeIcon className="footer-icon grow pointer" icon={faInstagram} size="4x" />
                        </a>
                    </div>
                    <div className="footer-icon-container">
                        <a href="https://twitter.com/parcospot">
                            <FontAwesomeIcon className="footer-icon grow pointer" icon={faTwitter} size="4x" />
                        </a>
                    </div>
                    <div className="footer-icon-container">
                        <a href="https://www.facebook.com/parcospot/">
                            <FontAwesomeIcon className="footer-icon grow pointer" icon={faFacebook} size="4x" />
                        </a>
                    </div>
                </div>
                <div>
                    <div className="footer-contacttext body-text">Have a question? Email <a href="mailto:parcocontact@gmail.com?">parcocontact@gmail.com</a></div>
                </div>
            </Fade>
            <div>
                <p className="footer-copyright">© Copyright 2021 Parco</p>
            </div>
        </footer>
    );
}

export default Footer;
