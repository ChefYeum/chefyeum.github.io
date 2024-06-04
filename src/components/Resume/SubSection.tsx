import React from 'react'
import styled from '@emotion/styled'

import TextLink from './TextLink'
import { SubSubSection } from './SubSubSection'
import { BadgeName } from './Badge'

const SubSectionWrapper = styled.div({
  paddingBottom: '0.5em',
  listStylePosition: 'inside'
})

export const RightAlign = styled.div({
  float: 'right',
})

export const SubSection = (params: {
  boldTitle?: string, title: string, title2?: string,
  leftSub?: string, rightSub?: string | BadgeName[],
  children?: React.ReactNode, href?: string }) => {
  const { title, boldTitle, title2,
          leftSub, rightSub, href,
          children } = params
  return (
    <SubSectionWrapper>
      <TextLink href={href ?? ""}>
        <h2>
          {boldTitle ? <b>{boldTitle + ' - '}</b> : null}
          {title}
          <br />
          {title2}
        </h2>
      </TextLink>
      <SubSubSection leftSub={leftSub ?? ""} rightSub={rightSub ?? ""}>
        {children}
      </SubSubSection>
    </SubSectionWrapper >
  )
}

export default SubSection