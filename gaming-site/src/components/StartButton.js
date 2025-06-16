import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartButton.css'; 

const StartButton = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/game'); // Navigate to the game page
    };

    return (
        <button className="start-button" onClick={handleStartClick}>
            Start
        </button> // try Button in React Bootstrap
    );
};

export default StartButton;