import React, { useEffect, useState } from 'react'

export const useMoviesData = (query) => {
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
       setLoading(true)
       getData();
    },[])


    const getData = async () => {
        const key = process.env.REACT_APP_API_KEY;
        try {
            const res = await fetch(`https://api.themoviedb.org/3/${query}?api_key=${key}`);
            const data = await res.json(); 
            setMovies(data)     
        } catch (er) {
            setError(er.message);
        }  
        setLoading(false) ;
    }
    return {
        movies,
        loading,
        error
    }
}