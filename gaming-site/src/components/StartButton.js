import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartButton.css'; 

const StartButton = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/game');
    };

    return (
        <button className="start-button" onClick={handleStartClick}>
            Start
        </button> 
    );
};

export default StartButton;