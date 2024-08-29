import React, { useEffect, useState } from 'react';
import '../assets/output.css'

import Beardcrumb from './Breadcrumb'


interface CardProps { }

const Card: React.FC<CardProps> = () => {
    const introduction = 'Hi there! I am Yang 👋. \n'
        + 'Welcome to my personal blog where I share articles and life insights.\n'
        + 'I am a full-stack engineer who is passionate about coding and loves life.\n'
        + 'In my free time, I like doing sports, playing the guitar and researching stocks.😊'

    const yourImageUrl: string = 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/static/image/logo-icon-white-bg.f3acc228.png';

    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let typingIntervalId: ReturnType<typeof setInterval> | null = null;
        let restartIntervalId: ReturnType<typeof setTimeout> | null = null;

        const typeIntroduction = () => {
            if (charIndex < introduction.length) {
                setDisplayText((prevText) => prevText + introduction[charIndex]);
                setCharIndex(charIndex + 1);
            } else {
                if (typingIntervalId) {
                    clearInterval(typingIntervalId);
                    typingIntervalId = null;
                }
                // 开始重新打印的倒计时
                restartIntervalId = setTimeout(() => {
                    setCharIndex(0);
                    setDisplayText('');
                    // 重新开始打印过程
                    typingIntervalId = setInterval(typeIntroduction, 1000); // 打印间隔
                }, 600000); // 重新打印的间隔时间为 3 秒，可以根据需要调整
            }
        };

        typingIntervalId = setInterval(typeIntroduction, 100);

        return () => {
            if (typingIntervalId) {
                clearInterval(typingIntervalId);
            }
            if (restartIntervalId) {
                clearTimeout(restartIntervalId);
            }
        };
    }, [charIndex]);

    return (
        <div className="card-container">
            <div className='img-background'>

            </div>
            <div className="card animated-card">
                <img src={yourImageUrl} alt="Your Picture" className="profile-image" />
                <p className="intro-text animated-text" dangerouslySetInnerHTML={{ __html: displayText }}></p>
            </div>
            <div>
                <div>
                    <Beardcrumb />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Card;
