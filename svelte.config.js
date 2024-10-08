import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter(),
    alias: {
      $lib: 'src/lib',
      $src: 'src',
      $components: 'src/components',
      $assets: 'src/assets',
      $content: 'src/content'
    }
  }
};

export default config;
