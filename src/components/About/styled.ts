import styled from "styled-components"

export const Container = styled.div`
max-width: 1440px;
margin: 0 auto;
width: 100%;
display:flex;
flex-direction:row;
justify-content:space-around;

padding: 2.5rem 0rem 0rem 0rem;

@media screen and (max-width:940px){
  flex-direction:column;
  align-items:center;
}

`;

export const Me = styled.div`
display:flex;
flex-direction:column;

@media screen and (max-width:940px){
  align-items:center;
}

h1{
  color:white;
  padding-top: 0.1rem;
  font-size:3rem;
}

p{
  padding:1.5rem 0rem 1.5rem 0rem;
  color:var(--yellow-500);
  font-size:1.5rem;
}
`;

export const Links = styled.div`
padding-top:2rem;

a{
  text-decoration:none;
  color:white;
}
.icons{
  width:3rem;
  height:3rem;
  margin-right:1rem;
  cursor:pointer;
  transition:0.5s;

  &:hover{
    filter: drop-shadow(0px 0px 5px #E9AB2F);
  }
}
`;

export const About = styled.div`
width:30rem;
padding-top:3.8rem;

@media screen and (max-width:940px){
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  p{
    margin:2rem;
    display:flex;
    align-items:center;
    text-align:center;
  }
}

p{
  padding-top:1rem;
  display:flex;
  flex-wrap: wrap;
  font-size: 1.3rem;
}

h1{
  font-size:1.5rem;
  color:var(--yellow-500);
}
`;
