import styled from "styled-components"

export const Container = styled.div`
width:100%;
height:100%;

padding:2rem;

border-top: 1px solid var(--gray-800);
`

export const ContainerMessage = styled.div`
width:100%;
height:100%;

display:flex;
align-items:center;
justify-content: center;
justify-content: space-around;

@media screen and (max-width:940px){
  flex-direction:column;
  min-height: 25rem;

}
`

export const Message = styled.div`
display:flex;

margin:1rem;
`

export const MessageData = styled.div`
background: var(--background-input);
border-radius: 2px;


min-width:30rem;

min-height:30rem;

padding:1.3rem;

display:flex;
align-items:center;
justify-content:center;
justify-content:space-around;
flex-direction:column;

border-radius: 8px;

input{
  width:100%;

  padding:1.2rem;

  font-size: 1.2rem;

  color:var(--white);

  border-radius: 5px;

  border:none;
  outline: none;
  background:var(--background);
}

input:focus{
  border:1px solid var(--yellow-500);
}

textarea{
  width:100%;
  height:10rem;

  color:var(--white);

  padding:1.2rem;

  font-size: 1.3rem;

  border-radius: 5px;
  border:none;
  background:var(--background);

  resize:none;
  outline:none;
}

textarea:focus{
  border:1px solid var(--yellow-500);
}
`

export const DivMessageButton = styled.div`
display:flex;
justify-content:right;
align-items: right;

color:var(--white);
cursor:pointer;
background:var(--yellow-500);
padding:0.7rem;
border:none;
border-radius: 2px;

letter-spacing: 1px;
font-size:1.2rem;
font-weight: 100;

`

export const TextMessage = styled.div`
margin:1rem;

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

text-align: center;

h1{
  color:var(--yellow-500);
  font-size:2.5rem;
}

p{
  color:var(--white);
  font-size:1.5rem;
}


`

export const IniciarProjeto = styled.div`
width:100%;
height:100%;
display:flex;
align-items: center;
justify-content:center;

color:var(--white);

div{
  margin-right:0.5rem;

  width:2.3rem;
  height:2px;

  background: var(--yellow-500);
}

`
