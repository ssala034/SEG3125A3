import React from 'react';
import Header from '../components/Header';
import './HomePage.css';

import StartButton from '../components/StartButton';
import {motion} from 'framer-motion';

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
    <motion.div
      className="main-content"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    > 
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
      </motion.div>
    </div>
);

export default HomePage;