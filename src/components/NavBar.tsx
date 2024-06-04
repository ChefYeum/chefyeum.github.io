import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'


const NavButton = ({buttonText, buttonLink}: {buttonText: string, buttonLink: string}) => (
  <Link css={{
    margin: '0.25em',
    textDecoration: 'none',
    color: 'inherit',
  }}
    // sx={{
    //   fontSize: 1
    // }}
    to={buttonLink}
  >
    {buttonText}
  </Link>
)

const ResponsitveFlexboxButOk = styled.ul`
  display: flex;
  list-style: none;
  padding-inline-start: 0em;
  margin: .5em auto .5em auto;

  flex-direction: column;
  @media (max-width: 450px) {
    flex-direction: row;
  }
`

const NavBar = () => (
  <ResponsitveFlexboxButOk>
    <NavButton buttonText='Home'   buttonLink='/'/>
    <NavButton buttonText='Résumé' buttonLink={`/resume`}/>
    <NavButton buttonText='Blog' buttonLink={`/blog`}/>
  </ResponsitveFlexboxButOk>
)

export default NavBar