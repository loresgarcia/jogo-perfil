import React from "react";
import "./Player.css";

function Player({ name, score }) {
    return (
        <div className="Player">
            <h2>{name}</h2>
            <p>Pontuação: {score}</p>
        </div>
    );
}

export default Player;
