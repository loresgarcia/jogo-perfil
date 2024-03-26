import React from 'react';
import './Hints.css';

function Hints({ hints }) {
    return (
        <div className="Hints">
            <h2>Dicas:</h2>
            <ul>
                {hints.map((hint, index) => (
                    <li key={index}>{hint}</li>
                ))}
            </ul>
        </div>
    );
}

export default Hints;
