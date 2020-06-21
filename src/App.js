import React, {useState} from 'react';
import './App.css';
import Jokes from './jokes'
import JokePicker from './jokePicker';
import { JokeContext } from './jokeContext';

function App() {
  const [jokeOption, setJokeOption] = useState('chuckNorris');
  
  return (
    <div className="App">
      <JokeContext.Provider value={{jokeOption, setJokeOption}}>
        <header className="App-header">
          <Jokes />
        </header>
        <div>
          <JokePicker />
        </div>
      </JokeContext.Provider>
    </div>
  );
}

export default App;
