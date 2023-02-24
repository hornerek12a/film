import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage/HomePage'
import MoviePage from './components/pages/MoviePage/MoviePage'


const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movie/:id" element={<MoviePage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App