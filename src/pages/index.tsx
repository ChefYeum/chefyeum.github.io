import React from 'react'
import { graphql, HeadFC } from "gatsby"
import Template from "../Template"

const IndexPage = (res: { data: { markdownRemark: { html: string } } }) => (
  <Template>
    <main css={{
      // Home Page intro text align:
      textAlign: 'right'
    }}>
      <div dangerouslySetInnerHTML={{ __html: res.data.markdownRemark.html }} />
    </main>
  </Template>
)

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: {name: {eq: "intro"}}) {
      html
    }
  }
`

export default IndexPage

export const Head: HeadFC = () => <title>ChefYeum - Welcome</title>