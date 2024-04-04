import { Modal } from 'react-bootstrap';
import styles from './ConfirmWaitlist.module.scss';
import { Close, Facebook, InBox, Instagram, LinkedIn, Share } from '../../../assets';

interface ConfirmWaitlistProps {
    show: boolean;
    onHide: () => void;
}

const ConfirmWaitlist = ({ show, onHide }: ConfirmWaitlistProps) => {

    const shareLink = (plateform?: string) => {
        switch (plateform) {
            case 'facebook':

                break;
            case 'instagram':

                break;
            case 'linkedin':

                break;

            default:
                return "share classic"
        }
    }

    return (
        <Modal show={show} onHide={onHide} centered className={styles.modal}>
            <Modal.Header className={styles.topHalf}>

            </Modal.Header>
            <img className={styles.close} src={Close} alt="" onClick={onHide} />
            <div className={styles.iconSeparator}>
                <img src={InBox} alt="" />
            </div>
            <Modal.Body className={styles.bottomHalf}>
                <h1>Check your inbox!</h1>
                <p>Sync Club is dedicated to bringing together a community of people that existing members are excited to connect with.</p>
                <p>Share our waitlist with people who you want to see in the app when we launch!</p>
                {/* <div className={`row ${styles.socialIcons}`}>
                    <div className={`col ${styles.icon}`}>
                        <img src={Facebook} alt="Facebook" onClick={() => shareLink('facebook')}/>
                    </div>
                    <div className={`col ${styles.icon}`}>
                        <img src={Share} alt="Instagram" onClick={() => shareLink('instagram')}/>
                    </div>
                    <div className={`col ${styles.icon}`}>
                        <img src={LinkedIn} alt="Linkedin" onClick={() => shareLink('linkedin')}/>
                    </div>
                    <div className={`col ${styles.icon}`}>
                        <img src={Share} alt="Share" onClick={() => shareLink()}/>
                    </div>
                </div> */}
            </Modal.Body>
        </Modal>
    );
}

export default ConfirmWaitlist;
