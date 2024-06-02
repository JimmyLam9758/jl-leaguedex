import React, { useState, useEffect } from 'react';


const ChampionList = () => {
  // Initialize usestate variables with an empty array
  const [champions, setChampions] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    // Fetch champion data from league API
    fetch('https://ddragon.leagueoflegends.com/cdn/14.11.1/data/en_US/champion.json')
     .then(response => response.json())
     .then(data => {
      // Get data from response
        const championsData = data.data;
        const championsArray = Object.values(championsData);
        // create array of promises to fetch logos
        const promises = championsArray.map(champion => {
          // fetch logo and return a promise that resolves with URL
          return fetchChampionLogo(champion.id).then(logoUrl => ({...champion, logoUrl }));
        });
        // Wait for all promises to resolve then update state with all data
        // Promise.all(promises).then(championsWithLogos => {
        //   setChampions(championsWithLogos);
        Promise.all(promises).then(championsWithLogos => {
          championsWithLogos.sort((a, b) => a.name.localeCompare(b.name));
          setChampions(championsWithLogos);
        });
        // });
      })
     .catch(error => {
      // Catch any errors
        console.error(error);
      });
  }, []);

  // Function to fetch champ logos
  const fetchChampionLogo = id => {
    return fetch(`https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${id}.png`)
     .then(response => response.blob())
     .then(blob => URL.createObjectURL(blob));
  };


  // Render component
  return (
    <div>
      <h1>League of Legends Champions</h1>
      <ul>
        {champions.map(champion => (
          <li key={champion.name}>
            <img src={champion.logoUrl} alt={champion.name} width="50" height="50" />
            {champion.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionList;