import styled from "styled-components";


export const Wrapper = styled.div`

  border-radius: 12px;
  overflow: hidden;
  position: relative;

  & > img {
    width: 100%;
    object-fit: cover;
  }

  & > h3 {
    color: black;
  }
`

export const Box = styled.div`
   position: absolute;
   top: 13px;
   right: 13px;
   background-color: white;
   padding: 8px;
   border-radius: 12px;
   font-weight: 700;
   font-size: 0.8rem;
`

export const Box1 = styled.div`
   position: absolute;
   bottom: 70px;
   left: 5px;
   background-color: white;
   padding: 8px;
   border-radius: 12px;
   font-weight: 700;
   font-size: 0.8rem;
`
export const H3 = styled.h3`
   font-size: 0.8rem;
   color:black;
   &.svg{
    margin-right:2em;
   }
`