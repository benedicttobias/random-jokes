import {useState, useEffect} from 'react'

const useHttp = (url, dependencies) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => {       
            return response.json();
        })
        .then(data => {
            setData(data);
        })
    }, dependencies)


    return [data]
};

export default useHttp;