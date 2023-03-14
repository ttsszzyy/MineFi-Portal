module.exports = {
	title: 'MineFi',
	tagline: 'All the tools you need to start building a modern WordPress project, using all the latest front end development tools.',
	url: 'https://eightshift.com',
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	organizationName: 'infinum',
	projectName: 'eightshift-docs',
	staticDirectories: ['static'],
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		}
	],
	themeConfig: {
		navbar: {
			hideOnScroll: true,
			logo: {
				alt: 'New Web Group Logo',
				src: '/img/logo.png',
			},
			items: [
				{
					to: '/',
					activeBasePath: 'pages',
					label: '首页',
					position: 'left',
				},
				{
						type: 'html',
						position: 'left',
						value: '<a style="color: #000;font-size: 16px" onmouseover="this.style.color=\'#E84E4E\'" onmouseleave="this.style.color=\'#000\'" href="https://app.minefi.io">市场</a>',
				},
				// {
				// 	type: 'html',
				// 	position: 'right',
				// 	value: '<img alt="" onclick="console.log(123)" style="cursor: pointer;" src="/img/wallet.svg"/>',
				// },
				// {
				// 	to: '/blog',
				// 	activeBasePath: 'blog',
				// 	label: 'Blog',
				// 	position: 'right',
				// },
				// {
				// 	to: '/storybook/',
				// 	activeBasePath: 'storybook',
				// 	label: 'Storybook',
				// 	position: 'right',
				// },
				// {
				// 	to: '/sass',
				// 	activeBasePath: 'sass',
				// 	label: 'Sass',
				// 	position: 'right',
				// },
				// {
				// 	to: '/showcase',
				// 	activeBasePath: 'showcase',
				// 	label: 'Showcase',
				// 	position: 'right',
				// },
			],
		},
		footer: {
			logo: {
				alt: 'New Web Group Logo',
				src: '/img/logo.png',
				href: '/',
				width: 160,
				height: 51,
			},
			copyright: `Copyright © ${new Date().getFullYear()} New Web Group.`,
		},
		prism: {
			theme: require('prism-react-renderer/themes/dracula'),
			additionalLanguages: ['php'],
		},
		// algolia: {
		// 	appId: 'CWB1S6U3C4',
		// 	apiKey: 'cbae3fc769aee256328548eff1e91c1c',
		// 	indexName: 'infinum_eightshift',
		// },
		colorMode: {
			disableSwitch: true
		},
		trailingSlash: false
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: require.resolve('./src/scss/application.scss'),
				},
				blog: {
					blogTitle: 'Tutorials and articles about Eightshift development kit',
					blogDescription: 'Tutorials and articles about Eightshift development kit',
					blogSidebarTitle: 'Latest posts',
					showReadingTime: true,
					postsPerPage: 6,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	plugins: [
		'docusaurus-plugin-sass',
	],
	customFields: {
		keywords: [
			'wordpress tools',
			'development tools',
			'wordpress project',
			'Gutenberg blocks',
			'development kit',
			'wordpress kit'
		],
		image: 'img-why-boilerplate@2x.png',
	},
};
