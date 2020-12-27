import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import Fish from './components/Fish';
import Bugs from './components/Bugs';
import ArtWork from './components/ArtWork';
import Villagers from './components/Villagers';


function App() {
  const [fish, setFish] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [artWork, setArtWork] = useState([]);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    async function fetchFish() {
      let res = await fetch('https://api.nookipedia.com/nh/fish', {
        headers: {
          'x-api-key': '3c1ec54a-ee67-4b9d-8dbf-9c71004f0e97'
        }
      });
      let data = await res.json();
      setFish(data);
    }
    async function fetchBugs() {
      let res = await fetch('https://api.nookipedia.com/nh/bugs', {
        headers: {
          'x-api-key': '3c1ec54a-ee67-4b9d-8dbf-9c71004f0e97'
        }
      });
      let data = await res.json();
      setBugs(data);
    }
    async function fetchArtWork() {
      let res = await fetch('https://api.nookipedia.com/nh/art', {
        headers: {
          'x-api-key': '3c1ec54a-ee67-4b9d-8dbf-9c71004f0e97'
        }
      });
      let data = await res.json();
      setArtWork(data);
    }
    async function fetchVillagers() {
      let res = await fetch('https://api.nookipedia.com/villagers', {
        headers: {
          'x-api-key': '3c1ec54a-ee67-4b9d-8dbf-9c71004f0e97'
        }
      });
      let data = await res.json();
      setVillagers(data);
    }

    fetchFish();
    fetchBugs();
    fetchArtWork();
    fetchVillagers();
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/fish'>
              <Fish data={fish} />
            </Route>
            <Route exact path='/bugs'>
              <Bugs data={bugs} />
            </Route>
            <Route exact path='/artwork'>
              <ArtWork data={artWork} />
            </Route>
            <Route exact path='/villagers'>
              <Villagers data={villagers} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}
export default App;
