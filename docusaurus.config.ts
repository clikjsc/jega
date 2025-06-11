import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'JEGA Việt Nam Docs',
  tagline: 'Tài liệu hướng dẫn sử dụng phần mềm JEGA và các giải pháp liên quan',
  favicon: 'img/logo Jega favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.jega.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jegavn',
  projectName: 'jegavn-docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
    navbar: {
      title: 'JEGA Docs',
      logo: {
        alt: 'JEGA Logo',
        src: 'img/logo Jega.png',
        srcDark: 'img/logo Jega dark theme.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tài Liệu',
        },
        {to: '/blog', label: 'Blog', position: 'left'}, // Kích hoạt lại Blog
        { 
          type: 'localeDropdown',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/jegavn/jegavn-docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài Liệu',
          items: [
            {
              label: 'Trung Tâm Hướng Dẫn',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Cộng Đồng',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/jegavn',
            },
          ],
        },
        {
          title: 'Khác',
          items: [
            { label: 'Blog', to: '/blog' }, // Kích hoạt lại Blog trong footer
            {
              label: 'Trang Chủ JEGA',
              href: 'https://jega.vn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JEGA Việt Nam. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
