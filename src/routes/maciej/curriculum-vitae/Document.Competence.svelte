<script lang="ts">
  import { all as skills } from '$lib/skills';
</script>

<section class="flex flex-col gap-8">
  <div class="flex flex-col gap-8">
    <header>
      <h3 class="font-medium">Core competencies</h3>
      <div class="text-xs">Expect from me:</div>
    </header>

    <section class="flex flex-col gap-4 text-xs">
      <p>
        <span class="font-medium"
          >Over 10 years of experience in the development of modern web applications</span
        >, along with some experience in high level front-end system design and setup.
      </p>

      <p>
        <span class="font-medium"
          >Over 10 years of experience in {skills.JS}, {skills.CSS} and {skills.HTML} usage</span
        >
        along with some recent {skills.TS} exposure.
      </p>
      <p>
        <span class="font-medium">Vast experience with {skills.CSS} solutions.</span> I have used
        preprocessors such as {skills.SASS} or {skills.LESS} and methodologies like {skills.BEM}, {skills.SMACSS}
        or {skills.ATOMIC_DESIGN}. I have relied on {skills.MATERIAL_DESIGN}, {skills.BOOTSTRAP} or {skills.TAILWINDCSS}.
      </p>
      <p>
        <span class="font-medium"
          >Vast experience with modern {skills.JS} libraries and tooling</span
        >
        such as {skills.VUE}, {skills.REACT}, {skills.SVELTE} or original {skills.ANGULAR}. I am
        familiar with state management systems such as {skills.REDUX}, {skills.REDUX_SAGAS}, {skills.REDUX_TOOLKIT}
        or {skills.VUEX} and principles behind those. I can also be a bit nostalgic about the older libraries
        such as {skills.KNOCKOUT} or {skills.BACKBONE}.
      </p>
      <p>
        <span class="font-medium">Experience with design systems.</span> I have relied on external
        UI concepts such as {skills.MATERIAL_DESIGN}, {skills.BOOTSTRAP} and others, but I have also
        cooperated with designers to implement a bespoke system. I can reason about usability, extend
        existing patterns and adhere to design principles.
      </p>
      <p>
        <span class="font-medium">Experience with build level tools.</span> I have engaged in the
        setup, configuration and optimisation of the older ({skills.GRUNT}, {skills.GULP}) as well
        as the more recent ({skills.WEBPACK}, {skills.VITE}, {skills.ROLLBAR}, {skills.PARCEL})
        generation of bundlers.
      </p>
      <p>
        <span class="font-medium">Experience with testing and quality control tools.</span> I
        consider
        {skills.UNIT_TEST} and {skills.STORYBOOK} as foundational elements of modern UI development and
        use them extensively. I have some limited history of doing test driven development and writing
        end to end tests to cover critical user journeys.
      </p>
      <p>
        <span class="font-medium">Experience with technical processes.</span> I am a practitioner of
        semantic versioning, user of {skills.GIT} version control and npm package system. {skills.CI_CD},
        slack, github and discussions during a code review are not alien concepts to me.
      </p>
      <p>
        <span class="font-medium">Experience with management processes.</span> I have been operating
        in loose and strict agile teams, in scrum and kanban setups. I can iterate in a self-encapsulated
        sprint, but I also believe in the power of long-term planning and roadmaps. I have strong self-organizational,
        analytical and communication skills to deliver those.
      </p>
      <p>
        <span class="font-medium">Some experience with not-so-front-end development.</span> I have a
        history of building {skills.NODE} services, experimentation with noSQL databases such as {skills.COUCH_DB}
        or {skills.FIREBASE} and some rudimentary experience with linux systems in order to setup {skills.NGINX}
        hosting. I did some heroku. I can reason about basic cloud services too.
      </p>
      <p>
        <span class="font-medium">An aesthetics and usability oriented mindset.</span> I enjoy planning,
        reasoning about, implementing and refining user interfaces. I am happy to take ownership of parts
        of the application and deliver a quality solution for our end-user needs.
      </p>
    </section>
  </div>
</section>
