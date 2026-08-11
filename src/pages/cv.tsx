import React, { useEffect } from "react";
import Template from "../Template";
import ResumeContent from "../components/Resume/ResumeContent";

const ResumePage = () => {
  useEffect(() => {
    document.title = 'ChefYeum - Curriculum Vitae';
  }, []);

  return (
    <Template>
      <main css={{
        '@media (max-width: 900px)': {
          gridTemplateColumns: '1fr'
        },
        display: 'grid',
        gridTemplateColumns: '3.4fr 1.45fr',
        gridTemplateRows: '2fr',
        gap: '1.2em'
      }}>
        <ResumeContent />
      </main>
    </Template>
  );
};

export default ResumePage;
