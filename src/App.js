import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import MoviePage from './components/pages/MoviePage/MoviePage';
import MoviesPage from './components/pages/MoviesPage/MoviesPage';
import SerialPage from './components/pages/SerialPage/SerialPage';
import SearchPage from './components/pages/SearchPage/SearchPage';

const App = () => {

  return (
    <>
        <BrowserRouter>
             <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/movie/:id' element={<MoviePage/>}/>
                <Route path='/serial/:id' element={<MoviePage  isTvShow/>}/>
                <Route path='/movies' element={<MoviesPage/>}/>
                <Route path='/serial' element={<SerialPage/>}/>
                <Route path='/searchMovie' element={<SearchPage text="movie"/>}/>
                <Route path='/searchTv' element={<SearchPage isTvShow text="tv"/>}/>
             </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;