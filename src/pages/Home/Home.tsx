import React, { useState, useEffect } from 'react';
import { TestA } from '../../components/TestA/TestA';
import { TestB } from '../../components/TestB/TestB';

export const Home = () => {
    const [component, setComponent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        setComponent(Math.random() < 0.5 ? <TestA /> : <TestB />);
    }, []);

    return (
        <div className="container-fluid p-0 m-0">
            {/* {component} */}
            {/* <TestB></TestB> */}
            <TestA></TestA>
        </div>
    );
};