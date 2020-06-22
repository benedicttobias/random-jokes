import React, {useState, useEffect, useContext}  from 'react';
import { JokeContext } from './jokeContext';
import useHttp from './useHttp';
import { JokeCategory } from './jokeCategory';

const Jokes = props => {
    const {jokeOption} = useContext(JokeContext);
    const [count, setCount] = useState(1);
    const [joke, setJoke] = useState(null);
    const [data] = useHttp(JokeCategory.find(x => x.id === jokeOption).url, [jokeOption, count]);

    const fetchJoke = () => {
        if (jokeOption == 'chuckNorris'){
            setJoke(data?.value);
        } else {
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