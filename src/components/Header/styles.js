import styled from "styled-components";



export const Wrapper = styled.header`
    width: 90%;
    max-width:1440px;
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 0;
    &>img{
      width: 200px;
      height:200px;
    }
`
export const Img = styled.img`
      width: 200px;
      height:200px;
`
export const List = styled.ul`
    list-style: none;
    display: flex;
    gap:200px;

    &>a{
      color:white;
      text-decoration: none;
      font-size:larger;
      font-weight:bold;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
`

