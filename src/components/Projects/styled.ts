import styled, { css } from "styled-components";


export const Container = styled.section`
max-width:1440px;
margin:0 auto;
`;

export const DivForWorks = styled.div`
display:flex;
width: 100%;
justify-content:center;
margin:2rem;
flex-direction:row;
justify-content:space-around;

padding: 6.5rem 0rem 3rem 0rem;

border-top:1px solid var(--gray-800);
`;

export const ButtonAco = styled.button`
margin:0 auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-family: 'Jura', sans-serif;
font-size:1.5rem;
border: 0;

cursor: pointer;
background-color: transparent;

padding: 8px 16px;
margin-top: 16px;

color:white;
`

export const Arrows = styled.div<ContentProps>`
max-width: 5rem;

img{
  width:100%;
  height:100%;
}

${({content}) => content && css`
transform: rotate(90deg);
`}
transition: 0.5s ease;
`
interface ContentProps{
  content: boolean
}

export const ContentAco = styled.div<ContentProps>`
width: 0 auto;
opacity: 0;
transform: translateY(0px);
max-height: 0;
pointer-events: none;
${({content}) => content && css`
max-height: min-content;
transform: translateY(5px);
pointer-events: auto;
opacity: 1 ;
transition: 1s ease;
;
`}

p{
  text-align: center;
}
`

export const DivCSS = styled.div`
margin:1rem;
max-width:50rem;
`

export const SelectedWorks = styled.div`
border-right: 1px solid var(--gray-800);

@media screen and (max-width:1180px){
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 7rem;
}
`;

export const ProjectsWorks = styled.div`
padding:1rem;
display:flex;
flex-direction:column;

@media screen and (max-width:1180px){
  transform: rotate(-90deg) translate3d(-20px,-6px,0);
  min-width: 26rem;
}

h2{
  font-size: 1.8rem;
  font-weight:400;
  @media screen and (max-width:1080px){
    font-size: 2.5rem;
  }


}

p{
  color: var(--gray-100);
}
`;

export const ImgDiv = styled.div`
  max-width:20rem;
  max-height:20rem;

  img{
    width:100%;
    height:100%;
  }
`


export const DivDescription = styled.div`
  margin:1rem;

  max-width:25rem;

  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;


  div{
    a{
      display:flex;
      justify-items:center;
      align-items:center;
      color:var(--yellow-500);
      text-decoration:none;
      transition:0.5s;
      &:hover{
              transform: scale(1.1);
      }
    }
  }
`

export const ListProjectsRev = styled.div`
  padding:1rem;
  max-width: 45rem;
  display:flex;

  @media screen and (max-width:1180px){
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

export const ListProjects = styled.div`
  padding:1rem;

  max-width: 45rem;

  display:flex;

  @media screen and (max-width:1180px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    text-align: center;
    font-size:4rem;
    opacity:0.1;
    padding-right:1rem;
    color:white;
  }


`
