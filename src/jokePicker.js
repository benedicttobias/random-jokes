import React, { useContext, useEffect } from 'react';
import { JokeContext } from './jokeContext';

export const JokePicker = props => {
    const {jokeOption, setJokeOption} = useContext(JokeContext);

    return ( 
        <select className="m-2 custom-select" value={jokeOption} onChange={(event) => setJokeOption(event.target.value)}>
            <option value="chuckNorris">Chuck Norris</option>
            <option value="nsfw">NSFW</option>
        </select>
    );
}

export default JokePicker;