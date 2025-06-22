import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import GameOptions from '../components/GameOptions';
import './GamePage.css';
import { motion } from 'framer-motion'; 

const GRID_SIZE = 3;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const DELAY = 600;

const defaultOptions = {
    tileShape: 'square',
    mistakesAllowed: 3,
};

const GamePage = () => {
    const [level, setLevel] = useState(1);
    const [sequence, setSequence] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [userInput, setUserInput] = useState([]);
    const [isUserTurn, setIsUserTurn] = useState(false);
    const [message, setMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [finalLevel, setFinalLevel] = useState(1);
    const [highestScore, setHighestScore] = useState(0);

    // Options state
    const [options, setOptions] = useState(defaultOptions);
    const [showOptions, setShowOptions] = useState(false);
    const [mistakesLeft, setMistakesLeft] = useState(options.mistakesAllowed);

    function updateHighScore(currentHigh, newScore) {
        if (newScore > currentHigh) {
            setHighestScore(newScore);
        }
    }

    const resetGame = (newOptions = options) => {
        setLevel(0);
        setSequence([]);
        setUserInput([]);
        setMessage('');
        setGameOver(false);
        setMistakesLeft(newOptions.mistakesAllowed);
        setTimeout(() => setLevel(1), 0);
    };

    // Handle applying new options
    const handleApplyOptions = (newOptions) => {
        setOptions(newOptions);
        setShowOptions(false);
        resetGame(newOptions);
    };

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            const nextIndex = Math.floor(Math.random() * TOTAL_CELLS);
            const newSequence = [...sequence, nextIndex];
            setSequence(newSequence);
            setUserInput([]);
            setMessage('Watch the sequence...');
            setIsUserTurn(false);

            // Animate sequence
            let i = 0;
            const interval = setInterval(() => {
                setActiveIndex(newSequence[i]);
                setTimeout(() => setActiveIndex(null), DELAY / 1.5);
                i++;
                if (i >= newSequence.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsUserTurn(true);
                        setMessage('Your turn!');
                    }, DELAY);
                }
            }, DELAY);
        }, 500);

        return () => clearTimeout(startTimeout);
        // eslint-disable-next-line
    }, [level]);

    const handleCellClick = (index) => {
        if (!isUserTurn) return;

        const newUserInput = [...userInput, index];
        setUserInput(newUserInput);

        // Highlight the clicked cell briefly
        setActiveIndex(index);
        setTimeout(() => setActiveIndex(null), 200);

        const correctIndex = sequence[newUserInput.length - 1];
        if (index !== correctIndex) {
            if (mistakesLeft > 1) {
                setMistakesLeft(mistakesLeft - 1);
                setMessage(`Wrong! ${mistakesLeft - 1} mistake${mistakesLeft - 1 === 1 ? '' : 's'} left.`);
                setUserInput([]); 
            } else {
                setFinalLevel(level);
                setGameOver(true);
                setIsUserTurn(false);
                setMessage('');
                updateHighScore(highestScore, level);
            }
        } else if (newUserInput.length === sequence.length) {
            setMessage('Correct! Next level...');
            setIsUserTurn(false);
            setTimeout(() => {
                setLevel((prev) => prev + 1);
                setMistakesLeft(options.mistakesAllowed);
            }, 1000);
        }
    };

    const cells = Array.from({ length: TOTAL_CELLS });

    const getTileClass = () => {
        if (options.tileShape === 'circle') return 'game-cell circle';
        if (options.tileShape === 'hexagon') return 'game-cell hexagon';
        return 'game-cell square';
    };

    return (
        <div className="game-bg">
            <Header>
                <button className="options-btn" onClick={() => setShowOptions(true)}>
                    ⚙️ Options
                </button>
            </Header>
            <GameOptions
                show={showOptions}
                onClose={() => setShowOptions(false)}
                onApply={handleApplyOptions}
                currentOptions={options}
            />
            <motion.div
                className="game-content"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="game-level">
                    <span className="level-label">Level:</span>
                    <span className="level-number faded">{level}</span>
                    <span className="lives-label">Lives:</span>
                    <span className="lives-number faded">{mistakesLeft}</span>
                </div>
                <div className="game-grid">
                    {cells.map((_, idx) => (
                        <div
                            key={idx}
                            className={`${getTileClass()} ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => handleCellClick(idx)}
                        ></div>
                    ))}
                </div>
                <div className="game-status">{message}</div>
            </motion.div>

            {gameOver && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h2>Incorrect!</h2>
                        <p>You reached level {finalLevel}.</p>
                        <p>Highest Score: {highestScore}</p>
                        <button onClick={() => resetGame()}>Restart Game</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GamePage;