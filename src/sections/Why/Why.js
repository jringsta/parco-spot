import React from "react";
import './Why.css';

import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faBookmark } from '@fortawesome/free-regular-svg-icons'
import VerticalCard from '../../components/VerticalCard/VerticalCard';

const Why = props => {
    return (
        <section className="flex flip spaced pv5">
            <div className="top-card">
                <VerticalCard
                    icon={faCheckCircle}
                    title="Convenient"
                    body="Book a space in advance and never waste time parking again."
                />
            </div>

            <div className="middle-card">
                <VerticalCard
                    icon={faDollarSign}
                    title="Affordable"
                    body="Competitively priced and cheaper than other existing parking options."
                />
            </div>

            <div className="bottom-card">
                <VerticalCard
                    icon={faBookmark}
                    title="Simple"
                    body="Booking a spot is easy! Just search, reserve, and park instantly."
                />
            </div>

        </section>
    );
}

export default Why;