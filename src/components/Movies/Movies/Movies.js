import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardPortrait from "../MovieCardPortrait/MovieCardPortrait";
import * as Styled from './styles';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const Movies = ({ movies,title,portrait, isTvShow }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Swiper
        spaceBetween={20}
        loop={true}
        
        autoplay={{
            delay: portrait ? 6500 : 20000,
            disableOnInteraction: false
        }}
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
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            {portrait ? <MovieCardPortrait isTvShow={isTvShow} movie={movie}/> : <MovieCard isTvShow={isTvShow}  movie={movie} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Wrapper>
  );
};

export default Movies;
