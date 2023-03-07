import React from 'react'
import {useParams} from 'react-router-dom';
import { useMoviesData } from '../../../hooks/useMoviesData';
import * as Styled from './styles';
import { Link } from 'react-router-dom';
import { MainTemplate } from '../../MainTemplate/MainTemplate';

const MoviePage = ({isTvShow}) => {
  const params = useParams();
  let isTVShowName= 'movie'
  if(isTvShow){
    isTVShowName ='tv'
  }
  const {movies:movie} = useMoviesData(`${isTVShowName}/${params.id}`)
  if(movie){
  return (
    <MainTemplate>
      <Styled.Wrapper>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
          <div>
            <h2>{isTvShow ? movie.name : movie.title}</h2>
            <em>{isTvShow ? movie.original_name : movie.original_title}</em>
            <em>{movie.original_language}</em>
            <p>{movie.overview}</p>
            <Link to={movie.homepage}>Home Page Movie</Link>
            <Styled.Box>
                <span>Vote rating: {movie.vote_average}</span>
                <span>Vote count: {movie.vote_count}</span>
            </Styled.Box>
            <div>Production companies:</div>
            <Styled.Production>
              {movie.production_companies?.map((production) => (
                <span>{production.name}</span>
              ))}
              </Styled.Production>
          </div>
      </Styled.Wrapper>
    </MainTemplate>
  )
  }else{
    return (
      <div>Loading</div>
    )
  }
}

export default MoviePage