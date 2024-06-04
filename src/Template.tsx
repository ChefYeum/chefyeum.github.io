import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { Global, Theme, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { globalStyles } from './globalStyles'

const InnerBody = styled.div({
  borderWidth: '2px',
  borderColor: 'white',

  maxWidth: '90vw',
  width: 900,
  margin: '4em auto',
  background: '#240000',

  "@media screen and (min-width: 1080px)": {
    borderStyle: 'solid',
    padding: '4em 4em 4em',
  },

  zIndex: 1, // Allows the footer to be underneath 
})

const FlexWrapper = (props: { children: React.ReactNode }) => <div css={{
  display: 'flex',
  flexDirection: 'column',
}}> {props.children} </div>

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      text: string;
    };
  }
}

const ColourThemeWrapper = (props: { children: React.ReactNode }) => (
  <ThemeProvider theme={{
    colors: {
      background: '#240000',
      text: '#E7ECEF',
    }
  }}>
    <div css={(theme: Theme) => ({
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
    })}>{props.children}</div>
  </ThemeProvider>
)

const Template = (props: { children: React.ReactNode }) => (
  <ColourThemeWrapper>
    <Global styles={globalStyles} />
    <FlexWrapper>
      <InnerBody>
        <Header />
        {props.children}
      </InnerBody>
      <Footer />
    </FlexWrapper>
  </ColourThemeWrapper>
)

export default Template