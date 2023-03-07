import styled from "styled-components";


export const Wrapper = styled.article`
  /* max-width: 400px; */
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  & > img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  & > h3 {
    position: absolute;
    bottom: 13px;
    color: #fff;
    left: 13px;
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
   color: black;
`