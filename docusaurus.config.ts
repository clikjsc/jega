import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'JEGA Việt Nam',
  tagline: 'Trung tâm Hỗ trợ JEGA - Khám phá, học hỏi và làm chủ phần mềm thiết kế nội thất AI JEGA.',
  favicon: 'img/logo Jega favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  /* // Temporarily commented out
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  */

  // Set the production url of your site here
  url: 'https://docs.jega.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jegavn',
  projectName: 'jegavn-docusaurus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Add global stylesheets
  stylesheets: [
    'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css',
  ],

  // Add global scripts
  scripts: [
    'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js',
  ],

  // Add client module to initialize the widget
  clientModules: [
    './src/clientModules/dfMessenger.ts',
  ],

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        htmlLang: 'vi-VN',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          // editUrl: 'https://github.com/your-org/your-repo/tree/main/',
        },
        blog: { 
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // editUrl: 'https://github.com/your-org/your-repo/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo Jega.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '', // Removed title to only show logo
      hideOnScroll: false,
      logo: {
        alt: 'JEGA Logo',
        src: 'img/logo Jega.png',
        srcDark: 'img/logo Jega dark theme.png',
      },
      // style: 'primary', // Removed to allow custom CSS to fully control navbar style
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Trung tâm hướng dẫn',
          className: 'navbar-item-docs',
        },
        {
          to: '/docs/online-training/overview',
          label: 'Online Training',
          position: 'left',
          className: 'navbar-item-training',
        },
        {
          to: '/docs/jega-collection',
          label: 'Jega Collection',
          position: 'left',
          className: 'navbar-item-collection',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          className: 'navbar-item-locale',
        },
        {
          href: 'mailto:support@jega.vn',
          label: 'Hỗ trợ',
          position: 'right',
          className: 'navbar-item-support',
        },
        {
          href: 'https://zcloud-work.i72.com/main/login',
          label: 'Đăng nhập',
          position: 'right',
          className: 'navbar-item-login button', // Simplified for custom styling
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Trung tâm hướng dẫn',
              to: '/docs/trung-tam-huong-dan/tong-quan/gioi-thieu',
            },
            {
              label: 'Online Training',
              to: '/docs/online-training/00-overview', // Updated path
            },
            {
              label: 'Jega Collection',
              to: '/docs/jega-collection', // Path is correct as it's a single page
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/jega.vn',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@JEGAVN',
            },
            {
              label: 'Zalo Group',
              href: 'https://zalo.me/g/aksslx057',
            },
          ],
        },
        {
          title: 'Khác',
          items: [
            {
              label: 'Blog',
              href: 'https://jega.vn/vi/bo-suu-tap',
            },
            {
              label: 'Website JEGA',
              href: 'https://jega.vn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JEGA Việt Nam.`,
      logo: {
        alt: 'JEGA Logo',
        src: 'img/logo Jega dark theme.png',
        width: 120,
      },
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
