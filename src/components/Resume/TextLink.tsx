import React from 'react'
import styled from '@emotion/styled'

let linkIcon = <sup style={{
  textDecoration: "initial",
  display: "inline",
  fontSize: ".5em"
}}>
  🔗
</sup>

let LinkWithIcon = styled.a({
  textDecoration: "initial",
  '*' : {
    display: 'inline-block'
  }
})

export const TextLink = (params: { href: string, children: React.ReactNode, emph?: boolean }) => { 
  const { href, children, emph } = params
  return (
    <>{  
      href ?
      <LinkWithIcon href={href}>
        {' '}
        <div css={{
          display: 'inline',
          fontStyle: emph ? 'italic' : 'normal',
          marginRight: 2,
        }}>
        {children}
        </div>
        {linkIcon}
        {' '}
      </LinkWithIcon>
      : children
    }</>
  )
}

export default TextLink