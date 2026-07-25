// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://souther-lang.org',
	integrations: [
		starlight({
			title: 'Souther',
			description: 'Make business rules executable.',
			defaultLocale: 'ja',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/souther-lang' }],
		}),
	],
});
