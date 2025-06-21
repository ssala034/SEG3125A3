import React, { useState } from 'react';
import './GameOptions.css';

const tileShapes = [
  { label: 'Square', value: 'square' },
  { label: 'Circle', value: 'circle' },
  { label: 'Hexagon', value: 'hexagon' },
];

const mistakeOptions = [
  { label: '1 (Hard)', value: 1 },
  { label: '2 (Medium)', value: 2 },
  { label: '3 (Easy)', value: 3 },
];

const GameOptions = ({ show, onClose, onApply, currentOptions }) => {
  const [tileShape, setTileShape] = useState(currentOptions.tileShape);
  const [mistakesAllowed, setMistakesAllowed] = useState(currentOptions.mistakesAllowed);

  if (!show) return null;

  return (
    <div className="options-overlay">
      <div className="options-box">
        <h2>Game Options</h2>
        <div className="option-group">
          <label>Tile Shape:</label>
          <select value={tileShape} onChange={e => setTileShape(e.target.value)}>
            {tileShapes.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="option-group">
          <label>Mistakes Allowed:</label>
          <select value={mistakesAllowed} onChange={e => setMistakesAllowed(Number(e.target.value))}>
            {mistakeOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <button className="done-btn" onClick={() => onApply({ tileShape, mistakesAllowed })}>Done</button>
        <button className="close-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default GameOptions;