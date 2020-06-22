import React, { useContext, useEffect } from 'react';
import { JokeContext } from './jokeContext';
import { JokeCategory } from './jokeCategory';

export const JokePicker = props => {
    const {jokeOption, setJokeOption} = useContext(JokeContext);

    return ( 
        <select className="m-2 custom-select" value={jokeOption} onChange={(event) => setJokeOption(event.target.value)}>
            {Object.keys(JokeCategory).map((key) => (
                <option value={key}>{JokeCategory[key].name}</option>
            ))}
        </select>
    );
}

export default JokePicker;