import React, { useEffect, useState } from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import Movies from "../../Movies/Movies/Movies";
import 'swiper/css';
import FeaturedMovie from "../../Movies/FeaturedMovie/FeaturedMovie";
import { MainTemplate } from "../../MainTemplate/MainTemplate";

const HomePage = () => {
  const { movies:popular, loading, error } = useMoviesData("/movie/popular");
  const { movies:topRated} = useMoviesData("/movie/top_rated");
  const { movies:latest} = useMoviesData("/movie/upcoming");
  const { movies:tvPopular} = useMoviesData("/tv/popular");
  const { movies:tvLatest} = useMoviesData("/tv/top_rated");

  const [featured, setFeatured] = useState();

  useEffect(()=>{
    if(featured) return;
    featuredMovie();
  },[popular])

  const featuredMovie = () => {
    if(!popular?.results)return;
    const result = Math.floor(Math.random()*popular.results.length);
    setFeatured(popular.results[result]);
  }

  return (
    <MainTemplate>
    <div>
      <Movies portrait title="Popular Movies" movies={popular?.results} />
       {featured ? <FeaturedMovie featured={featured}/>  : <p>Loading</p>}  
      <Movies title="Top Rated" movies={topRated?.results} />
      <Movies portrait title="Upcoming Movies" movies={latest?.results} />
      <Movies isTvShow title="Popular TV Shows" movies={tvPopular?.results} />
      <Movies isTvShow portrait title="Top Rated TV Shows" movies={tvLatest?.results} />
    </div>
    </MainTemplate>
  );
};

export default HomePage;
