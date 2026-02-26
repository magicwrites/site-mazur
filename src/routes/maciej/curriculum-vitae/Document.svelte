<script>
  import Sheet from '$components/Sheet.svelte';
  import Subheader from './Document.Subheader.svelte';
  import Skills from './Document.Skills.svelte';
  import Role from './Document.Role.svelte';

  const header = 'Curriculum Vitae';
</script>

<section class="m-8 my-24 xl:m-24 print:m-0 font-spectral text-black">
  <Sheet {header} footer="1 / 4">
    <div class="flex flex-col gap-12">
      <header class="font-inter flex flex-col gap-0.5">
        <h1 class="text-3xl font-bold uppercase -ml-[0.5px]">Maciej Mazur</h1>
        <h2 class="">Frontend developer, architect</h2>
      </header>

      <section class="flex flex-col gap-3">
        <h3 class="text-xl font-bold font-inter">Experience</h3>

        <div class="flex flex-col gap-5">
          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2">
              <Subheader tag="h4" about="Remote for Gdańsk, Poland">Atlassian</Subheader>
            </div>

            <div class="xl:col-span-5 print:col-span-5 flex flex-col gap-3">
              <Subheader tag="h5" about="2023 - now">Senior frontend developer</Subheader>

              <Role>
                <p>
                  As a data-center team member I am responsible for the accessibility, security and
                  compliance aspects for the on-premise Jira variant. I modernise the application
                  and ensure smooth operations for our enterprise customers while accelerating the
                  company mission of evolution towards the cloud setup. I leverage AI tools to power
                  up my work.
                </p>
              </Role>
              <Skills>
                java server pages, on-premise software, javascript, typescript, jQuery, backboneJS,
                various template engines, react, vue, multiple long living release branches,
                backporting, accessibility, security, AI powered work
              </Skills>
            </div>
          </article>

          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2">
              <Subheader tag="h4" about="Remotely for Malta">Casumo</Subheader>
            </div>

            <div class="xl:col-span-5 print:col-span-5 flex flex-col gap-3">
              <Subheader tag="h5" about="2022 - 2023">Frontend architect</Subheader>

              <Role>
                <p>
                  Took a central position in a modernisation project aimed at introduction of a
                  micro frontends architecture. Engaged in the prototyping effort and technical
                  debates. Held direct leadership of a core platform team while simultaneously
                  trained and guided five separate domain teams.
                </p>
              </Role>
              <Skills>
                micro services, leadership, mentorship, team building, prototyping, roadmapping,
                svelte, SSR, SEO, react, web components, UI library
              </Skills>
            </div>
          </article>

          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2" />

            <div class="xl:col-span-5 print:col-span-5 flex flex-col gap-3">
              <Subheader tag="h5" about="2018 - 2022">Senior frontend developer</Subheader>

              <Role>
                <p>
                  Member of a team responsible for compliance and security concerns. KYC, AML and
                  player management functionalities mostly on the backoffice system. Pushing
                  migration of knockoutJS based tech stack to the modern react counterpart. Drove
                  and delivered an initiative to overhaul the entirety of the KYC feature.
                </p>
              </Role>
              <Skills>
                javascript, typescript, flowJS, knockoutJS, react, integrations for payments, player
                identification and other 3rd party systems
              </Skills>
            </div>
          </article>
        </div>
      </section>
    </div>
  </Sheet>

  <div class="break-after-page py-16 print:py-0" />

  <Sheet {header} footer="2 / 4">
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-3">
        <div class="flex flex-col gap-5">
          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2">
              <Subheader tag="h4" about="On site in Gliwice, Poland">Future-Processing</Subheader>
            </div>

            <div class="xl:col-span-5 print:col-span-5 flex flex-col gap-3">
              <Subheader tag="h5" about="2016 - 2018">Senior frontend developer</Subheader>

              <Role>
                <p>
                  Member of a team building a government service for a Danish tech giant. Afterwards
                  a front-end specialist in a startup team tasked with migration of an on-premises
                  logistics management product to its next generation SaaS version.
                </p>
              </Role>
              <Skills>
                angular 1.6, angular 2, angular material, redux, sagas, mentorship, SaaS
              </Skills>
            </div>
          </article>

          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2" />

            <div class="xl:col-span-5 print:col-span-5 flex flex-col gap-3">
              <Subheader tag="h5" about="2011 - 2016">Frontend developer</Subheader>

              <Role>
                <p>
                  Over the years a member of multiple agile teams. Working over health, media and
                  government applications. Initially filling the role of a UI specialist for the
                  .NET solutions but later joined more frontend refined SPA projects, nodeJS REST
                  services or even cross-platform electronJS development.
                </p>
              </Role>
              <Skills>
                angular 1.6, .NET, MVC, CQRS, REST, jQuery, backboneJS, micro services, no SQL
                databases, nodeJS, TTD, BDD, agile teams, electronJS, git, svn, continuous
                integration, continuous delivery
              </Skills>
            </div>
          </article>

          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2">
              <Subheader tag="h4" about="On site in Olkusz, Poland">Goodpoint</Subheader>
            </div>

            <div class="xl:col-span-5 print:col-span-5 flex flex-col gap-3">
              <Subheader tag="h5" about="2010 - 2011">Web developer</Subheader>

              <Role>
                <p>
                  Rapid design and delivery of websites for small and medium sized companies. Client
                  contact, offer negotiations and IT support. First experience with professional
                  software development.
                </p>
              </Role>
              <Skills>HTML, CSS, PHP, MVC, CakePHP, IT and technical support</Skills>
            </div>
          </article>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-xl font-bold font-inter">Core competencies</h3>

        <p>
          <strong>Over 15 years of experience in the development of modern web applications</strong
          >, along with significant experience with high level front-end system design and setup.
        </p>

        <p>
          <strong>Over 15 years of experience in javascript, CSS and HTML usage</strong>. Nowadays
          frequently powered by typescript and AI tooling for rapid code analysis, mapping and
          transformations.
        </p>

        <p>
          <strong>Vast experience with CSS solutions</strong>. I have used preprocessors such as
          SASS or LESS and methodologies like BEM, SMACSS or atomic design. I have relied on
          material design, bootstrap or tailwindcss.
        </p>
      </section>
    </div>
  </Sheet>

  <div class="break-after-page py-16 print:py-0" />

  <Sheet {header} footer="3 / 4">
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-3">
        <p>
          <strong>Vast experience with modern javascript libraries and tooling</strong> such as vue,
          react, svelte or original angular 1.6. I am familiar with state management systems such as
          redux, redux sagas, redux toolkit or vuex and principles behind those. I can also be a bit
          nostalgic about the older libraries such as knockoutJS or backboneJS.
        </p>
        <p>
          <strong>Experience with design systems</strong>. I have relied on external UI concepts
          such as material design, bootstrap and others, but I have also cooperated with designers
          to implement a bespoke system. I can reason about usability, extend existing patterns and
          adhere to design principles.
        </p>
        <p>
          <strong>Experience with build level tools</strong>. I have engaged in the setup,
          configuration and optimisation of the older (grunt, gulp) as well as the more recent
          (webpack, vite, rollbarJS, parcelJS) generation of bundlers.
        </p>
        <p>
          <strong>Experience with testing and quality control tools</strong>. I consider unit test
          and storybook as foundational elements of modern UI development and use them extensively.
          I have some limited history of doing test driven development and writing end to end tests
          to cover critical user journeys.
        </p>
        <p>
          <strong>Experienced with multiple release strategies</strong>, including applications
          hosted in diverse cloud environments with continuous integration practices, as well as
          on-premise systems requiring maintenance and backporting across multiple release branches.
        </p>
        <p>
          <strong>Experience with technical processes</strong>. I am a practitioner of semantic
          versioning, user of git version control and npm package system. CI/CD, slack, github and
          discussions during a code review are not alien concepts to me.
        </p>
        <p>
          <strong>Experience with management processes</strong>. I have been operating in loose and
          strict agile teams, in scrum and kanban setups. I can iterate in a self-encapsulated
          sprint, but I also believe in the power of long-term planning and roadmaps. I have strong
          self-organizational, analytical and communication skills to deliver those.
        </p>
        <p>
          <strong>Some experience with not-so-front-end development</strong>. I have a history of
          building nodeJS services, experimentation with noSQL databases such as couchDB or firebase
          and some rudimentary experience with linux systems in order to set up nginx hosting. I did
          some heroku. I can reason about basic cloud services too.
        </p>
        <p>
          <strong>An aesthetics and usability oriented mindset</strong>. I enjoy planning, reasoning
          about, implementing and refining user interfaces. I am happy to take ownership of parts of
          the application and deliver a quality solution for our end-user needs.
        </p>
      </section>
    </div>
  </Sheet>

  <div class="break-after-page py-16 print:py-0" />

  <Sheet {header} footer="4 / 4">
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-6">
        <h3 class="text-xl font-bold font-inter">Additional information</h3>

        <Subheader tag="div" about="Date of birth">July 15, 1988</Subheader>
        <Subheader tag="div" about="Residence">Gliwice, Poland</Subheader>
        <Subheader tag="div" about="Timezone">Central European Time</Subheader>
        <Subheader tag="div" about="Contact e-mail">maciej@mazur.site</Subheader>
        <Subheader tag="div" about="Personal website">https://maciej.mazur.site</Subheader>

        <aside class="text-right pt-64 font-bold flex flex-col gap-8 opacity-10">
          <div class="text-8xl">Thank you</div>
          <div class="text-2xl">for your time and consideration.</div>
        </aside>
      </section>
    </div>
  </Sheet>
</section>
