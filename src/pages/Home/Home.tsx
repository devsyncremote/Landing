import React, { useState } from 'react';
import { TestA } from '../../components/TestA/TestA';
import { TestB } from '../../components/TestB/TestB';

export const Home = () => {
    return (
        <div className="container-fluid p-0 m-0">
            {/* <TestA /> */}
            <TestB />
        </div>
    );
};