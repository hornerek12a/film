import styled from "styled-components"

export const Wrapper = styled.article`
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  & > img {
    width: 100%;
    object-fit: cover;
  }

  & > h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 1rem;

    & span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
    }
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