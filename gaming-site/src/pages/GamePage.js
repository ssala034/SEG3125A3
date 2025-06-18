import React from 'react';
import Header from '../components/Header';
import './GamePage.css';

const GRID_SIZE = 3;

const GamePage = () => {
  const cells = Array.from({ length: GRID_SIZE * GRID_SIZE });

  return (
    <div className="game-bg">
      <Header />
      <div className="game-content">
        <div className="game-level">
          Level: <span className="level-number">1</span>
        </div>
        <div className="game-grid">
          {cells.map((_, idx) => (
            <div className="game-cell" key={idx}></div>
          ))}
        </div>
        <div className="game-sound">
          <span role="img" aria-label="sound" className="sound-icon">🔊</span>
        </div>
      </div>
    </div>
  );
};

export default GamePage;