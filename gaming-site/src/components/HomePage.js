import React from 'react';
import Header from './Header';
import './HomePage.css';
import StartButton from './StartButton';

// Data-driven icon grid
const iconGrid = [
  ['filled', 'filled'],
  ['filled', 'outlined'],
];

const HomePage = ({
  title = "Sequence Memory Test",
  subtitle = "Memorize the pattern - Win the Game!",
}) => (
  <div className="homepage-bg">
    <Header />
    <div className="main-content">
      <div className="icon-grid">
        {iconGrid.map((row, rowIdx) => (
          <div className="row" key={rowIdx}>
            {row.map((type, colIdx) => (
              <div
                key={colIdx}
                className={`icon-box ${type}`}
                aria-label={type === 'filled' ? 'filled square' : 'outlined square'}
              />
            ))}
          </div>
        ))}
      </div>
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <StartButton />
    </div>
  </div>
);

export default HomePage;