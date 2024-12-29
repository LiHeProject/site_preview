import { defineClientConfig } from "vuepress/client"

import Timeline from "./layouts/Timeline.vue"
import BlogCategory from "./layouts/BlogCategory.vue";

export default defineClientConfig({
    enhance({app,router,siteData}) {
        
    },

    layouts: {
        Timeline,
        BlogCategory
    }
})