import React from "react"
import { HeadFC } from "gatsby"
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
      gap: '1.2em'
    }}>
      {/* <div dangerouslySetInnerHTML={{ __html: res.data.markdownRemark.html }} /> */}
      <ResumeContent />
    </main>
  </Template>
)

export default ResumePage 

export const Head: HeadFC = () => <title>ChefYeum - Curriculum Vitae</title>