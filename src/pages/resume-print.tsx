import React from 'react'
import { Global } from '@emotion/react'
import { globalStyles, PageTitle } from '../globalStyles'
import ResumeContent from "../components/Resume/ResumeContent"
import LambdaLogo from '../components/LambdaLogo'
import ResumeLogoBar from '../components/Resume/ResumeLogoBar'

export default () => (
  <>
    <Global styles={globalStyles} />
    <PageTitle>
      <LambdaLogo size='0.8em' print />
      Dee Yeum
    </PageTitle>
    <ResumeLogoBar />
    <div css={{
      '@pages': {
        margin: '6mm 10mm 6mm 10mm'
      }
    }}>
      <main css={{
        '@media print': {
          display: 'grid',
          gridTemplateColumns: '3.25fr 1.75fr',
          gridTemplateRows: '2fr',
          gap: '1.5em'
        },
      }}>
        <ResumeContent />
      </main>
    </div>
  </>
)