import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import styled from '@emotion/styled';

import NavBar from './NavBar';
import LinkBar from './LinkBar';
import LambdaLogo from '../components/LambdaLogo'
import { PageTitle } from '../globalStyles';

const PageSubtitle = styled.p({
  fontFamily: 'Crimson Pro',
  fontWeight: 100,
  fontSize: '1.2em',
  fontStyle: 'italic',
  marginBottom: 0,
});

const Header = () => (
  <header css={{
    '@media (max-width: 450px)': {
      gridTemplateColumns: '1fr',
    }
  }}>
    <div>
      <LambdaLogo size='1.2rem' />
      <PageSubtitle> Computer Science, Philosophy, and Culinary Arts </PageSubtitle>
      <PageTitle> Dee Yeum </PageTitle>
      <LinkBar />
      <NavBar />
    </div>
    <div
      className="rightCol"
      css={() => css({ textAlign: 'right', margin: 'auto auto 2em' })}>
    </div>
  </header>
)

export default Header