import React from 'react'

import MovieCard from '../../../templates/MovieCard/MovieCard';
import * as styled from "./MovieList.styles"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMoviesData } from '../../../../hooks/useMoviesData';

const MovieList = ({title, el}) => {
    let query=el;
    query+=title;
    const {movies, select} =useMoviesData(query);
    const listMovie = movies.map((movie) =>  <SwiperSlide  key={movie.id}><MovieCard movie={movie} el={el}/> </SwiperSlide>);
    console.log(select);
  return (
    <styled.Wrapper>
       <Swiper
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        640: {
          width:640,
          slidesPerView:2
        },
        768: {
          width:768,
          slidesPerView:3
        },
        992: {
          width:992,
          slidesPerView:3
        }
      }}>
    
      {listMovie}
    </Swiper>
       
    </styled.Wrapper>
  )
}

export default MovieList