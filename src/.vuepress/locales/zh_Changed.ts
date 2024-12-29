import { ThemeLocaleData } from "vuepress-theme-hope";

interface _BlogCategoryLocaleData {
    lines: string[]
}

export interface _ThemeLocaleData extends ThemeLocaleData {
    blogCategoryLocale: _BlogCategoryLocaleData
}


export const zhChangedLocale: _ThemeLocaleData = {
    lang: "zh-CN_Changed",

    navbarLocales: {
        langName: "简体中文",
        selectLangAriaLabel: "选择语言",
    },

    metaLocales: {
        author: "作者",
        date: "写作日期",
        origin: "原创",
        views: "访问量",
        category: "分类",
        tag: "标签",
        readingTime: "阅读时间",
        words: "字数",
        toc: "导览",
        prev: "上一篇",
        next: "下一篇",
        lastUpdated: "上次编辑于",
        contributors: "贡献者",
        editLink: "编辑此页",
        print: "打印",
    },

    //没啥用，几乎都禁用了
    blogLocales: {
        article: "文章",
        articleList: "文章列表",
        category: "分类",
        tag: "标签",
        timeline: "时间轴",
        timelineTitle: "昨日不在",
        all: "全部",
        intro: "关于我们",
        star: "星标",
        empty: "$text 为空",
    },

    paginationLocales: {
        prev: "上一页",
        next: "下一页",
        navigate: "跳转到",
        action: "前往",
        errorText: "请输入 1 到 $page 之前的页码！",
    },

    outlookLocales: {
        themeColor: "主题色",
        darkmode: "外观",
        fullscreen: "全屏",
    },

    encryptLocales: {
        iconLabel: "文章已加密",
        placeholder: "输入密码",
        remember: "记住密码",
        errorHint: "请输入正确的密码",
    },

    routeLocales: {
        skipToContent: "跳至主要內容",
        notFoundTitle: "页面不存在",
        notFoundMsg: [
            "抱歉，这里什么也没有...",
            "你该想想，是否是故意的？还是输错了？",
            "404！！！",
            "我不好",
            "那又怎样？这里...还是什么都没有。"
        ],
        back: "返回上一页",
        home: "回到主页",
    },
    blogCategoryLocale: {
        lines: ["哦，抱歉","这里我们不想启用...","试着按下浏览器的上一页按钮吧！"]
    }
};