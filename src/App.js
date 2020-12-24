import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [fish, setFish] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [fossils, setFossils] = useState([]);
  const [villagers, setVillagers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFish() {
      let res = await fetch('https://acnhapi.com/v1/fish');
      let data = await res.json();
      setFish(data);
    }
    async function fetchBugs() {
      let res = await fetch('https://acnhapi.com/v1/bugs');
      let data = await res.json();
      setBugs(data);
    }
    async function fetchFossils() {
      let res = await fetch('https://acnhapi.com/v1/fossils');
      let data = await res.json();
      setFossils(data);
    }
    async function fetchVillagers() {
      let res = await fetch('https://acnhapi.com/v1/villagers');
      let data = await res.json();
      setVillagers(data);
    }

    fetchFish();
    fetchBugs();
    fetchFossils();
    fetchVillagers();
  }, []);

  return (
    <div className="App">
      Hola!
    </div>
  );
}
export default App;
