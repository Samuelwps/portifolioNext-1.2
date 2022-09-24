import React from "react"
import {AppProps} from "next/app"
import "bootstrap/dist/css/bootstrap.css";

import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from "../styles/global"
import {ThemeProvider} from "styled-components"
import theme from './../styles/theme';
import { ToastContainer } from 'react-toastify';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle/>
      <ToastContainer/>
    </ThemeProvider>
  )
}

export default MyApp
