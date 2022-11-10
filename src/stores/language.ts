import { browser } from '$app/environment';
import { writable, derived } from 'svelte/store';

export const LANGUAGES = {
	PL: 'pl',
	EN: 'en'
};

const getDefaultLanguage = () => {
	if (browser) {
		const isPolishAccepted = navigator.languages.some((lang) => lang.includes(LANGUAGES.PL));

		return isPolishAccepted ? LANGUAGES.PL : LANGUAGES.EN;
	}

	return LANGUAGES.EN;
};

export const language = writable(getDefaultLanguage());

export const isPolish = derived(language, ($language) => $language === LANGUAGES.PL);
export const isEnglish = derived(language, ($language) => $language === LANGUAGES.EN);

export const toggle = () =>
	language.update(($language) => ($language === LANGUAGES.PL ? LANGUAGES.EN : LANGUAGES.PL));
