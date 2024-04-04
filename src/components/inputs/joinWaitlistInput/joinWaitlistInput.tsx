import React, { useEffect, useState } from 'react';
import styles from './joinWaitlistInput.module.scss';
import { IoIosMail } from "react-icons/io";
import { useJoinWailist } from '../../../query';
import ConfirmWaitlist from '../../Modals/ConfirmWaitlist/ConfirmWaitlist';

interface InputWaitlistProps {
    labelBtn: string;
    placeholder: string;
    className?: string;
    style?: React.CSSProperties;
    haveIcon?: boolean;
}

export const JoinWaitlistInput = ({ labelBtn, placeholder, className, style, haveIcon }: InputWaitlistProps) => {
    const { mutationWaitlist, data } = useJoinWailist();
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const DEFAULT_ERROR = "An error occurred. Please try again later.";
    const SUCCESS_MESSAGE = "You have been added to the waitlist!";

    const reset = () => {
        setEmail('');
        setError(null);
        setSuccess(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        if (data) {
            reset();
            if (data.status === "success") {
                setSuccess(SUCCESS_MESSAGE);
            } else if (data.status === "fail") {
                setError(DEFAULT_ERROR);
            }
        }
    }, [data]);

    const handleSubmit = async () => {
        if (!email) {
            setError("Please enter a valid email.");
            return;
        }

        try {
            await mutationWaitlist(email);
            reset();
        } catch (error) {
            setError(DEFAULT_ERROR);
        }
    };

    return (
        <>
            <div className={`d-flex mt-4 ${className}`}>
                <div className={`${styles.inputContainer}`} style={Object.assign({}, haveIcon ? { height: '70px' } : {}, style)}>
                    {haveIcon && <IoIosMail className={styles.mailIcon} />}
                    <input
                        type="email"
                        className={`${styles.input} ${haveIcon ? styles.inputIcon : ''}`}
                        placeholder={placeholder}
                        value={email}
                        onChange={handleInputChange}
                    />
                    <button
                        className={`${styles.button}`}
                        onClick={handleSubmit}
                        style={haveIcon ? {} : {}}
                    >
                        <span>{labelBtn}</span>
                    </button>
                    {error && <div className={styles.error}>{error}</div>}
                    {success && <div className={styles.success}>{success}</div>}
                </div>
            </div>
            <ConfirmWaitlist show={show}  onHide={handleClose} />
        </>
    );
};