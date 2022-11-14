import { redirect } from '@sveltejs/kit';

const subdomains = ['maciej', 'marcelina', 'helena', 'mateusz'];

export const load = ({ url }) => {
	const { host } = url;
	const subdomain = subdomains.find((subdomain) => host.includes(subdomain));

	if (subdomain) {
		throw redirect(307, `https://www.mazur.site/${subdomain}`);
	}
};
