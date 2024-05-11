import styles from './Terms.module.scss';

export const PrivacyNotice = () => {
    return (
        <div className={`container-fluid p-4 ${styles.termsContainer}`} style={{
            margin: '0 auto',
            width: '65%',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '8rem'
        }} >
            <span>Effective:  May 1, 2024</span>
            <h1 className={styles.h1}>Privacy Notice for the States of California, Nevada, Virginia, Colorado, and Connecticut </h1>
            <p>
                This Privacy Notice ("Notice") has been developed to offer residents of California, Nevada, Virginia, Colorado, and Connecticut with supplementary information. Individuals in these states possess specific privacy rights as outlined in state legislation. Our Privacy Principles and the privacy controls provided to all users are designed to align with these legal requirements. This Notice serves the purpose of addressing state-specific obligations comprehensively.
                <br /><br />
                You possess the entitlement to be informed about the personal information we gather and maintain the authority to rectify such data. Furthermore, you have the right to be aware of the entities with whom we share your data, the right to have your data deleted, the right to receive prompt responses to your inquiries, and the right to be treated without discriminatory practices.
                <br /><br />
                You can find this information in our Privacy Policy, but we strongly encourage you to reach out to us for any inquiries or concerns regarding your data. You may contact us at the address provided in the Contact Section of our privacy policy or via email at admin@syncremote.co, with the subject line "DATA PRIVACY INQUIRY".
            </p>
            <h2>Users from California</h2>
            <p>
                If you live in California, you also have the right to request to limit the use and disclosure of your sensitive personal information that is used to infer characteristics about you as provided by the CPRA.
                <br /><br />
                You may contact us at the address provided in the Contact Section of our privacy policy or via email at admin@syncremote.co, with the subject line "DATA PRIVACY INQUIRY - CALIFORNIA".
            </p>
            <h2>Users from Nevada</h2>
            <p>
                In accordance with the provisions set forth in Chapter 603A of the Nevada Revised Statutes, we affirm that we do not engage in the sale of your covered information. Should you require further clarification regarding your covered information or any other aspect addressed in our Privacy Policy, please do not hesitate to contact us at the address provided in the Contact Section of our privacy policy or via email at admin@syncremote.co, with the subject line "DATA PRIVACY INQUIRY - NEVADA".
            </p>
            <h2>Users from Virginia, Colorado or Connecticut</h2>
            <p>
                For residents of Virginia, Colorado or Connecticut, we wish to inform you about additional rights you hold:
                <br /><br />
                In the event that we deny your request regarding your rights, you maintain the right to appeal the decision. At that time, we will provide you with the necessary information to initiate the appeals process. Alternatively, you have the option to appeal a decision by completing the designated form provided.
                <br /><br />
                You possess the right to opt out of targeted advertising.
                <br /><br />
                You also have the right to opt out of profiling activities that result in significant legal or similar effects on the consumer.
                <br /><br />
                Please contact us at the address provided in the Contact Section of our privacy policy or via email at <a href="mailto:admin@syncremote.co">admin@syncremote.co</a>, with the subject line "DATA PRIVACY INQUIRY - VCC".
            </p>
        </div>
    )
}