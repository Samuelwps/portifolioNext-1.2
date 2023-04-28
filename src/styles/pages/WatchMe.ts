import styled from "styled-components"


export const SectionWorks = styled.section`
padding-top: 5rem;
max-width: 1440px;
height: 100vh;

display: block;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 1.5rem;

color:var(--white);
`;

export const DivContent = styled.div`
display:flex;
align-items:center;
justify-content: center;
margin:1.5rem;

@media screen and (max-width:940px){
  flex-direction: column;
}
`

export const DivTitle = styled.div`
max-width:400px;

display:flex;
flex-direction: column;
margin:3rem;
justify-content: center;
align-items:center;

font-size:1.5rem;

p{
  text-align: center;
  max-width:40rem;
  padding-top:3rem;
}


`

export const Title = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

div{
  background: var(--yellow-500);
  width:2.3rem;
  margin-right:0.5rem;
  height:2px;
  margin-bottom:2rem;
}

h4{
  margin-bottom:2rem;
  font-size:2rem;
}
`;

export const DivImage = styled.div`
max-width:35rem;
max-height:35rem;
background:var(--background);

img{
  width:100%;
  height:100%;
}
`

export const ProjectHeader = styled.div`
width:100%;
display:flex;
flex-direction:column;
`;

export const ButtonGit = styled.a`
width:18rem;

text-decoration:none;

margin:2rem;

display:flex;
justify-content:space-around;
align-items:center;
background: var(--gitcolor);
padding:1.3rem;
border-radius:15px;
border:none;
color:white;
font-size:1.5rem;

p{
  font-weight:300;
}
`

export const Projectcontent = styled.div`
width:100%;
margin:1.5rem;

`

export const DivImageSidebar = styled.div`
max-width: 20rem;

img{
  width:100%;
  height:100%;
}
`

export const DivProjectSideBar = styled.div`
display:flex;
align-items: center;
justify-content: center;
justify-content: safe;
margin:1.5rem;
@media screen and (max-width:940px){
  flex-direction: column-reverse;
}
`

export const DivP = styled.div`
display:flex;
flex-direction: column;
margin:1rem;

p{
  max-width:30rem;
  text-align: center;

  @media screen and (max-width:940px){
    padding-bottom:2rem;
  }
}
`

export const ProjectContent =   styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin:1.5rem;
p{
  max-width:30rem;
  padding-top:1rem;
  text-align: center;
}

`

export const DivImageContent = styled.div`
max-width: 35rem;

img{
  width:100%;
  height:100%;
}
`
