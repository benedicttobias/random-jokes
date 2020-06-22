import React, { useContext, useEffect } from 'react';
import { JokeContext } from './jokeContext';
import { JokeCategory } from './jokeCategory';

export const JokePicker = props => {
    const {jokeOption, setJokeOption} = useContext(JokeContext);

    return ( 
        <select className="m-2 custom-select" value={jokeOption} onChange={(event) => setJokeOption(event.target.value)}>
            {Object.entries(JokeCategory).map((category) => (
                <option key={category[1].id} value={category[1].id}>{category[1].name}</option>
            ))}
        </select>
    );
}

export default JokePicker;