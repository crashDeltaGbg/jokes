import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);
  const [selectJoke, setSelectJoke] = useState({});

  useEffect(() => {
    async function getJokes() {
      const response = await fetch('https://official-joke-api.appspot.com/random_ten');
      const data = await response.json();

      setJokes(data);
    }

    getJokes();
  }, []);

  function getRandomJoke() {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    setSelectJoke(joke);
  }

  useEffect(() => {
    getRandomJoke();
  }, [jokes]);

	return (
    <div className="App">
      { selectJoke ?
      <article id="joke">
        <p id="setup">{ selectJoke.setup }</p>
        <p id="punchline">{ selectJoke.punchline }</p>
        <button id="shuffle" onClick={ getRandomJoke }>Shuffle</button>
      </article>
      : '' }
    </div>
  );
}

export default App;
