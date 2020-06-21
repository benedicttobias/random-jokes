import React, {useState, useEffect, useContext}  from 'react';
import { JokeContext } from './jokeContext';

const Jokes = props => {
    const {jokeOption, setJokeOption} = useContext(JokeContext);
    const [joke, setJoke] = useState(null);
    const [isLame, setIsLame] = useState(true);

    // todo: create custom hook for http? useHttp?
    const fetchJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (!response.ok){
                setJoke("Jokes on you.. Failed to get jokes using API...")
            }

            return response.json();
        })
        .then(data => {
            setJoke(data.value);
            setIsLame(false);
        });
    }

    useEffect(() => {
        if (isLame){
            fetchJoke();
        }
    }, [isLame]);

    return (
        <>
            <div>
                <h1>{joke}</h1>
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => setIsLame(true)}>Lame!</button>
            </div>
        </>
    );    
} 

export default Jokes;