// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Robosub LA',
  tagline: 'Building Autonomous Underwater Vechicles',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CSULA-ROBOSUB',
        logo: {
          alt: 'My Site Logo',
          src: 'img/robosubla_logo_basic.png',
        },
        style: "primary",
        items: [
          {
            to: '/fleet',
            label: 'The Fleet',
            position: 'right',
            className: 'navItems',
          },
          {
            to: '/sponsors', 
            label: 'Sponsors', 
            position: 'right',
            className: 'navItems',
          },
          {
            to: '/team',
            label: 'Crew Deck',
            position: 'right',
            className: 'navItems',
          },
          {
            to: '/resources/resources',
            label: 'Resources',
            position: 'right',
            className: 'navItems',
          },
          {
            to: '/updates',
            label: 'Updates',
            position: 'right',
            className: 'navItems',
          },
          {
            href: 'https://discord.gg/N6vJGGSH',
            label: 'Discord',
            position: 'right',
            className: 'navItems',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Robosub LA at California State University, Los Angeles.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
