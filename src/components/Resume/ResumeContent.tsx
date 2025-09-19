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
      <Section title="Experience">
        <SubSection title="Software Engineer">
          <SubSubSection leftSub="Radom Pay" rightSub="Feb 2025 - Present">
            <li>Launched crypto conversion feature enabling $500K+ in daily payments, typically into stablecoins.</li>
            <li>Architected backend with asynchronous <Badge name='Rust' />, <Badge name='PostgreSQL' />, and <Badge name='Redis' /> for high-performance processing and caching.</li>
            <li>Synthesized real-time RFQs from multiple CEX/DEX APIs via WebSocket, acting as market maker to deliver competitive pricing and profit margin.</li>
            <li>Built seamless UX with custom hooks in {<Badge name='React' />} + {<Badge name='TypeScript' />} frontend.</li>
          </SubSubSection>
        </SubSection>
        <SubSection title="Quantitative Developer">
          <SubSubSection leftSub="Queueco" rightSub="Summer 2022 & July 2023 - Dec 2024">
            <li> Developed a high-frequency trading engine for cryptocurrency market making in <Badge name='Java' /></li>
            <li> Solely built and maintained a trading engine management console in {<Badge name='Next.JS' />}, {<Badge name='React' />}, and {<Badge name='TailwindCSS' />} collaborating with traders to deliver PnL-enhancing features.</li>
            <li> Provided high performance connectivity in Java to 30+ exchanges with proprietary HTTP/WebSocket clients and parser. </li>
            <li> Integrated binary-encoded market data to deliver a low latency trading engine in a colocated trading machine</li>
            {/* , <u>allowing researchers and traders to manage hundreds of engines in a centralised system and UI.</u></li> */}
            {/* <li> Adopted a responsive design with {<Badge name='TailwindCSS' />} <u>allowing the traders to control trading engines on mobile devices remotely.</u></li> */}
            {/* <li> End-to-end and component testing using {<Badge name='cypress' />} and its CI/CD integration on {<Badge name='jenkins' />}. </li> */}
          </SubSubSection>
        </SubSection>
        <SubSection title="Fixed-term & Contracting Software Engineer">
          <SubSubSection leftSub="Viapontica AI" rightSub="Summer 2020">
            <li> Worked with the UK Government to develop software to recognise incidents in public. </li>
            {/* <li> Designed and deployed scalable and optimised {<Badge name='Flask' />} server in {<Badge name='Python' />} on AWS.</li> */}
            <li> Designed and deployed a scalable {<Badge name='Flask' />} server in {<Badge name='Python' />} on AWS, utilising caching and compound indexing to <u>reduce end-to-end latency benchmark latency by 32-72%.</u></li>
            {/* <li> Implemented <u>all endpoints to guarantee a <a style={{ fontStyle: 'italic' }}>O(n)</a> running time</u> while also considering the scalability. </li> */}
          </SubSubSection>
          <SubSubSection leftSub="SymbaSync Ltd" rightSub="Summer 2019">
            <li> Developed features on a talent sourcing management software written in {<Badge name='TypeScript' />} and {<Badge name='MongoDB' />}. </li>
            <li> Integrated SAP HR Platform to deliver a pilot to new clients to large banks.</li>
          </SubSubSection>
        </SubSection>
        <SubSection title="Functional Programming Teaching & Research Assistant" leftSub="University of Edinburgh" rightSub="Sep 2019 - June 2023">
          <li> Received <u>£20k+ grant over 3 academic years</u> to develop a property-based testing software in a custom DSL written in {<Badge name='Haskell' />}.</li>
          <li> Deployed a web platform for markers to grade assignments and provide feedback to 500+ students per term, automating the human marking time and cost of the teaching team. </li>
          <li> Taught weekly tutorial for over 60 students, introducing logic and various computational models. 20+ hours per week contract while keeping up with full time study. </li>
          <li> Nominated for <u>Edinburgh University Student Association Teaching Award</u> two years in a row.</li>
          <li>
            Worked on the client-side runtime of <em>Links</em>, a functional language for web programming written in {<Badge name='OCaml' />}.
            Jointly funded by <TextLink href="https://web.inf.ed.ac.uk/lfcs">LFCS</TextLink> and <TextLink href="https://www.ukri.org/">UKRI</TextLink>.
          </li>
          {/* <li> {<Badge name='WebAssembly' />} compiler with a significant performance boost. </li> */}
          {/* <li> */}
          {/* Produced benchmarks based on various mathematical models to test the performance of the language runtimes and its CI/CD integrations on {<Badge name='GitHub Actions' />}. */}
          {/* <TextLink href="http://www.cs.ox.ac.uk/people/jeremy.gibbons/publications/spigot.pdf">
              Unbounded Spigot Algorithms
            </TextLink>. */}
          {/* </li> */}
        </SubSection>
      </Section>
      <Section title="Education">
        <SubSection title="BSc Cognitive Science (Informatics)" leftSub="University of Edinburgh" rightSub="2018-21 & 2022-23">
          Achieved <em>first-class</em> with dissertation on <TextLink href="https://github.com/chefyeum/honours" emph>Software Tool to Analyse Finite Monoid in Category Theory</TextLink>, where I built an app to visualise and verify properties of a category in {<Badge name='Rust' />} targeting {<Badge name='WebAssembly' />} on a {<Badge name='React' />} web app. This was then cross verified via <TextLink href="https://github.com/Z3Prover/z3">Z3 Theorem Prover</TextLink> by Microsoft

          <VeryLastSection title="Relevant Courses">
            <div>
              <em>Math Core</em> (Discrete Mathematics, Linear Algebra, Calculus, Probability and Statistics)
            </div>
            <div>
              <em>CS Core</em> (Algorithms, Data Structures, Computer Architecture, Object-Oriented Programming)
            </div>
            <div>
              <em>Theory</em> (Theory of Computation, Compilers, Functional Programming, First-order and Modal Logics)
            </div>
            <div>
              <em>Data Science</em> (Machine Learning, Speech Processing, Search Engine and Information Retrieval)
            </div>
          </VeryLastSection>
          <VeryLastSection title="Relevant Courseworks">
            <div>
              Cost-Constrained TSP Solver for Drones modelled in {<Badge name='Java' />}
            </div>
            <div>
              <TextLink href="https://github.com/ChefYeum/chippy">
                Computer Security CTF with multi-platform poker chip management app
              </TextLink>
              in {<Badge name='Flutter' />} and {<Badge name='TypeScript' />} server in {<Badge name='C++' />}
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
    </div>
    <div>
      <Section title="Projects/Awards">
        <div css={{
          fontSize: '90%'
        }}>
          <SubSection title="Personal Website">
            Personal website with CV and blog. Powered by {<Badge name='Gatsby' />} with {<Badge name='React' />} and {<Badge name='GraphQL' />}.
            Supports a custom markup language written in {<Badge name='Rust' />} which is compiled on the client-side by {<Badge name='WebAssembly' />}.
          </SubSection>
          <SubSection
            title="Holdem69"
            href="https://holdem69.herokuapp.com/"
          >
            Sign-up, payment, and stats for the weekly home tournament that I organise among the students. Built with {<Badge name='React' />}, {<Badge name='TailwindCSS' />}, {<Badge name='Go' />}, and {<Badge name='PostgreSQL' />}.
          </SubSection>
          <SubSection
            title="Hack for Ukraine - 1st"
            title2="Best Infrastructure - 1st"
            // leftSub="Oxford Hack 2022" rightSub="Oxford, UK"
            leftSub="Oxford Hack 2022" rightSub={['React', 'TailwindCSS']}
            href="https://github.com/chefyeum/oxford-hack">
          </SubSection>
          <SubSection
            title="Twilio Prize - 1st"
            title2="Marks & Spencer Prize - 2nd"
            leftSub="Hack the Burgh VII" rightSub={['Next.JS', 'TailwindCSS']}
            href="https://github.com/v-raja/htb-8">
          </SubSection>
          <SubSection title="Overall Prize - 1st"
            leftSub="StacsHack 2020" rightSub={['Flutter', 'Dart']}
            href="https://github.com/lollobaldo/stacs-hack-2020">
            {/* Auto-recycling trash can designed to work with a crowdsourcing mobile application.
          Particularly responsible for the app development using <em>Flutter</em> in <em>Dart</em>. */}
          </SubSection>
          <SubSection title="SkyScanner Prize - 2nd"
            leftSub="Hack the Burgh VI" rightSub={['React', 'Node']}
            href="https://github.com/lollobaldo/kitofly" >
            {/* Web app to suggest holiday destinations while minimizing the carbon emission.
          Worked with <em>React</em> frontend and integrating Skyscanner API for the <em>Node</em> server. */}
          </SubSection>
          <SubSection title="Wharton School Prize - 2nd"
            leftSub="PennApps XX" rightSub={['Java', 'Android', 'Firebase']}
            href="https://github.com/ChefYeum/safe">
            {/* Crowdsourcing Android app to notify active terrorism in emergency.
          Worked on deploying the backend server on <em>Google Firebase</em> and dealing with external APIs from MapBox to display the map and Twilio to send emergency text. */}
          </SubSection>
          <SubSection title="Code Golf Challenge - 1st"
            leftSub="Hack the Burgh V" rightSub={['Haskell']}
            href="https://github.com/ChefYeum/TypeRacer/tree/master/CodeGolfChallenge">
            {/* Winner of <TextLink href=""> Code Golf Challenge </TextLink> in <em>Haskell</em>. */}
          </SubSection>
          <SubSection title="JPMorgan Prize - 1st"
            leftSub="StacsHack 2019" rightSub={['Node', 'Google Cloud']}
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
            <li> Saltire Golden Award by the Scottish Government (2015-17) for 220 hours volunteering. Taught imperative programming in several schools under Edinburgh Council. </li>
            <li> 12 Kyu certified in Go by Korea Baduk Association. </li>
            <li> 2 years winner of the Natural Language Processing Challenge hosted by G-Research. </li>
          </SubSection>
        </div>
      </Section>
    </div>
  </>
)

export default ResumeContent