import React from "react";
import "./Card.css";

function Card({ card }) {
    return (
        <div className="Card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
        </div>
    );
}

export default Card;
