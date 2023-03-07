import React from 'react'
import * as styled from './MovieCard.styles'
import {AiFillStar} from "react-icons/ai";


const MovieCard = ({movie, el}) => {
    let date, title;
    if(el==="/movie"){
      date=movie.release_date; 
      title=movie.title;
    }else{
      date=movie.first_air_date;
      title=movie.name;
    }
    let  wynik= movie.vote_average*10;
    wynik+="%";
  return (
    <styled.Wrapper>
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={title}/>
      <styled.H3>{title}</styled.H3><AiFillStar/>{wynik}
      <styled.Box>
        <span>{date}</span>
      </styled.Box>
      <styled.Box1>
        <span> {movie.vote_count}/{movie.popularity}</span>
      </styled.Box1>
    </styled.Wrapper>
  )
}

export default MovieCard