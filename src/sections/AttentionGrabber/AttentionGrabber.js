import React from 'react';
import './AttentionGrabber.css';

import iphone from './iphone.png';
import AppButton from './AppStoreDownload.svg'

import Typewriter from 'typewriter-effect';

const AttentionGrabber = props => {
    return (
        <section className="pv4 section-flex">
            <div className='flex column w-50-l'>
                <div className='flex column'>
                    <div>
                        <h1 className="TypingText">The Smarter Way </h1>
                    </div>
                    <div className="flex TypingText-container">
                        <div>
                            <h1 className="TypingText">to&#160;</h1>
                        </div>
                        <div>
                            <h1 className="TypingText">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(' Park')
                                            .pauseFor(3000)
                                            .deleteChars(5)
                                            .pauseFor(1000)
                                            .typeString(' Make Money')
                                            .pauseFor(3000)
                                            .deleteChars(11)
                                            .pauseFor(1000)
                                            .typeString(' Save Time')
                                            .pauseFor(3000)
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <h3 className="subTitle">
                        Let your parking space make money for you and download the app today!
                    </h3>
                </div>
                <div className="flex app-button-container">
                    <a href="https://apps.apple.com/in/app/parco-polo/id1487397600">
                        <img className="app-button pointer" src={AppButton} alt="iphone" />
                    </a>
                </div>
            </div>
            <div className="w-50-l center flex">
                <img className="main-image" src={iphone} alt="iphone" />
            </div>
        </section>
    );
}

export default AttentionGrabber;