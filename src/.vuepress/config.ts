import { defineUserConfig } from "vuepress";
import { getDirname,path } from "vuepress/utils"
import { zhChangedLocale } from "./locales/zh_Changed.js";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  
  title: "离合计划",
  description: "愿幻想成真，这将贯穿始终.",

  theme,

  alias: {
    "@theme-hope/modules/blog/components/TimelineList": path.resolve(
      __dirname,
      "./components/TimelineList.vue"
    ),
  }
  //plugins: [PlugClient]

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
