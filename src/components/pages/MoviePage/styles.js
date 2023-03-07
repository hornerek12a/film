import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  max-width:1600px;
  margin: 30px auto;
  width: 95%;
  gap: 40px;

  & h2 {
    font-size: 4rem;
    margin: 0;
  }

  & p {
    font-size: 2rem;
  }
`

export const Box = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top:2em;
   margin-bottom: 2em;
`
export const Production =styled.div `
display:grid;
column-gap:1fm;
`