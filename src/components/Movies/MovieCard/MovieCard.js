import React from 'react';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

const MovieCard = ({movie,isTvShow}) => {
  return (
    <Link to={isTvShow ?`/serial/${movie.id}`:`/movie/${movie.id}`}>
    <Styled.Wrapper>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
      <h3>{isTvShow ? movie.name : movie.title}</h3>
      <Styled.Box>
        <span>{ isTvShow ?  movie.first_air_date : movie.release_date}</span>
      </Styled.Box>
    </Styled.Wrapper>
    </Link>
  )
}

export default MovieCard