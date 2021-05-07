import React from 'react';
import './HorizontalCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';

const HorizontalCard = props => {
    return (
        <div className="flex horizontal-position pv4">
            <Fade>
                <div className="horizontal-icon">
                    <FontAwesomeIcon className="horizontal-icon " icon={props.icon} size="6x" />
                </div>
                <div className="flex column ph3">
                    <div>
                        <h3 className="body-title horizontal-title">{props.title}</h3>
                    </div>
                    <div>
                        <p className="body-text horizontal-body">{props.body}</p>
                    </div>
                </div>
            </Fade>
        </div >
    );
}

export default HorizontalCard;