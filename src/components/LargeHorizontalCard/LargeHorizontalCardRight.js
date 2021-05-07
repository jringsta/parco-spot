import React from 'react';
import './LargeHorizontalCard.css';
import Fade from 'react-reveal/Fade';

const LargeHorizontalCardRight = props => {
    return (
        <div className="flex lhc-container-right">
            <div className="lhc-body-container ">
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
            <div className="flex lhc-image-container lhc-right">
                <Fade>
                    <img className="lhc-image" src={props.image} alt={props.alt} />
                </Fade>
            </div>
        </div>
    );
}

export default LargeHorizontalCardRight;