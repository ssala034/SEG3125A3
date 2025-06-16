import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StartButton = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/game'); // Navigate to the game page
    };

    return (
        <Button variant="primary" onClick={handleStartClick}>
            Start
        </Button>
    );
};

export default StartButton;