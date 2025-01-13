import { defineConfig } from 'vitepress'
import footnote from "markdown-it-footnote"
import { generateSidebar } from "vitepress-sidebar"

const fileAndStyles: Record<string, string> = {}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",

  title: "离合计划",
  description: "愿幻想成真，这将贯穿始终.",

  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '论坛', link: 'https://f.voidd.net' },
      { text: '爱发电', link: 'https://afdian.com/a/liheproject' }
    ],

    sidebar: generateSidebar({
        useTitleFromFrontmatter: true,
        useFolderLinkFromIndexFile: true,
        useFolderTitleFromIndexFile: true,
        collapsed: true,
        sortFolderTo: "top",
        sortMenusByFrontmatterOrder: true,
        excludePattern: ["README.md","intro.md","special.md"]
    }),

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/dbFq8PphKg' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1053717578' },
      { icon: 'github', link: 'https://github.com/liheproject' }
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    notFound: {
      code: "404",
      title: "抱歉，这里什么也没有...",
      quote: "若是不改变方向，执意前行，你可能会一头撞死在未知的墙上。",
      linkLabel: "首页",
      linkText: "首页"
    },
    footer: {
      message: "有些东西，终会到头的，对吗？",
      copyright: "Copyright ©️ 2022-2025 TiariStudio / Tianri"
    },
    outline: {
      label: "导览"
    },
    darkModeSwitchLabel: "夜间模式",
    lightModeSwitchTitle: "去到「白昼」",
    darkModeSwitchTitle: "去到「黑夜」",
    sidebarMenuLabel: "侧边栏",
    returnToTopLabel: "回到顶点"
  },
  markdown: {
    config(md) {
      md.use(footnote)

    },
  },
  vite: {
    ssr: {
      noExternal: ["naive-ui","date-fns", "vueuc"]
    }
  },
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformPageData(pageData, ctx) {
    
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html)
      return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, `${style}</head>`)
    }
  }
})

