import React from 'react';
import './PositiveImpact.css';
import LargeHorizontalCardLeft from '../../components/LargeHorizontalCard/LargeHorizontalCardLeft'
import LargeHorizontalCardRight from '../../components/LargeHorizontalCard/LargeHorizontalCardRight'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import iphone1 from './iphone1.png';
import iphone2 from './iphone2.png';

const PositiveImpact = props => {
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 70px)',
        width: 30,
        height: 30,
        borderRadius: 50,
        cursor: 'pointer',
        border: 0,
        opacity: 0.5,
        background: "#ebebf5"
    };

    return (
        <section className="flex pi-container pv4">
            <Carousel
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                transitionTime="1000"
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button className="" type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0}}>
                            <FontAwesomeIcon className="arrow-icon" icon={faChevronCircleLeft} size="2x"/>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 13}}>
                            <FontAwesomeIcon className="arrow-icon" icon={faChevronCircleRight} size="2x"/>
                        </button>
                    )
                }
            >
                <div>
                    <LargeHorizontalCardLeft
                        image={iphone1}
                        alt="map"
                        title="Contactless Parking"
                        body1="To help the health of our community, we have eliminated the need to touch parking meters or ticket dispensers."
                        body2="Parco now allows you to have your own private parking spot through the tap of a button on your smartphone."
                    />
                </div>
                <div>
                    <LargeHorizontalCardRight
                        image={iphone2}
                        alt="map"
                        title="Earn Passive Income"
                        body1="Sit back, relax and let your parking space earn you money at your convenince. List your parking space in minutes on Parco today!"
                        body2=""
                    />
                </div>
            </Carousel>
        </section>
    );
}

export default PositiveImpact;