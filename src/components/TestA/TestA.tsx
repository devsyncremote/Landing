import styles from './TestA.module.scss';
import { Bell, Bill, Build, CreditCard, Gift, Logo, Logo3 } from '../../assets';
import { JoinWaitlistInput } from '../inputs/joinWaitlistInput/joinWaitlistInput';
import 'swiper/css';


export const TestA = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <section className={`${isMobile ? '' : 'vh-100'} vw-100`} style={{ background: '#0C1504', paddingBottom: isMobile ? '2rem' : '' }}>
                <div className={`${styles.container} ${styles.topSection}`}>
                    <img src={Logo} alt="logo" className={`${styles.logo} mb-5`} />
                    <div style={{ marginTop: '12rem' }}>
                        <span className={`${styles.title} mb-4`}>
                            Allow yourself to <span>build</span>
                        </span>

                        <p className='mt-4' style={{ textJustify: 'auto' }}>
                            We are on a mission to help young people avoid late fees <br />
                            and develop good credit habits.
                        </p>
                    </div>
                    <div className={`w-100 d-flex justify-content-center ${styles.waitlistInput}`}>
                        <JoinWaitlistInput labelBtn="Join waitlist" placeholder="Type your email" className={`${isMobile ? 'w-100' : 'w-100'} d-flex justify-content-center`} style={{ width: '100%', maxWidth: '100%' }} />
                    </div>
                </div>
            </section>
            <section className="vw-100" style={{ background: '#FFF', paddingBottom: '40px' }}>
                <div className={`${styles.bottomSection}`}>
                    <div className={`${styles.header}`}>
                        <img src={Logo3} alt="logo" className={`${styles.logo} mt-5 mb-5`} />
                    </div>

                    <div className='row w-100'>
                        <div className='col-12 col-md-6 mt-4'>
                            <div className="card">
                                <div className="card-header">
                                    <img src={Bill} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Detect late fees</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mt-4'>
                            <div className="card">
                                <div className="card-header">
                                    <img src={Bell} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Tailored notifications to remind payments</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row w-100'>
                        <div className='col-12 col-md-6 mt-4'>
                            <div className="card">
                                <div className="card-header">
                                    <img src={CreditCard} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Track how your credit score grows</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mt-4'>
                            <div className="card">
                                <div className="card-header">
                                    <img src={Gift} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Receive rewards when you pay on time</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row w-100'>
                        <div className='col'>
                            <div className="card mt-4 " style={{ height: 'auto' }}>
                                <div className="card-body d-flex">
                                    <div className='row w-100'>
                                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                            <img className={styles.iconBigCard}  src={Build} alt="" />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                            <h4 className="card-title">Build your network with <br />other club members</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.footer}>
                        <span onClick={() => window.open('https://syncremote.co/terms-conditions', '_blank')}>Terms and Conditions</span>
                        <span onClick={() => window.open('https://syncremote.co/privacy-policy', '_blank')}>Privacy policy & cookies</span>
                    </div>
                </div>
            </section>
        </>
    )
}