import React, { useState, useEffect } from 'react';
import { TestA } from '../../components/TestA/TestA';
import { TestB } from '../../components/TestB/TestB';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
    const [component, setComponent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        setComponent(Math.random() < 0.5 ? <TestA /> : <TestB />);
    }, []);

    return (
        <div className="container-fluid p-0 m-0">
            <Helmet prioritizeSeoTags={true} defer={true}>
                <title>Sync Club | Get early access</title>
                <meta name="description" content="Join the members-only app that rewards you for paying your bills on time. Track your credit score and build good credit habits." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://sync.club" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sync Club | Get early access" />
                <meta property="og:description" content="Join the members-only app that rewards you for paying your bills on time. Track your credit score and build good credit habits." />
                <meta property="og:image" content="%PUBLIC_URL%/icons/icon-512x512.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="Sync Club | Get early access" />
                <meta property="twitter:description" content="Join the members-only app that rewards you for paying your bills on time. Track your credit score and build good credit habits." />
                <meta property="twitter:image" content="%PUBLIC_URL%/icons/icon-512x512.png" />
                <meta name="google-site-verification" content="Qc0ntsqD8H3sHi0SNJB7X0Vr5QizvmtRtxR7n39G9Mw" />
            </Helmet>
            <TestB></TestB>
            {/* <TestA></TestA> */}
        </div>
    );
};