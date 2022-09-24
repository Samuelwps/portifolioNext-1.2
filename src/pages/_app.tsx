import React from "react"
import {AppProps} from "next/app"
import "bootstrap/dist/css/bootstrap.css";

import {Headers} from "../components/Headers"

import GlobalStyle from "../styles/global"
import {ThemeProvider} from "styled-components"
import theme from './../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Headers/>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default MyApp
