import React from 'react';
import './LargeHorizontalCard.css';
import Fade from 'react-reveal/Fade';

const LargeHorizontalCardLeft = props => {
    return (
        <div className="flex lhc-container-left">
            <div className="flex lhc-image-container lhc-left">
                <Fade>
                    <img className="lhc-image" src={props.image} alt={props.alt} />
                </Fade>
            </div>
            <div className="lhc-body-container">
                <Fade>
                    <div>
                        <h2 className="body-title">{props.title}</h2>
                    </div>
                    <div>
                        <p className="body-text lhc-text mb3">{props.body1}</p>
                    </div>
                    <div>
                        <p className="body-text lhc-text">{props.body2}</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default LargeHorizontalCardLeft;