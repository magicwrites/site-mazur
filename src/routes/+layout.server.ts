import { redirect } from '@sveltejs/kit';

const subdomains = ['maciej', 'marcelina'];
const PERMANENT_REDIRECT_CODE = 308;

export const load = ({ url }) => {
  const { host } = url;
  const subdomain = subdomains.find((subdomain) => host.includes(subdomain));

  if (subdomain) {
    throw redirect(PERMANENT_REDIRECT_CODE, `https://www.mazur.site/${subdomain}`);
  }
};
