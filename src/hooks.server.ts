import { redirect } from '@sveltejs/kit';
import { LANGUAGES, language } from './stores/language';

export async function handle({ event, resolve }) {
  const languages = event.request.headers.get('accept-language');
  const isPolishAccepted = languages && languages.includes('pl');
  const selected = isPolishAccepted ? LANGUAGES.PL : LANGUAGES.EN;

  language.set(selected);

  return await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%language%', selected)
  });
}

export const load = (data) => {
  console.log('??', { data });
  // if (!locals.user) {
  //   throw redirect(307, subroute);
  // }
};
