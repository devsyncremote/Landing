import { useState } from 'react';
import styles from './TestB.module.scss';
import { Layer5, Layer6, Layer7, Logo } from '../../assets';
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const isMobile = window.innerWidth < 768;

    const handleCardClick = (cardId: number) => {
        setActiveCard(cardId);
    };

    const handleCardMouseEnter = (cardId: number) => {
        setActiveCard(cardId);
    };

    return (
        <div>
            <section className="vh-100 vw-100" style={{ background: '#0C1504', position: 'relative', zIndex: '1' }}>
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
                        <p className='text-start'>Connect with students and alumni from <span> Harvard, MIT, Columbia, NYU</span>, and other leading universities.</p>
                        <div className='mt-5 w-100'>
                            <JoinWaitlistInput 
                                labelBtn="Get your invite" 
                                placeholder="Type your email" 
                                haveIcon={true} 
                                className={`justify-content-${isMobile ? 'center' : 'start'}`} 
                                style={{ width: isMobile ? '100%' : '90%', maxWidth: isMobile ? '100%' : '90%'}} 
                            />
                        </div>

                    </div>
                    <div className={styles.rightSide}>
                        <img src={Layer5} alt="" className={styles.layer5} />
                        <img src={Layer6} alt="" className={styles.layer6} />
                        <img src={Layer7} alt="" className={styles.layer7} />
                    </div>

                </div>
            </section>
            <section className="vh-200 vw-100" style={{ background: '#F6F6F6', position: 'relative', zIndex: '2' }}>
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
                        <div className={styles.containerCustom}>
                            <h1 className='text-start'>
                                An invite-only club for professional networking – with exclusive member rewards.
                            </h1>
                            <p className='text-start'>We’re building a community based on the personal recommendations of our first members.
                                When our app is available, you'll receive a unique link to invite up to <b>4 like-minded individuals</b>,
                                fostering our community's growth with top-notch connections.</p>
                            <div className='w-100'>
                                <JoinWaitlistInput labelBtn="Get your invite" placeholder="Type your email" haveIcon={true} className={`justify-content-${isMobile ? 'center' : 'start'}`} style={{ width: '90%', maxWidth: '90%' }} />
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.rightSide} ${styles.rightBottom}`}>
                        <div className={styles.cardContainer}>
                            {cardsData.map((card) => (
                                <div
                                    key={card.id}
                                    className={styles.card}
                                    onClick={() => handleCardClick(card.id)}
                                    onMouseEnter={() => handleCardMouseEnter(card.id)}
                                    onMouseLeave={() => setActiveCard(null)}
                                    style={{ top: `${card.id * 100}px` }}
                                >
                                    <div className={styles.cardContent}>
                                        <div className={styles.rounded}>
                                            {card.id}
                                        </div>
                                        <span>{card.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}