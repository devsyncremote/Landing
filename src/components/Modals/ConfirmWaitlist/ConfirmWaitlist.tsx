import { Modal } from 'react-bootstrap';
import styles from './ConfirmWaitlist.module.scss';
import { Close, InBox } from '../../../assets';
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
            <img className={styles.close} src={Close} alt="" onClick={onHide} />
            <div className={styles.iconSeparator}>
                <img src={InBox} alt="" />
            </div>
            <Modal.Body className={styles.bottomHalf}>
                <h1>Invite your friends for early access!</h1>
                <ReferralLinkInput referralId={referralId} />
                <p>Sync Club is dedicated to bringing together a community of people that existing members are excited to connect with.</p>
                <p>Share our waitlist with people who you want to see in the app when we launch!</p>
            </Modal.Body>
        </Modal>
    );
}

export default ConfirmWaitlist;
