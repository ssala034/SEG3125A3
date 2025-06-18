import React from 'react';
import Header from '../components/Header';
import './GamePage.css';

const GRID_SIZE = 3;

const GamePage = () => {
  return (
    <div className="game-bg">
      <Header />
      <div className="game-content">
        <div className="game-level">Level: <span className="level-number">1</span></div>
        <div className="game-grid">
          {[...Array(GRID_SIZE)].map((_, rowIdx) => (
            <div className="game-row" key={rowIdx}>
              {[...Array(GRID_SIZE)].map((_, colIdx) => (
                <div className="game-cell" key={colIdx}></div>
              ))}
            </div>
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