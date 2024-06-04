import React from 'react'
import styled from '@emotion/styled'

const SectionWrapper = styled.div({
  marginBottom: '.3em'
})

const Section = (params: { title: string, children: React.ReactNode}) => (
  <SectionWrapper>
    <h1>{params.title}</h1>
    {params.children}
  </SectionWrapper>
)

export default Section