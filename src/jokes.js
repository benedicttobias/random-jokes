import React, {useState, useEffect, useContext}  from 'react';
import { JokeContext } from './jokeContext';
import useHttp from './useHttp';

const Jokes = props => {
    const {jokeOption, setJokeOption} = useContext(JokeContext);
    const [count, setCount] = useState(1);
    const [joke, setJoke] = useState(null);
    const [data] = useHttp(jokeOption === 'chuckNorris' ? 'https://api.chucknorris.io/jokes/random' : 'https://sv443.net/jokeapi/v2/joke/Miscellaneous?blacklistFlags=religious,political,racist,sexist&type=single', [jokeOption, count]);

    // todo: create custom hook for http? useHttp?
    const fetchJoke = () => {
        if (jokeOption === 'chuckNorris'){
            setJoke(data?.value);
        } else if (jokeOption === 'nsfw'){
            setJoke(data?.joke);
        }
    }

    useEffect(() => {
        fetchJoke();
    });

    return (
        <>
            <div>
                <h1>{joke}</h1>
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Lame!</button>
            </div>
        </>
    );    
} 

export default Jokes;