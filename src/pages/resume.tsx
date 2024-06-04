import React from "react"
import { HeadFC, graphql } from "gatsby"
import Template from "../Template"

import ResumeContent from "../components/Resume/ResumeContent"

const ResumePage = (res: {data: {markdownRemark: {html: string}}}) => (
  <Template>
    <main css={{
      // TODO: abtract this out to index.tsx?
      '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr'
      },
      display: 'grid',
      gridTemplateColumns: '3.4fr 1.6fr',
      gridTemplateRows: '2fr',
      gap: '1.5em'
    }}>
      {/* <div dangerouslySetInnerHTML={{ __html: res.data.markdownRemark.html }} /> */}
      <ResumeContent />
    </main>
  </Template>
)

// export const pageQuery = graphql`
//   query {
//     markdownRemark(frontmatter: {name: {eq: "resume"}}) {
//       html
//     }
//   }
// `

export default ResumePage 

export const Head: HeadFC = () => <title>ChefYeum - Resume</title>