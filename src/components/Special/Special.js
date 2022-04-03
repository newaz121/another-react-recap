import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h1>You are my special one</h1>
            <p><small>Gift:{ring}</small></p>
        </div>
    );
};

export default Special;