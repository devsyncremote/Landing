import React, { useEffect, useState } from 'react';
import styles from './referralLinkInput.module.scss';
import { shareBtn } from '../../../assets';

export interface ReferralLinkInputProps {
    referralId: string | null;
}

export const ReferralLinkInput = ({ referralId }: ReferralLinkInputProps) => {
    const [referralLink, setReferralLink] = useState<string>("");

    useEffect(() => {
        if(referralId){
            let baseUrl = process.env.NODE_ENV === 'production' ? 'https://sync.club' : 'http://localhost:3000';
            setReferralLink(`${baseUrl}/invite/${referralId}`);
        }
    }, [referralId]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
    }

    return (
        <>
            <div className={`d-flex mt-4 justify-content-center`}>
                <div className={`${styles.inputContainer}`}>
                    <input
                        type="email"
                        className={`${styles.input}`}
                        value={referralLink}
                    />
                    <img src={shareBtn} alt="" onClick={copyToClipboard}/>
                </div>
            </div>
        </>
    );
};