import { useState } from "react";
import styles from './Terms.module.scss';
import { useParams } from "react-router-dom";
import { Logo2 } from "../../assets";
import { TermsConditions } from "../../components/Terms/TermsConditions";
import { PrivacyCookie } from "../../components/Terms/PrivacyCookie";
import { PrivacyNotice } from "../../components/Terms/PrivacyNotice";



export const Terms = () => {
    const [component, setComponent] = useState<JSX.Element | null>(null);
    let { type } = useParams();

    const goHome = () => {
        window.location.href = '/';
    }

    return (
        <div className="container-fluid p-4 m-0" style={{ backgroundColor: '#FFF' }}>
            <img src={Logo2} onClick={() => goHome()} alt="logo" title='logo' className={`${styles.logo} mt-2`} />
            {type === 'privacy-notice' ? <PrivacyNotice/> : null}
            {type === 'privacy-cookie' ? <PrivacyCookie/> : null}
            {type === 'terms-and-conditions' ? <TermsConditions/> : null}
        </div>
    );
}