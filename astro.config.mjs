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
			favicon: '/favicon.ico',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				// Starlight emits the rest of the Open Graph tags; the image is ours.
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://souther-lang.org/og.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'Souther — make business rules executable.' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://souther-lang.org/og.png' } },
			],
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
