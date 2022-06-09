import { writable, derived } from 'svelte/store';

export const LANGUAGES = {
	PL: 'pl',
	EN: 'en'
};

export const language = writable(LANGUAGES.EN); // todo: use browser detected lang

export const isPolish = derived(language, ($language) => $language === LANGUAGES.PL);
export const isEnglish = derived(language, ($language) => $language === LANGUAGES.EN);

export const toggle = () =>
	language.update(($language) => ($language === LANGUAGES.PL ? LANGUAGES.EN : LANGUAGES.PL));
