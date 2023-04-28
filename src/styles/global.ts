import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
:root{
  --white: red;
  --white-100:#35353562;

  --gray-100: #a8a8b3;
  --gray-300: #949494;
  --gray-800: #29292e;
  --gray-850: #1f2729;
  --gray-900: #0d0d0d;

  --background:#0d0d0d;
  --background2:#242323;
  --background-input:rgba(36, 35, 35, 0.3);

  --gitcolor:#0D1117;

  --cyan-500: #61dafb;
  --yellow-500: #e9ab2f;
}


*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  width:100%;
  height: 100vh;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  font-family: 'Jura', sans-serif;

  background:${props => props.theme.colors.background};
  color:${props => props.theme.colors.text};
}

html{
  scroll-behavior: smooth;

  ::-webkit-scrollbar{
    padding-right: 4px;
    width: 0.3rem;
    background: transparent;
  }


  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: var(--white-100);
    border: 6px solid var(--white-100);
  }
}

@media screen and (max-width:1080px){
  html{
    font-size: 93.75%;
  }
}

@media screen and (max-width:720px){
  html{
    font-size: 87.5%;
  }
}

@media screen and (max-width:625px){
  html{
    font-size: 78.5%;
  }
}

@media screen and (max-width:535px){
  html{
    font-size: 71.5%;
  }
}

@media screen and (max-width:488px){
  html{
    font-size: 64.5%;
  }
}

@media screen and (max-width:400px){
  html{
    font-size: 58.5%;
  }
}

@media screen and (max-width:350px){
  html{
    font-size: 54.5%;
  }
}

`
