import React, {useState, useEffect, useContext}  from 'react';
import { JokeContext } from './jokeContext';
import useHttp from './useHttp';
import { JokeCategory } from './jokeCategory';

const Jokes = props => {
    const {jokeOption, setJokeOption} = useContext(JokeContext);
    const [count, setCount] = useState(1);
    const [joke, setJoke] = useState(null);
    const [data] = useHttp(jokeOption === JokeCategory.chuckNorris.value ? JokeCategory.chuckNorris.url : JokeCategory.nsfw.url, [jokeOption, count]);

    // todo: create custom hook for http? useHttp?
    const fetchJoke = () => {
        switch(jokeOption){
            case JokeCategory.chuckNorris.value:
                setJoke(data?.value);
                break;
            case JokeCategory.nsfw.value:
                setJoke(data?.joke);
                break;
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