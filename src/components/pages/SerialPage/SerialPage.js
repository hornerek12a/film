import React, { useEffect, useState } from 'react'
import { MainTemplate } from '../../MainTemplate/MainTemplate';

import MovieCardPortrait from '../../Movies/MovieCardPortrait/MovieCardPortrait';

const SerialPage = () => {
  const [movies, setMovies]=useState([]);
  useEffect(()=>{
    let debounce = null;
    debounce=setTimeout(()=>getData(), 2000);
    return()=>clearInterval(debounce);
  },[])
  const getData= async() =>{
    const key = process.env.REACT_APP_API_KEY;
    const res= await fetch (`https://api.themoviedb.org/3/tv/popular?api_key=${key}`)
    const  data =await res.json();
    setMovies(data.results);
  }
  
  return (
    <MainTemplate>
       <div>
        {!movies.length?(<p>Loading</p>) :(movies.map((movie)=><MovieCardPortrait  key={movie.id} isTvShow movie={movie}/>))}
      </div>
      </MainTemplate>
  )
}

export default SerialPage