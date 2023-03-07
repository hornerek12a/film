import React from 'react'
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import logo from "../../images/logo.png"

const Header = () => {
  return (
    <Styled.Wrapper>
      <Link to="/">
            <Styled.Img src={logo} alt="Movies/Serial"/>
        </Link>
      <nav>
          <Styled.List>
                  <Link to='/movies'>Movies</Link>
                  <Link to='/serial'>Serial</Link>
                  <Link to='/searchMovie'>Search Movie</Link>
                  <Link to='/searchTv'>Search Serial</Link>
                  </Styled.List>
                </nav>
      </Styled.Wrapper>
    
  )
}

export default Header
