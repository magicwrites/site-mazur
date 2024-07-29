<script lang="ts">
  import { all as skills } from '$lib/skills';
  import cx from 'classnames';

  const entries = [
    {
      company: 'Atlassian',
      location: 'Remotely for Gdańsk, Poland',
      roles: [
        {
          name: 'Senior front-end developer',
          time: '2023 - now',
          duty: `Part of the jira data center group - a team tasked with accessibility aspects. Also
					contributing to authentication, theming and javascript libraries reverse versioning initiatives.`,
          tags: [
            skills.JSP,
            skills.ON_PREMISES,
            skills.JS,
            skills.TS,
            skills.JQUERY,
            skills.BACKBONE,
            skills.TEMPLATE_ENGINES,
            skills.REACT,
            skills.VUE
          ]
        }
      ]
    },
    {
      company: 'Casumo',
      location: 'Remotely for Malta',
      roles: [
        {
          name: 'Front-end architect',
          time: '2022 - 2023',
          duty: `Took a central position in a modernisation project aimed at introduction of a&nbsp;micro
					frontends architecture. Engaged in the prototyping effort and technical debates. Held
					direct leadership of a platform team while simultaneously trained and guided five domain
					teams.`,
          tags: [
            skills.MICRO_SERVICES,
            skills.LEADERSHIP,
            skills.MENTORSHIP,
            skills.TEAM_BUILDING,
            skills.PROTOTYPING,
            skills.ROADMAPPING,
            skills.SVELTE,
            skills.SSR,
            skills.SEO,
            skills.REACT,
            skills.WEB_COMPONENTS,
            skills.COMPONENTS_LIBRARY
          ]
        },
        {
          name: 'Senior front-end developer',
          time: '2018 - 2022',
          duty: `Member of a team responsible for compliance and security concerns. KYC, AML and player
					management functionalities mostly on the backoffice system. Pushing migration of
					knockoutJS based tech stack to the modern react counterpart. Drove and delivered an
					initiative to overhaul the entirety of the KYC feature.`,
          tags: [
            skills.JS,
            skills.TS,
            skills.FLOW,
            skills.KNOCKOUT,
            skills.REACT,
            skills.INTEGRATIONS
          ]
        }
      ]
    },
    {
      company: 'Future Processing',
      location: 'Gliwice, Poland',
      roles: [
        {
          name: 'Senior front-end developer',
          time: '2016 - 2018',
          duty: `Member of a team building a government service for a Danish tech giant. Afterwards a front-end specialist in a startup team tasked with migration of an on-promise logistics management product to its next generation SaaS version.`,
          tags: ['angular v1.6', 'angular v2', 'angular material', 'redux', 'sagas', 'mentorship']
        },
        {
          name: 'Front-end developer',
          time: '2011 - 2016',
          duty: `Over the years a member of multiple agile teams. Working over health, media and government applications. Initially filling the role of a UI specialist for the .NET solutions but later joined more frontend refined SPA projects, nodeJS REST services or even cross-platform electronJS development.`,
          tags: [
            skills.ANGULAR,
            skills.DOTNET,
            skills.MVC,
            skills.CQRS,
            skills.REST,
            skills.JQUERY,
            skills.BACKBONE,
            skills.MICRO_SERVICES,
            skills.NOSQLDBS,
            skills.NODE,
            skills.TTD,
            skills.BDD,
            skills.AGILE_TEAMS,
            skills.ELECTRON,
            skills.GIT,
            skills.SVN
          ]
        }
      ]
    },
    {
      company: 'Goodpoint',
      location: 'Olkusz and Kraków, Poland',
      roles: [
        {
          name: 'Web developer',
          time: '2010 - 2011',
          duty: `Rapid design and delivery of websites for small and medium sized companies. Client contact, offer negotiations and IT support. First experience with professional software development.`,
          tags: [
            skills.HTML,
            skills.CSS,
            skills.PHP,
            skills.MVC,
            skills.CAKE_PHP,
            skills.IT_SUPPORT
          ]
        }
      ]
    }
  ];
</script>

<section class="flex flex-col gap-4">
  <h3 class="font-medium">Experience</h3>

  {#each entries as entry}
    <section
      class={cx('grid grid-cols-3 gap-4', {
        'break-before-page': entry.company === 'Goodpoint'
      })}
    >
      <header>
        <h4 class="font-medium">{entry.company}</h4>
        <div class="text-xs">{entry.location}</div>
      </header>

      <section class="col-span-2 flex flex-col gap-4">
        {#each entry.roles as role}
          <div class="flex flex-col gap-2">
            <header>
              <h5 class="font-medium">{role.name}</h5>
              <div class="text-xs">{role.time}</div>
            </header>

            <p class="text-xs">{@html role.duty}</p>

            <div class="mt-0.25 pb-0.25 border-t border-neutral-400 border-dashed" />

            <section class="flex flex-wrap gap-2 text-xs">
              {role.tags.join(', ')}
            </section>
          </div>
        {/each}
      </section>
    </section>
  {/each}
</section>
