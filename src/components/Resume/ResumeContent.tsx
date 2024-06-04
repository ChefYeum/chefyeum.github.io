import React from 'react'
import Section from './Section'
import SubSection from './SubSection'
import SubSubSection from './SubSubSection'
import TextLink from './TextLink'
import VeryLastSection from './VeryLastSection'
import { Badge } from './Badge'

const ResumeContent = () => (
  <>
    <div>
      <Section title="Education">
        <SubSection title="BSc Cognitive Science (Informatics)" leftSub="University of Edinburgh" rightSub="2018-21 & 2022-23">
          Predicted <em>first-class honours</em> with dissertation on <TextLink href="https://github.com/chefyeum/honours" emph>Software Tool to Analyse Finite Monoid in Category
            Theory </TextLink> powered by {<Badge name='react'/>} {<Badge name='typescript' />} and {<Badge name='rust' />} compiled to {<Badge name='wasm' />}.

          <VeryLastSection title="Relevant Courses">
            <div>
              <em>Math Core</em> - Discrete Mathematics, Linear Algebra, Calculus, Probability and Statistics
            </div>

            <div>
              <em>CS Core</em> - Algorithms, Data Structures, Computer Architecture, Object-Oriented Programming
            </div>

            <div>
              <em>Theory</em> - Theory of Computation, Compilers, Functional Programming, First-order and Modal Logics
            </div>

            <div>
              <em>Data Science</em> - Machine Learning, Speech Processing, Text classification and Information Retrieval
            </div>
          </VeryLastSection>
          <VeryLastSection title="Relevant Courseworks">
            <div>
              Cost-Constrained TSP Solver for Drones modelled in {<Badge name='java' />}
            </div>
            <div>
              <TextLink href="https://github.com/ChefYeum/chippy">
                Computer Security Git CTF with multi-platform poker chip management app
              </TextLink>
              in {<Badge name='flutter' />} and {<Badge name='websocket' />} server in {<Badge name='cpp' />}
            </div>
          </VeryLastSection>
          {/* <VeryLastSection title="Extracurricular Roles"> */}
            {/* <div style={{ marginBottom: '.1em' }}> */}
              {/* <em>Vice President of CompSoc</em> - Elected by 1500 members of the society and raised a budget of £30,000+ from sponsors. */}
              {/* Organised workshops with academics and speakers from the industry. */}
              {/* Also organised competitions including UKIEPC, Google Hash Code, and annual hackathon Hack The Burgh with 200+ participants. */}
            {/* </div> */}
            {/* <div> */}
              {/* <em>Student Representative</em> - Elected by 400+ students to represent them in weekly staff meetings, raising academic issues and suggesting solutions. */}
              {/* Also delivered talks in fresher's induction and other occasions to represent the students. */}
              {/* <li> Organised study session and provided academic support to peers. </li> */}
            {/* </div> */}
          {/* </VeryLastSection> */}
        </SubSection>
      </Section>
      <Section title="Experience">
        <SubSection title="Full-Stack Software Developer">
          <SubSubSection leftSub="Queueco" rightSub="Summer 2022 - Ongoing">
            <li> Worked in a proprietary trading team to build a trading engine management console in {<Badge name='nextjs' />}{<Badge name='react' />}
              , <u>allowing quantitative researchers and traders to control hundreds of engines in a centralised user interface.</u>
            </li>
            <li> Adopted a responsive design with {<Badge name='tailwindcss' />} <u>allowing the traders to control trading engines on mobile devices remotely.</u></li>
            <li> End-to-end and component testing using {<Badge name='cypress' />} and its CI/CD integration on {<Badge name='jenkins' />}. </li>
            <li> Integration of cryptocurrency exchange APIs such as {<Badge name='binance' />}. </li>
            {/* <li> Support for user personalisation</li> */}
          </SubSubSection>
          <SubSubSection leftSub="Viapontica AI" rightSub="Summer 2020">
            <li> Worked with the UK Government to develop software to recognise unsafe incidents in public. </li>
            <li> Designed and deployed scalable and optimized {<Badge name='flask' />} server in {<Badge name='python' />} on {<Badge name='aws' />}.</li>
            <li> Implemented <u>all endpoints to guarantee a <a style={{ fontStyle: 'italic' }}>O(n)</a> running time</u> while also considering the scalability. </li>
            {/* <li> Attended daily standup meetings in an Agile team.</li> */}
          </SubSubSection>
          <SubSubSection leftSub="SymbaSync Ltd" rightSub="Summer 2019">
            <li> Worked on a talent sourcing management software written in {<Badge name='typescript' />} and {<Badge name='mongodb' />}. </li>
            <li> Integrated the software with SAP HR Platform, <u>allowing the company to successfully deliver a pilot to new clients</u> including RBS, OTP Bank, and more. </li>
          </SubSubSection>
        </SubSection>
        <SubSection title="Functional Programming Teaching Assistant" leftSub="University of Edinburgh" rightSub="Sep 2019 - Ongoing">
          <li> Received <u>£15k grant over two academic years</u> to develop a property-based testing software in a custom DSL, written mostly in {<Badge name='haskell' />}. </li>
          <li> Deployed a web platform for markers to grade assignments and provide feedback. </li>
          <li> Allowing 500+ students to
            use automated testing to receive immediate feedback and speed up their learning,
            as well as <u>dramatically reduce the marking time and cost of the teaching team.</u> </li>
          <li> Taught weekly tutorial for over 60 students, introducing logic and various computational models. 20+ hours per week contract while keeping up with full time study. </li>
          {/* <li> Also serving as a marker for formal assessments </li> */}
          <li> Nominated for <u>Edinburgh University Student Association Teaching Award</u> two years in a row.</li>
        </SubSection>
        <SubSection title="Programming Language Research Assistant" leftSub="University of Edinburgh" rightSub="Summer 2021">
          <li>
            Worked on the client-side runtime of <em>Links</em>, a functional language for web programming written in {<Badge name='ocaml' />}.
            Jointly funded by <TextLink href="https://web.inf.ed.ac.uk/lfcs">LFCS</TextLink> and <TextLink href="https://www.ukri.org/">UKRI</TextLink>.
          </li>
          <li>
            CI/CD integrations {<Badge name='githubActions' />} of cross-browser testing using {<Badge name='selenium' />} and {<Badge name='jest' />} in {<Badge name='node' />},
            allowing the research team to have a <u>complete automation of end-to-end testing</u>.
          </li>
          <li>
            Produce benchmark script based on
            <TextLink href="http://www.cs.ox.ac.uk/people/jeremy.gibbons/publications/spigot.pdf">
              Unbounded Spigot Algorithms
            </TextLink>.
          </li>
          <li> Design & implementation of {<Badge name='wasm' />} compiler, which achieves <u>30%-90% faster client-side performance.</u> </li>
        </SubSection>
      </Section>
    </div>
    <div>
      <Section title="Projects/Awards">
        <SubSection title="Personal Website">
          Personal website with CV and blog. Powered by {<Badge name='gatsby' />} with {<Badge name='react' />} and {<Badge name='graphql' />}.
          Custom markdown parser written in {<Badge name='rust' />} and {<Badge name='wasm' />}.
        </SubSection>
        <SubSection
          title="Holdem69"
          href="http://chefyeum.github.io/holdem69/demo"
        >
          Sign-up, payment, and stats for the weekly home tournament that I organise among the students.
          {/* TODO: add the badges */}
          Built with {<Badge name='react' />}{<Badge name='tailwindcss' />}{<Badge name='go' />} and {<Badge name='postgressql' />}.
        </SubSection>
        <SubSection
          title="Hack for Ukraine - 1st"
          title2="Best Infrastructure - 1st"
          // leftSub="Oxford Hack 2022" rightSub="Oxford, UK"
          leftSub="Oxford Hack 2022" rightSub={['react', 'tailwindcss']}
          href="https://github.com/chefyeum/oxford-hack">
        </SubSection>
        <SubSection
          title="Twilio Prize - 1st"
          title2="Marks & Spencer Prize - 2nd"
          leftSub="Hack the Burgh VII" rightSub={['nextjs', 'tailwindcss']}
          href="https://github.com/v-raja/htb-8">
        </SubSection>
        <SubSection title="Overall Prize - 1st"
          leftSub="StacsHack 2020" rightSub={['flutter', 'dart']}
          href="https://github.com/lollobaldo/stacs-hack-2020">
          {/* Auto-recycling trash can designed to work with a crowdsourcing mobile application.
          Particularly responsible for the app development using <em>Flutter</em> in <em>Dart</em>. */}
        </SubSection>
        <SubSection title="SkyScanner Prize - 2nd"
          leftSub="Hack the Burgh VI" rightSub={['react', 'node']}
          href="https://github.com/lollobaldo/kitofly" >
          {/* Web app to suggest holiday destinations while minimizing the carbon emission.
          Worked with <em>React</em> frontend and integrating Skyscanner API for the <em>Node</em> server. */}
        </SubSection>
        <SubSection title="Wharton School Prize - 2nd"
          leftSub="PennApps XX" rightSub={['java', 'android', 'firebase']}
          href="https://github.com/ChefYeum/safe">
          {/* Crowdsourcing Android app to notify active terrorism in emergency.
          Worked on deploying the backend server on <em>Google Firebase</em> and dealing with external APIs from MapBox to display the map and Twilio to send emergency text. */}
        </SubSection>
        <SubSection title="Code Golf Challenge - 1st"
          leftSub="Hack the Burgh V" rightSub={['haskell']}
          href="https://github.com/ChefYeum/TypeRacer/tree/master/CodeGolfChallenge">
          {/* Winner of <TextLink href=""> Code Golf Challenge </TextLink> in <em>Haskell</em>. */}
        </SubSection>
        <SubSection title="JPMorgan Prize - 1st"
          leftSub="StacsHack 2019" rightSub={['node', 'googlecloud']}
          href="https://github.com/DMeechan/git-commit-hackathon" >
          {/* Web app to calculate feedback rating from verbal recording of the user to avoid human-bias.
          Mainly worked on integrating <em>IBM Watson</em> and <em>Google Cloud</em> with <em>Node</em> backend. */}
        </SubSection>
        <SubSection title="Other hackathons">
          Invited with a travel grant, 3rd prize or below.
          <li>Hello World Hack 2020, Edinburgh.</li>
          <li>ICHack 2019, Imperial College London.</li>
          <li>Junction 2020, Aalto University, Finland.</li>
          <li>Facebook Hack 2020, Facebook London.</li>
          <li>Digital Education Hack, Edinburgh.</li>
          <li>Hack Cambridge 2020, Cambridge.</li>
        </SubSection>
        <SubSection title="Open-source contribution">
          Documentation PRs in: Hspec, GatsbyJS, Google OR-Tools, Firebase, PLFA, jsprit and more.
        </SubSection>
        <SubSection title="Other awards">
          <li> Saltire Golden Award by the Scottish Government for 220 hours volunteering. Taught imperative programming in several state schools under Edinburgh Council. </li>
          <li> 12 Kyu certified in Go by Korea Baduk Association. </li>
          <li> 2 years winner of the Natural Language Processing Challenge hosted by G-Research. </li>
        </SubSection>
      </Section>
    </div>
  </>
)

export default ResumeContent