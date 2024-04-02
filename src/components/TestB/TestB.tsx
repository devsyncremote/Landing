import React, { useState } from 'react';
import styles from './TestB.module.scss';
import { Layer1, Layer2, Layer3, Layer4, Layer5, Layer6, Layer7, Logo } from '../../assets';
import { JoinWaitlistInput } from '../inputs/joinWaitlistInput/joinWaitlistInput';
import LineSVG from '../customSvg/line/line';


const cardsData = [
    {
        id: 1,
        text: "Make meaningful connections with experts in your field of interest",
    },
    {
        id: 2,
        text: "Find popular workspots & explore preferred places of fellow members",
    },
    {
        id: 3,
        text: "Enjoy exclusive interviews with top players in the industry",
    },
    {
        id: 4,
        text: "Access member perks & rewards!",
    },
];



export const TestB = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleCardClick = (cardId: number) => {
        setActiveCard(cardId);
    };

    const handleCardMouseEnter = (cardId: number) => {
        setActiveCard(cardId);
    };

    return (
        <div>
            <section className="vh-100 vw-100" style={{ background: '#0C1504' }}>
                <div className={`${styles.topSection}`}>
                    <img src={Logo} alt="logo" className={`${styles.logo} mt-4`} />
                    <div className={`${styles.leftSide} ${styles.leftTop}`}>
                        <span className={`${styles.title} mt-4 mb-4`}>
                            Get early access to our
                            <div style={{ display: 'inline-block', position: 'relative', padding: '0 10px' }}>
                                <span><i>invite-only</i></span>
                                <LineSVG size='50%' style={{ position: 'absolute', left: 0, bottom: '0px', width: '95%' }} />
                            </div>
                            app
                        </span>
                        <p className='mt-4 text-start'>
                            Sign up to get your one-time invitation and be among the first
                            to join Sync Club, a professional networking club with exclusive member rewards.
                        </p>
                        <div className='mt-5'>
                            <JoinWaitlistInput labelBtn="Get your invite" placeholder="Type your email" haveIcon={true} />
                        </div>

                    </div>
                    <div className={styles.rightSide}>
                        <img src={Layer5} alt="" style={{ position: 'absolute', left: '3rem', top: '0', zIndex: '8' }} />
                        <img src={Layer6} alt="" style={{ position: 'absolute', left: '12rem', bottom: '0', zIndex: '7' }} />
                        <img src={Layer7} alt="" style={{ position: 'absolute', right: '0', top: '0', zIndex: '10' }} />
                    </div>

                </div>
            </section>
            <section className="vh-100 vw-100" style={{ background: '#F6F6F6' }}>
                <div className={`${styles.header}`}>
                    <h1>What is
                        <div style={{ display: 'inline-block', position: 'relative', padding: '0 10px' }}>
                            <span>Sync Club</span>
                            <LineSVG size='50%' color='black' style={{ position: 'absolute', left: 0, bottom: '0px', width: '100%' }} />
                        </div>
                        ?</h1>
                </div>
                <div className={`${styles.bottomSection}`}>

                    <div className={`${styles.leftSide} ${styles.leftBottom}`}>
                        <h1 className='text-start'>
                            An invite-only club for professional networking – with exclusive member rewards.
                        </h1>
                        <p className='text-start'>We’re building a community based on the personal recommendations of our first members.
                            When our app is available, you'll receive a unique link to invite up to <b>4 like-minded individuals</b>,
                            fostering our community's growth with top-notch connections.</p>
                        <div className=''>
                            <JoinWaitlistInput labelBtn="Get your invite" placeholder="Type your email" haveIcon={true} />
                        </div>
                    </div>
                    <div className={`${styles.rightSide} ${styles.rightBottom}`}>
                        {cardsData.map((card) => (
                            <div
                                key={card.id}
                                className={styles.card}
                                onClick={() => handleCardClick(card.id)}
                                onMouseEnter={() => handleCardMouseEnter(card.id)}
                                onMouseLeave={() => setActiveCard(null)}
                                style={{ zIndex: activeCard === card.id ? 1000 : 1 }}
                            >
                                <div className={styles.rounded}>
                                    {card.id}
                                </div>
                                <span>{card.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}