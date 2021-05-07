import React from 'react';
import './Places.css';
import { faCalendar, faFootballBall, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';


const Places = props => {
    return (
        <section className="flex center flip-places pt5 pb3">

                <div className="">
                    <HorizontalCard
                        icon={faFootballBall}
                        title="Game Day"
                        body="Support your favorite team without overpaying for expensive stadium parking. Use Parco ahead of time or on-the-go to save cash and enjoy the game!"
                    />
                </div>
                <div className="horizontal-middle">
                    <HorizontalCard
                        icon={faCalendar}
                        title="Events"
                        body="Going to a concert, music festival, amusement park, or fair this weekend? Avoid the traffic and park at one of Parco's nearby spots."
                    />
                </div>
                <div className="">
                    <HorizontalCard
                        icon={faUmbrellaBeach}
                        title="Weekend Getaway"
                        body="Weekends at the beach and nights out of town are meant to be fun. Don't waste precious time looking for parking. Let Parco do the work so you can relax!"
                    />
                </div>

        </section>
    );
}

export default Places;