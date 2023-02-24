import React from 'react'
import { useMoviesData } from '../../../hooks/useMoviesData'

const HomePage = () => {
    const {movies, loading, error} =useMoviesData("/popular");
    console.log(movies, loading, error)
    const listMovie = movies.map((movie) =>  <p key={movie.id}>{movie.title}</p>);
  return (
    <div>
       {listMovie}
    </div>
  )
}

export default HomePage