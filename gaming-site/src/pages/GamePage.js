import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import './GamePage.css';

const GRID_SIZE = 3;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;
const DELAY = 600;

const GamePage = () => {

    // const [level, setLevel] = useState(1);
    // const [sequence, setSequence] = useState([]);
    // const [activeIndex, setActiveIndex] = useState(null);
    //
    // useEffect(() => {
    //     // Add one more index to the sequence on new level
    //     const nextIndex = Math.floor(Math.random() * TOTAL_CELLS);
    //     const newSequence = [...sequence, nextIndex];
    //     setSequence(newSequence);
    //
    //     // Start showing the sequence
    //     let i = 0;
    //     const interval = setInterval(() => {
    //         setActiveIndex(newSequence[i]);
    //         setTimeout(() => setActiveIndex(null), DELAY / 1.5); // hide before next
    //         i++;
    //         if (i >= newSequence.length) clearInterval(interval);
    //     }, DELAY);
    // }, [level]);
    //
    // const handleNextLevel = () => {
    //     setLevel(prev => prev + 1);
    // };

    const [level, setLevel] = useState(1);
    const [sequence, setSequence] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [userInput, setUserInput] = useState([]);
    const [isUserTurn, setIsUserTurn] = useState(false);
    const [message, setMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [finalLevel, setFinalLevel] = useState(1);


    const resetGame = () => {
        setLevel(1);
        setSequence([]);
        setUserInput([]);
        setMessage('');
        setGameOver(false);
    };

    useEffect(() => {
        // Generate new sequence only on level increase
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
            setFinalLevel(level);
            setGameOver(true);
            setIsUserTurn(false);
            setMessage('');
            // setMessage('Wrong! Try again.');
            // setIsUserTurn(false);
            // setTimeout(() => {
            //     setUserInput([]);
            //     setMessage('Watch again...');
            //     replaySequence();
            // }, 1000);
        } else if (newUserInput.length === sequence.length) {
            setMessage('Correct! Next level...');
            setIsUserTurn(false);
            setTimeout(() => {
                setLevel((prev) => prev + 1);
            }, 1000);
        }
    };

    // const replaySequence = () => {
    //     let i = 0;
    //     const interval = setInterval(() => {
    //         setActiveIndex(sequence[i]);
    //         setTimeout(() => setActiveIndex(null), DELAY / 1.5);
    //         i++;
    //         if (i >= sequence.length) {
    //             clearInterval(interval);
    //             setTimeout(() => {
    //                 setIsUserTurn(true);
    //                 setMessage('Your turn!');
    //             }, DELAY);
    //         }
    //     }, DELAY);
    // };



    // const cells = Array.from({ length: GRID_SIZE * GRID_SIZE });
    const cells = Array.from({ length: TOTAL_CELLS });

  return (
      // <div className="game-bg">
      //   <Header />
      //   <div className="game-content">
      //     <div className="game-level">
      //       Level: <span className="level-number">1</span>
      //     </div>
      //     <div className="game-grid">
      //       {cells.map((_, idx) => (
      //         <div className="game-cell" key={idx}></div>
      //       ))}
      //     </div>
      //     <div className="game-sound">
      //       <span role="img" aria-label="sound" className="sound-icon">🔊</span>
      //     </div>
      //   </div>
      // </div>

      <div className="game-bg">
          <Header/>
          <div className="game-content">
              <div className="game-level">
                  Level: <span className="level-number">{level}</span>
              </div>
              <div className="game-grid">
                  {cells.map((_, idx) => (
                      <div
                          key={idx}
                          className={`game-cell ${idx === activeIndex ? 'active' : ''}`}
                          onClick={() => handleCellClick(idx)}
                      ></div>
                  ))}
              </div>
              <div className="game-status">{message}</div>
          </div>

          {gameOver && (
              <div className="popup-overlay">
                  <div className="popup-box">
                      <h2>Incorrect!</h2>
                      <p>You reached level {finalLevel}.</p>
                      <button onClick={resetGame}>Restart Game</button>
                  </div>
              </div>
          )}
      </div>
  );
};

export default GamePage;