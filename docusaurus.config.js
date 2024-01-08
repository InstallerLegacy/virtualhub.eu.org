// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VirtualHub',
  tagline: 'Install old OS in VMs!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://virtualhub.eu.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'InstallerLegacy', // Usually your GitHub org/user name.
  projectName: 'virtualhub.eu.org', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/InstallerLegacy/virtualhub.eu.org/tree/main/',
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/InstallerLegacy/virtualhub.eu.org/tree/main/',
          blogTitle: 'VirtualHub Blog',
          blogDescription: 'The VirtualHub Blog.',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  plugins: [require.resolve("docusaurus-plugin-image-zoom"),
    [
         require.resolve('docusaurus-lunr-search'), {
           disableVersioning: true,
         }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        injectManifestConfig: {
          globPatterns: ['**/*.{pwa}'],
        },
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/virtualhub.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(255, 255, 255)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/virtualhub.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/virtualhub.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/virtualhub.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: 'img/virtualhub-social-card.webp',
      zoom: {},
      navbar: {
        hideOnScroll: true,
        title: 'VirtualHub',
        // logo: {
        //   alt: 'VirtualHub Logo',
        //   src: 'img/logo.webp',
        // },
        items: [
          {
            type: 'dropdown',
            label: 'OSs',
            position: 'left',
            items: [
              {to: '/start-here', label: 'Start Here'},
              {to: '/1960s', label: '1960s'},
              {to: '/1970s', label: '1970s'},
            ],
          },
          {
            type: 'dropdown',
            label: 'About',
            position: 'left',
            items: [
              {to: '/about', label: 'About VirtualHub'},
              {to: '/blog', label: 'VirtualHub Blog'},
              {to: '/other-websites', label: 'Our Other Websites'},
              {to: '/contact', label: 'Contact'},
            ],
          },
          {
            href: 'https://chat.virtualhub.eu.org',
            label: 'Chat',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/InstallerLegacy/virtualhub.eu.org',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://x.com/virtua1hub',
            position: 'right',
            className: 'header-twitter-link',
            'aria-label': 'Twitter Page',
          },
          {
            href: 'https://www.youtube.com/@virtua1hub',
            position: 'right',
            className: 'header-youtube-link',
            'aria-label': 'Youtube Channel',
          },
          {
            href: 'https://t.me/Virtua1Hub',
            position: 'right',
            className: 'header-telegram-link',
            'aria-label': 'Telegram Channel',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Operating Systems',
            items: [
              {
                label: 'Start Here',
                to: '/start-here',
              },
              {
                label: '1960s',
                to: '/1960s',
              },
              {
                label: '1970s',
                to: '/1970s',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://chat.virtualhub.eu.org/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/Virtua1Hub',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/virtua1hub',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@virtua1hub',
              },
              {
                label: 'Github Discussions',
                href: 'https://github.com/orgs/InstallerLegacy/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'VirtualHub Setup',
                href: 'https://setup.virtualhub.eu.org/',
              },
              {
                label: 'VirtualHub Screenshots',
                href: 'https://screenshots.virtualhub.eu.org/',
              },
              {
                label: 'GitHub Repository',
                href: 'https://github.com/InstallerLegacy/virtualhub.eu.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Legacy Installer. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'ini',
        ],
      },
    }),
};

export default config;
