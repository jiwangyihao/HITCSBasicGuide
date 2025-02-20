import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "HIT CS 完全入门指南",
  description: "A totaly zero-start guide for computer science learning",
  head: [
    ["link", { rel: "icon", href: "/logo.png", type: "image/png" }],
    [
      "script",
      {
        id: "LA_COLLECT",
        src: "//sdk.51.la/js-sdk-pro.min.js",
        charset: "UTF-8",
      },
    ],
    ["script", {}, `LA.init({id:"3KDPFWYzyP4djIYj",ck:"3KDPFWYzyP4djIYj"})`],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/getting-started" },
    ],

    sidebar: [
      { text: "开始探索", link: "/getting-started" },
      {
        text: "扫盲篇",
        collapsed: true,
        items: [{ text: "如何阅读文档", link: "/before-start/read-doc" }],
      },
      {
        text: "入门篇",
        collapsed: true,
        items: [
          { text: "Work in Progress", link: "/wip" },
          {
            text: "编程工具基础",
            collapsed: true,
            items: [
              { text: "概览", link: "/introduction/tool-basic/" },
              {
                text: "代码编辑器 & IDE 配置",
                collapsed: true,
                items: [
                  {
                    text: "Visual Studio Code",
                    link: "/introduction/tool-basic/code-editor-ide/vscode",
                  },
                  {
                    text: "JetBrains IDEs",
                    link: "/introduction/tool-basic/code-editor-ide/jetbrains",
                  },
                ],
              },
            ],
          },
          {
            text: "编程工具进阶",
            collapsed: true,
            items: [
              { text: "Work in Progress", link: "/wip" },
              {
                text: "AI（辅助）编程工具",
                collapsed: true,
                items: [
                  {
                    text: "概览",
                    link: "/introduction/tool-advanced/ai/overview",
                  },
                  {
                    text: "插件安装 & 配置",
                    link: "/introduction/tool-advanced/ai/plugin-install",
                  },
                  {
                    text: "Cursor 安装 & 配置",
                    link: "/introduction/tool-advanced/ai/cursor-install",
                  },
                  {
                    text: "Cursor 使用指南",
                    link: "/introduction/tool-advanced/ai/usage-guide",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/jiwangyihao/HITCSBasicGuide",
      },
    ],

    footer: {
      message: "Released under the MPL-2.0 license",
      copyright:
        "Copyright © 2024-present, Jiwang Yihao (a student in Faculty of Computing, HIT)",
    },

    logo: "logo.png",

    editLink: {
      pattern:
        "https://github.com/jiwangyihao/HITCSBasicGuide/edit/main/:path",
      text: "在 GitHub 上编辑此页面",
    },

    outline: "deep",

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    externalLinkIcon: true,
  },

  lastUpdated: true,
  cleanUrls: true,
});
