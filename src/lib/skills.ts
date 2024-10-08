export const major = {
  HTML: 'HTML',
  CSS: 'CSS',
  JS: 'javascript',
  TS: 'typescript',
  NODE: 'nodeJS',
  SVELTE: 'svelte',
  TAILWINDCSS: 'tailwindcss',
  STORYBOOK: 'storybook',
  REACT: 'react',
  VUE: 'vue',
  ANGULAR: 'angular 1.6',
  KNOCKOUT: 'knockoutJS',
  GIT: 'git',
  SVN: 'svn',
  SEMVER: 'semver',
  HTTP: 'HTTP',
  REST: 'REST',
  MVC: 'MVC',
  MVVM: 'MVVM',
  SSR: 'SSR',
  MICRO_FRONTENDS: 'micro frontends',
  MICRO_SERVICES: 'micro services',
  LEADERSHIP: 'leadership',
  MENTORSHIP: 'mentorship',
  REDUX: 'redux',
  VUEX: 'vuex',
  VITE: 'vite',
  CLEAN_CODING: 'clean coding',
  DOMAIN_DESIGN: 'domain design',
  TESTABILITY: 'testability',
  CI_CD: 'CI/CD',
  ACCESSABILITY: 'accessability',
  ON_PREMISES: 'on-promises software',
  JQUERY: 'jQuery',
  TEMPLATE_ENGINES: 'template engines',
  PROTOTYPING: 'prototyping',
  ROADMAPPING: 'roadmapping',
  WEB_COMPONENTS: 'web components',
  COMPONENTS_LIBRARY: 'components library',
  AGILE_TEAMS: 'agile teams',
  PARCEL: 'parcelJS',
  UNIT_TEST: 'unit test'
};

export const minor = {
  COFFEESCRIPT: 'coffeescript',
  PHP: 'PHP',
  CSHARP: 'C#',
  JAVA: 'java',
  JSP: 'java server pages',
  RUBY: 'ruby',
  PYTHON: 'python',
  ANGULAR2: 'angular 2',
  EMBER: 'emberJS',
  BACKBONE: 'backboneJS',
  DOTNET: '.NET',
  WEBPACK: 'webpack',
  GRUNT: 'grunt',
  GULP: 'gulp',
  BOWER: 'bower',
  INTEGRATIONS: 'integrations',
  CLOUD_SYSTEMS: 'cloud systems',
  TEAM_BUILDING: 'team building',
  SEO: 'SEO',
  FLOW: 'flowJS',
  CQRS: 'CQRS',
  NOSQLDBS: 'no SQL databases',
  TTD: 'TTD',
  BDD: 'BDD',
  ELECTRON: 'electronJS',
  CAKE_PHP: 'CakePHP',
  IT_SUPPORT: 'IT and technical support',
  SASS: 'SASS',
  LESS: 'LESS',
  BEM: 'BEM',
  SMACSS: 'SMACSS',
  ATOMIC_DESIGN: 'atomic design',
  MATERIAL_DESIGN: 'material design',
  BOOTSTRAP: 'bootstrap',
  REDUX_SAGAS: 'redux sagas',
  REDUX_TOOLKIT: 'redux toolkit',
  ROLLBAR: 'rollbarJS',
  E2E: 'E2E',
  COUCH_DB: 'couchDB',
  FIREBASE: 'firebase',
  NGINX: 'nginx'
};

export const all = {
  ...major,
  ...minor
};

export const list = Object.values(all);
