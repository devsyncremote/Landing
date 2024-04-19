import { Modal } from 'react-bootstrap';
import styles from './ConfirmWaitlist.module.scss';
import { Close2, InBox } from '../../../assets';
import { ReferralLinkInput } from '../../inputs/referralLinkInput/referralLinkInput';

interface ConfirmWaitlistProps {
    show: boolean;
    onHide: () => void;
    referralId: string | null;
}

const ConfirmWaitlist = ({ show, onHide, referralId }: ConfirmWaitlistProps) => {

    return (
        <Modal show={show} onHide={onHide} centered className={styles.modal}>
            <Modal.Header className={styles.topHalf}>

            </Modal.Header>
            <img className={styles.close} src={Close2} alt="" onClick={onHide} />
            <div className={styles.iconSeparator}>
                <img src={InBox} alt="" />
            </div>
            <Modal.Body className={styles.bottomHalf}>
                <p>Sync Club is committed to helping young people develop good credit habits through rewards while building your professional network with other members.
                    <br /> <br />
                    Invite likeminded individuals to join the waitlist and earn points for each referral, which you can redeem in the app at your favorite brands.
                </p>
                <h1>Invite your friends for early access!</h1>
                <ReferralLinkInput referralId={referralId} />
            </Modal.Body>
        </Modal>
    );
}

export default ConfirmWaitlist;
