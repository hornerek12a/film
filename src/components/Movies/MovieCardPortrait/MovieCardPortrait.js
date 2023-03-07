import React from 'react';
import * as Styled from './styles';
import {AiFillStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MovieCardPortrait = ({movie, isTvShow}) => {
  return (
    <Link to={isTvShow ?`/serial/${movie.id}`:`/movie/${movie.id}`}>
    <Styled.Wrapper>
      <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title}/>
      <h3>{isTvShow ? movie.name : movie.title} <span><AiFillStar/>{movie.vote_average}</span></h3>
      <Styled.Box>
        <span>{isTvShow ? movie.first_air_date : movie.release_date}</span>
      </Styled.Box>
    </Styled.Wrapper>
    </Link>
  )
}

export default MovieCardPortrait