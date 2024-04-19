import { useState } from 'react';
import styles from './TestB.module.scss';
import { Contactless, Layer10, Layer5, Layer6, Layer7, Layer8, Layer9, Logo, MobileBanking, MoneyJar, Rewards, Terminal } from '../../assets';
import { JoinWaitlistInput } from '../inputs/joinWaitlistInput/joinWaitlistInput';
import LineSVG from '../customSvg/line/line';
import Accordion from 'react-bootstrap/Accordion';


export const TestB = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <div>
            <section className="vh-100 vw-100" style={{ background: '#0C1504', position: 'relative', zIndex: '1' }}>
                <div className={`${styles.topSection}`}>
                    <img src={Logo} alt="logo" className={`${styles.logo} mt-4`} />
                    <div className={`${styles.leftSide} ${styles.leftTop}`}>
                        <span className={`${styles.title} mt-4 mb-4`}>
                            pay your bills on time,  <br />
                            <div style={{ display: 'inline-block', position: 'relative', padding: '0 10px' }}>
                                <span><i>get rewards</i></span>
                                <LineSVG size='50%' style={{ position: 'absolute', left: 0, bottom: '0px', width: '95%' }} />
                            </div>
                        </span>
                        <p className='mt-4 text-start'>
                            Join our free members-only club of students who are getting a head start on boosting their credit score and securing financial stability. Access exclusive member rewards and perks every time you make timely payments.
                        </p>
                        <div className='mt-5 w-100'>
                            <JoinWaitlistInput
                                labelBtn="Join waitlist"
                                placeholder="Type your email"
                                haveIcon={true}
                                className={`justify-content-${isMobile ? 'center' : 'start'}`}
                                style={{ width: isMobile ? '100%' : '90%', maxWidth: isMobile ? '100%' : '90%' }}
                            />
                        </div>

                    </div>
                    <div className={styles.rightSide}>
                        <img src={Layer8} alt="" className={styles.layer5} />
                        <img src={Layer9} alt="" className={styles.layer6} />
                        <img src={Layer10} alt="" className={styles.layer7} />
                    </div>

                </div>
            </section>
            <section className="vh-200 vw-100" style={{ background: '#FFF', position: 'relative', zIndex: '2' }}>
                <div className={`${styles.header} px-4`}>
                    <h1>Why join?</h1>
                    <p className='text-center mt-3'>Be part of an exclusive community of students and alumni <br />
                        from <b>Harvard, MIT, NYU, Columbia,</b> and other leading universities.</p>

                </div>
                <div className={`${styles.bottomSection} mt-4`}>
                    <div className='row w-100'>
                        <div className='col-12 col-md-6 mt-4'>
                            <div className="card">
                                <div className="card-header">
                                    <img src={Contactless} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Pay bills on time,<br /> earn rewards</h5>
                                    <p className="card-text">Simply pay your bills on time and automatically unlock exciting rewards.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mt-4'>
                            <div className="card">
                                <div className="card-header">
                                    <img src={Terminal} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Pay bills on time, earn rewards</h5>
                                    <p className="card-text">Simply pay your bills on time and automatically unlock exciting rewards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row w-100 mt-4'>
                        <div className='col-12 col-md-6 mt-4'>
                            <div className="card">
                                <div className="card-header">
                                    <img src={MoneyJar} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Pay bills on time, earn rewards</h5>
                                    <p className="card-text">Simply pay your bills on time and automatically unlock exciting rewards.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mt-4'>
                            <div className="card">
                                <div className="card-header">
                                    <img src={MobileBanking} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Pay bills on time, earn rewards</h5>
                                    <p className="card-text">Simply pay your bills on time and automatically unlock exciting rewards.</p>
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
                                            <img className={styles.iconBigCard} src={Rewards} alt="" />
                                        </div>
                                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                            <div className='px-4'>
                                                <h5 className="card-title">Pay bills on time, earn rewards</h5>
                                                <p className="card-text">Simply pay your bills on time and automatically unlock exciting rewards.</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 mt-2 mb-5'>
                        <JoinWaitlistInput labelBtn="Join waitlist" placeholder="Type your email" haveIcon={true} className={`justify-content-${isMobile ? 'center' : 'start'}`} style={{ width: '90%', maxWidth: '90%' }} />
                    </div>
        
                    <h1 style={{ left: '16px', position: 'relative' }}>FAQ</h1>
                    <Accordion defaultActiveKey="0" alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Sync Club?</Accordion.Header>
                            <Accordion.Body>
                                Sync club is a free members-only app that allows you to earn rewards
                                and discounts for paying your bills on time.
                                Simply connect your credit card and we will notify you of upcoming
                                payments to help you stay on track and reward you with points that you
                                can redeem at carefully curated brands within the app.
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What if I don’t have a credit card?</Accordion.Header>
                            <Accordion.Body>
                                No worries! You can join the club and start building your network with other students and alumni from top universities.
                                If you’re interested in starting to build your credit score, we can help you select a credit card so that you can start earning rewards
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What rewards do I get?</Accordion.Header>
                            <Accordion.Body>
                                You can use the rewards earned from your timely credit card payments to enjoy discounts and special offers from our carefully selected brands. Plus, every time you redeem your points through us, you'll earn even more points.
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How can I build my network with Sync Club?</Accordion.Header>
                            <Accordion.Body>
                                Our community consists of students and alumni from top universities who are eager to advance in their financial journeys. Connect with these like-minded individuals based on shared interests visible in their profiles, and chat about topics that interest you.
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />
                    </Accordion>
                    <div className={styles.footer}>
                        <span onClick={() => window.open('https://syncremote.co/terms-conditions', '_blank')}>Terms and Conditions</span>
                        <span onClick={() => window.open('https://syncremote.co/privacy-policy', '_blank')}>Privacy policy & cookies</span>
                    </div>
                </div>
            </section>
        </div>
    )
}