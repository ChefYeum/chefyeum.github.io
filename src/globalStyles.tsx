import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PageTitle = styled.h2({
  fontFamily: 'Crimson Pro',
  fontSize: '2rem',
  marginTop: 0,
  fontWeight: 100,
})


// Non-themeable global styles:
export const globalStyles = css({
  body: {
    // Remove user agent styles
    margin: 0, 
  },
  p: {
    fontSize: '1em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
  },
  h1: {
    fontSize: '1.35rem',
    fontWeight: 300,
    fontFamily: 'Open Sans',

    // Resume specific? 
    color: '#837569',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    marginTop: '1em',
    marginBottom: '.33em',
  },
  h2: {
    fontFamily: 'Open Sans',
    fontSize: '1.2rem',
    fontWeight: 500,
    // marginTop: '.25em',
    marginTop: 0,
    marginBottom: 0,
  },
  h3: {
    fontFamily: 'Raleway',
    fontSize: '1rem',
    fontWeight: 200,
    // Set top bottom margin to zero
    marginTop: 0,
    marginBottom: 0,
  },
  h4: {
    all: 'unset',
    // paddingBottom: '1em',
    fontFamily: 'Crimson Pro',
    fontWeight: 'bold',
    textDecoration: 'underline'
  },

  // Underline text under h4
  'h4 + p': {
    marginLeft: '1em',
    marginTop: 0,
  },

  'h4:has(> p)': {
    textDecoration: 'underline',
  },

  ':visited': {
    color: 'inherit'

  },
  ':link': {
    color: 'inherit'
  },

  // Bulletpoints
  ul: {
    paddingInlineStart: '.5em',
    marginTop: 0,
    marginBottom: '.5em',
  },

  /* Bulletpoint */
  '::marker': {
    fontSize: '.5em'
  },
});
