import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "文章",
      icon: "file",
      prefix: "posts/",
      children: "structure",
      collapsible: true
    },
    {
      text: "《米新杂记》",
      icon: "book",
      prefix: "mixinlimit/",
      children: "structure",
      collapsible: true
    },
    {
      text: "《末世：平凡的转折点，兽化》",
      icon: "book",
      prefix: "evolution_common_turning_point_transfur/",
      children: "structure",
      collapsible: true
    },
    "intro",
  ],
});
