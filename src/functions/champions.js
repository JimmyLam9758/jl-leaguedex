import React, { useState, useEffect } from 'react';

const ChampionList = () => {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://ddragon.leagueoflegends.com/cdn/14.11.1/data/en_US/champion.json')
     .then(response => response.json())
     .then(data => {
        const championsData = data.data;
        const championsArray = Object.values(championsData);
        const promises = championsArray.map(champion => {
          return fetch(`https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${champion.id}.png`)
           .then(response => response.blob())
           .then(blob => {
              const url = URL.createObjectURL(blob);
              return {...champion, logoUrl: url };
            });
        });
        Promise.all(promises).then(championsWithLogos => {
          setChampions(championsWithLogos);
          setLoading(false);
        }).catch(error => {
          setError(error);
          setLoading(false);
        });
      })
     .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>League of Legends Champions</h1>
      <ul>
        {champions.map(champion => (
          <li key={champion.id}>
            <img src={champion.logoUrl} alt={champion.name} width="50" height="50" />
            {champion.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionList;