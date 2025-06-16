import React from 'react';
import Header from '../components/Header';
import StartButton from '../components/StartButton';
import './HomePage.css'; // Assuming you will create a CSS file for styling

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <div className="content">
                <h1>Welcome to HumanTester</h1>
                <p>Test and improve your memory skills with our fun memory game!</p>
                <StartButton />
            </div>
        </div>
    );
};

export default HomePage;