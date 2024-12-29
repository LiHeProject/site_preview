import { defineClientConfig, useRouter } from "vuepress/client"

import Timeline from "./layouts/Timeline.vue"
import BlogCategory from "./layouts/BlogCategory.vue";

import "vuepress-theme-hope/presets/left-blog-info.scss"

export default defineClientConfig({
    enhance({app,router,siteData}) {
        
    },

    setup() {
        //const router = useRouter()
        if(typeof localStorage !== "undefined") {
            const pw = localStorage.getItem("__preview_warning")
            if(/**router.currentRoute.value.path == "/" && **/(pw == undefined || pw == null)) {
                alert("警告：本站点仍然处于预览测试中，任何内容有可能在下一fix或code更新中被更改，请多多见谅")
                window.localStorage.setItem("__preview_warning","1")
            }
        }
        
    },

    layouts: {
        Timeline,
        BlogCategory
    }
})