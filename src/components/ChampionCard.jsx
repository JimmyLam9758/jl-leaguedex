import React from 'react';
import ChampionList from '../functions/champions';
import '../styles/ChampionCard.css';

const ChampionCard = () => {
  return (
    <div className="champion-card">
      <ChampionList /> {/* Render the ChampionList component */}
    </div>
  );
};

export default ChampionCard;