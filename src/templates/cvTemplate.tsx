import React from 'react'
import Section from '../components/Resume/Section'
import SubSection from '../components/Resume/SubSection'
import SubSubSection from '../components/Resume/SubSubSection'
import TextLink from '../components/Resume/TextLink'
import VeryLastSection from '../components/Resume/VeryLastSection'
import { Badge } from '../components/Resume/Badge'
import { CVContents } from '../types/CVTypes'
import Template from '../Template'
import { HeadFC } from 'gatsby'

const CVTemplate = ({ pageContext }: { pageContext: { cvContents: CVContents } }) => {
  const { cvContents } = pageContext;
  console.log(cvContents);
  return (<Template>

    <main css={{
      // TODO: abtract this out to index.tsx?
      '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr'
      },
      display: 'grid',
      gridTemplateColumns: '3.4fr 1.45fr',
      gridTemplateRows: '2fr',
      gap: '1.2em'
    }}>
      <div>
        <Section title="Experience">
          {cvContents.experience.map((experience, index) => (
            <SubSection key={index} title={experience.title}>
              {experience.companies.map((company, companyIndex) => (
                <SubSubSection key={companyIndex} leftSub={company.company} rightSub={company.period}>
                  {company.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      {detail.description}{' '}
                      {detail.technologies && detail.technologies.map((tech, techIndex) => <Badge key={techIndex} name={tech} />)}
                    </li>
                  ))}
                </SubSubSection>
              ))}
            </SubSection>
          ))}
        </Section>

        {/* Render Education Section */}
        {cvContents.education && <Section title="Education">
          {cvContents.education.map((education, index) => (
            <SubSection key={index} title={education.title} leftSub={education.organization} rightSub={education.period}>
              {education.details.map((detail, detailIndex) => (
                <div key={detailIndex}>
                  {detail.description}
                  {detail.courses &&
                    Object.entries(detail.courses).map(([category, courses], courseIndex) => (
                      <div key={courseIndex}>
                        <em>{category}</em>: {courses.join(', ')}
                      </div>
                    ))}
                  {detail.courseworks &&
                    detail.courseworks.map((coursework, courseworkIndex) => (
                      <div key={courseworkIndex}>{coursework}</div>
                    ))}
                </div>
              ))}
            </SubSection>
          ))}
        </Section>}

        {cvContents.projects_and_awards && <Section title="Projects/Awards">
          {cvContents.projects_and_awards.map((project, index) => (
            <SubSection
              key={index}
              title={project.title}
            >
              {/* TODO: {project.description} */}
              {project.details &&
                project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail.description}</li>
                ))}
            </SubSection>
          ))}
        </Section>}

        {/* <Section title="Open Source Contributions">
        {cvContents.open_source_contributions.map((contribution, index) => (
          <li key={index}>{contribution.description}</li>
        ))}
      </Section> */}
      </div>
    </main>
  </Template>);
};

export default CVTemplate;

export const Head: HeadFC = () => <title>ChefYeum - Curriculum Vitae</title>
