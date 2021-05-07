import React from 'react';
import './CallToAction.css';
import AppButton from '../AttentionGrabber//AppStoreDownload.svg'
import Fade from 'react-reveal/Fade';

const CallToAction = props => {
    return (
        <div className="flex column center pv5">
            <Fade>
                <div className="cta-container">
                    <h2 className="cta-text body-title">Book a spot in advance or on-the-go the next time you leave your home!</h2>
                </div>

                <div className="flex app-button-container pt3">
                    <a href="https://apps.apple.com/in/app/parco-polo/id1487397600">
                        <img className="app-button pointer" src={AppButton} alt="iphone" />
                    </a>
                </div>
            </Fade>
        </div>
    );
}

export default CallToAction;