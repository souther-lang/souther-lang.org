// @ts-check
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The TextMate grammar the VS Code extension uses, so code on the site is
// coloured the same way it is in the editor.
const southerGrammar = JSON.parse(
	readFileSync(fileURLToPath(new URL('./src/grammars/souther.tmLanguage.json', import.meta.url)), 'utf8')
);

// https://astro.build/config
export default defineConfig({
	site: 'https://souther-lang.org',
	integrations: [
		starlight({
			title: 'Souther',
			description: 'Make business rules executable.',
			logo: {
				light: './src/assets/souther-light.png',
				dark: './src/assets/souther-dark.png',
				alt: 'Souther',
			},
			defaultLocale: 'en',
			customCss: ['./src/styles/custom.css'],
			expressiveCode: {
				shiki: { langs: [southerGrammar] },
			},
			components: {
				// Puts a Souther sample beside the hero copy when a page sets `heroCode`.
				Hero: './src/components/Hero.astro',
				// The language selector slot is empty on a single-locale site, so the
				// machine-translation control goes there.
				LanguageSelect: './src/components/TranslateSelect.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/souther-lang' }],
		}),
	],
});
