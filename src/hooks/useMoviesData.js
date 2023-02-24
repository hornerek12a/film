import { useEffect, useState } from "react"

export const useMoviesData =(query)=>{
    const [movies, setMovies] =useState([]);
    const [loading, setLoading] =useState(false);
    const [error, setError] =useState("");

    useEffect(()=>{
        setLoading(true);
        getData();
    },[])

    const getData =async ()=>{
        const key= process.env.REACT_APP_API_KEY;
       
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie${query}?api_key=${key}&page=1`)
            const data = await res.json();
            setMovies(data.results);
        } catch (er) {
            setError(er.messsage)
        }
        setLoading(false);
      }

      return{
        movies,
        loading,
        error
      }
}