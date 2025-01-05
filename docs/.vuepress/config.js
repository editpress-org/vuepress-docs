import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { editablePlugin } from '@editpress/vuepress-plugin-editable';

export default defineUserConfig({
  title: 'VuePress',
  lang: 'zh-CN',
  description: 'My first VuePress Site',
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    repo: 'editpress-org/editpress',
    navbar: ['/', '/get-started', '/guide/test'],
  }),
  bundler: viteBundler(),
  plugins: [
    editablePlugin({
      canReview: true,
    }),
  ],
});
