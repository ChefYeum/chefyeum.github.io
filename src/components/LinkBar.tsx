import styled from '@emotion/styled'
import React from 'react'

const LogoImg = styled.img({
  filter: 'invert(1)',
  padding: '.2em .2em .2em .2em',
  ':hover': {
    filter: 'invert(0.5)'
  }
})

const LogoLink = (props: { logo: string, link: string }) => (
  <a href={props.link}>
    <LogoImg src={props.logo} width={16} />
  </a>
)

const LinkBar = () => (
  <>
    <LogoLink logo="https://simpleicons.org/icons/github.svg" link="https://github.com/chefyeum" />
    <LogoLink logo="https://akveo.github.io/eva-icons/outline/svg/linkedin-outline.svg" link="https://linkedin.com/in/chefyeum" />
    <LogoLink logo="https://simpleicons.org/icons/instagram.svg" link="https://instagram.com/chefyeum" />
  </>
)

export default LinkBar