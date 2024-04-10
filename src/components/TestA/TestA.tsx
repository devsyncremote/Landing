import styles from './TestA.module.scss';
import { Layer1, Layer2, Layer3, Layer4, Logo } from '../../assets';
import { JoinWaitlistInput } from '../inputs/joinWaitlistInput/joinWaitlistInput';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import LineSVG from '../customSvg/line/line';


export const TestA = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <section className={`${isMobile ? '' : 'vh-100'} vw-100`} style={{ background: '#0C1504', paddingBottom: isMobile ? '2rem' : '' }}>
                <div className={`${styles.container} ${styles.topSection}`}>
                    <img src={Logo} alt="logo" className={`${styles.logo} mb-5`} />
                    <span className={`${styles.title} mb-4`}>Get early access <br />to our
                        <div style={{ display: 'inline-block', position: 'relative', padding: '0 10px' }}>
                            <span>invite-only</span>
                            <LineSVG size='50%' style={{ position: 'absolute', left: 0, bottom: '0px', width: '95%' }} />
                        </div>app
                    </span>
                    <div className={styles.header}>
                        <p className='mt-4'>
                            Join our <span>exclusive club</span> to make meaningful connections with experts in your field, attend tailored meetups, find club workspots & explore preferred places of fellow members, and unlock member perks & rewards.
                        </p>
                        <br />
                        <p>
                            Secure your free access now by joining our <span>waitlist.</span>
                        </p>
                        <br />
                        <p>
                            Connect with students and alumni from
                            <span> Harvard, MIT, Columbia, NYU</span>, and other leading universities.
                        </p>
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                        <JoinWaitlistInput labelBtn="Get early access" placeholder="Type your email" className={`${isMobile ? 'w-100' : 'w-50'} d-flex justify-content-center`} style={{ width: '90%', maxWidth: '90%' }} />
                    </div>
                </div>
            </section>
            <section className="vw-100" style={{ background: '#F6F6F6', paddingBottom: '40px' }}>
                <div className={`${styles.bottomSection}`}>
                    <div className={`${styles.header}`}>
                        <h1>What is Sync Club?</h1>
                        <p>An invite-only club for professional networking <br />– with exclusive member rewards.</p>
                    </div>
                    {!isMobile && <div className='row justify-content-center mt-4'>
                        <div className='col-3 text-center'>
                            <img src={Layer1} alt="Description Layer1" className="img-fluid" style={{ maxWidth: '16rem', position: 'relative', zIndex: '4' }} />
                            <div style={{ padding: '20px' }}>Make meaningful connections with experts in your field of interest</div>
                        </div>
                        <div className='col-3 text-center'>
                            <img src={Layer2} alt="Description Layer2" className="img-fluid" style={{ maxWidth: '16rem', position: 'relative', zIndex: '3' }} />
                            <div style={{ padding: '20px' }}>Find popular workspots & explore preferred places of fellow members</div>
                        </div>
                        <div className='col-3 text-center'>
                            <img src={Layer3} alt="Description Layer3" className="img-fluid" style={{ maxWidth: '16rem', position: 'relative', zIndex: '2' }} />
                            <div style={{ padding: '20px' }}>Enjoy exclusive interviews with top players in the industry</div>
                        </div>
                        <div className='col-3 text-center'>
                            <img src={Layer4} alt="Description Layer4" className="img-fluid" style={{ maxWidth: '16rem', position: 'relative', zIndex: '1' }} />
                            <div style={{ padding: '20px' }}>Access member perks & rewards!</div>
                        </div>
                    </div>}
                    {isMobile &&
                        <div>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={2}
                                centeredSlides={true}
                            >
                                <SwiperSlide>
                                    <img src={Layer1} alt="Description Layer1" className={styles.swiperImage} />
                                    <div>Make meaningful connections with experts in your field of interest</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Layer2} alt="Description Layer2" className={styles.swiperImage} />
                                    <div >Find popular workspots & explore preferred places of fellow members</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Layer3} alt="Description Layer3" className={styles.swiperImage} />
                                    <div >Enjoy exclusive interviews with top players in the industry</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Layer4} alt="Description Layer4" className={styles.swiperImage} />
                                    <div>Access member perks & rewards!</div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    }
                    <div className='w-100 d-flex justify-content-center'>
                        <JoinWaitlistInput labelBtn="Get early access" placeholder="Type your email" className={`w-100 d-flex justify-content-center`} style={{ width: '90%', maxWidth: '90%' }} />
                    </div>
                </div>
            </section>
        </>
    )
}