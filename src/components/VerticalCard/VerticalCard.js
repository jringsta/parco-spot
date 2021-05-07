import React from 'react';
import './VerticalCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';



const VerticalCard = props => {
    return(
        <div className="flex column center vertical-position">
            <Fade>
            <div>
                <FontAwesomeIcon className="body-icon grow" icon={props.icon} size="6x"/>
            </div>
            <div>
                <h3 className="body-title">{props.title}</h3>
            </div>
            <div>
                <p className="body-text">{props.body}</p>
            </div>
            </Fade>
        </div>
    );
}

export default VerticalCard;