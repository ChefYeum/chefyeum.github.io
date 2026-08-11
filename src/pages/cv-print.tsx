import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { globalStyles, PageTitle } from '../globalStyles';
import ResumeContent from "../components/Resume/ResumeContent";
import LambdaLogo from '../components/LambdaLogo';
import ResumeLogoBar from '../components/Resume/ResumeLogoBar';

const CVPrintPage = () => {
  useEffect(() => {
    document.title = 'ChefYeum - CV (Print)';
  }, []);

  return (
    <>
      <Global styles={globalStyles} />
      <PageTitle>
        <LambdaLogo size='0.8em' print />
        Dee Yeum
      </PageTitle> 
      <ResumeLogoBar /> 

      <div css={{marginTop: '.3em'}}>
        Software engineering generalist with 3 years' experience in finance and an academic background in Programming Language. Currently interested in Rust, DSL design, cryptocurrency trading, WebAssembly, and recently DeFi.
      </div>

      <div css={{
        '@pages': {
          margin: '6mm 10mm 6mm 10mm'
        }
      }}>
        <main css={{
          '@media print': {
            display: 'grid',
            gridTemplateColumns: '3.4fr 1.6fr',
            gridTemplateRows: '2fr',
            gap: '1.5em'
          },
        }}>
          <ResumeContent />
        </main>
      </div>
    </>
  );
};

export default CVPrintPage;
