import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

//@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
const defaultStyle = css`
  @font-face {
    font-family: 'D2Coding';
    src: url('/fonts/subset-D2Coding.woff2') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'D2Coding', serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
