import React, { useEffect, useState } from 'react'

import MovieCardPortrait from '../../Movies/MovieCardPortrait/MovieCardPortrait';

const SearchPage = ({isTvShow,text}) => {
  const[query,setQuery]=useState("");
  const [movies, setMovies]=useState([]);
  
  const getData= async() =>{
    const key = process.env.REACT_APP_API_KEY;
    const res= await fetch (`https://api.themoviedb.org/3/search/${text}?api_key=${key}&query=${query}`)
    const  data =await res.json();
    setMovies(data.results);
  }

  useEffect(()=>{
    let debounce = null;
    debounce=setTimeout(()=>getData(), 2000);
    return()=>clearInterval(debounce);
  },[query])
  
  const handleChange =(e)=>{
    setQuery(e.target.value);
  }
  let textPlaceHolder="Search movie";
  if(isTvShow){
    textPlaceHolder ="Search serials";
  }
  return (
    <div>
      <input value={query} onChange={handleChange} placeholder={textPlaceHolder}/>
       <div>
        {!movies.length?(<p>Not found</p>) :(movies.map((movie)=><MovieCardPortrait  key={movie.id} isTvShow movie={movie}/>))}
      </div>
    </div>
  )
}

export default SearchPage