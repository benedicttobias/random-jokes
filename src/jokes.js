import React, {useState, useEffect, useContext}  from 'react';
import { JokeContext } from './jokeContext';

const Jokes = props => {
    const {jokeOption} = useContext(JokeContext);
    const [joke, setJoke] = useState(null);

    // todo: create custom hook for http? useHttp?
    const fetchJoke = () => {
        fetch(jokeOption === 'chuckNorris' ? 'https://api.chucknorris.io/jokes/random' : 'https://sv443.net/jokeapi/v2/joke/Miscellaneous?blacklistFlags=religious,political,racist,sexist&type=single')
        .then(response => {
            if (!response.ok){
                setJoke("Jokes on you.. Failed to get jokes using API...")
            }

            return response.json();
        })
        .then(data => {
            if (jokeOption === 'chuckNorris'){
                setJoke(data.value);
            } else if (jokeOption === 'nsfw'){
                setJoke(data.joke);
            }
        });
    }

    useEffect(() => {
        fetchJoke();
    }, [jokeOption]);

    return (
        <>
            <div>
                <h1>{joke}</h1>
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => fetchJoke()}>Lame!</button>
            </div>
        </>
    );    
} 

export default Jokes;