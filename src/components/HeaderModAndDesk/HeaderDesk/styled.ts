import styled from "styled-components"

export const Container = styled.header`
width:100%;
height: 5rem;

display:flex;
justify-content: space-between;
align-items: center;

background: rgba(36, 35, 35, 0.1);
backdrop-filter: blur(4px);

font-family: 'Jura', sans-serif;
font-weight:400;
font-size: 1.3rem;

color:var(--white);

@media screen and (max-width: 720px){
  align-items: center;
  justify-content:center;
}

div{
  display: none;

  @media screen and (max-width: 720px){
    display: flex;
    padding:1rem;
    cursor: pointer;
    align-items:center;
    justify-content: center;
    font-size: 1.5rem;
  }
}
`;

export const Ullist = styled.ul`
display:flex;
margin:2rem;



@media screen and (max-width: 720px){
  display: none;
}

li{
  list-style: none;

  &:first-child{
    padding-right: 3rem;
  }
}

li a{
  padding:0.5rem;
  color:var(--white);
  text-decoration:none;
  transition:0.5s;

  &:hover{
    color:var(--yellow-500);
  }
}


`;
