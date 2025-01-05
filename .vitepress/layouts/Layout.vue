<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { NNotificationProvider,NCard } from 'naive-ui';
import Broadcast from "../components/Broadcast.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { toRefs } from 'vue';
import { useData, useRoute } from 'vitepress';

const { Layout } = DefaultTheme
const { frontmatter } = toRefs(useData())

const route = useRoute()

giscusTalk({
    repo: "tianriw/lihe_giscus_repo",
    repoId: "R_kgDONgnYNA",
    category: "General",
    categoryId: "DIC_kwDONgnYNM4Claxk",
    mapping: "pathname",
    inputPosition: "top",
    lang: "zh-CN",
    lightTheme: "light",
    darkTheme: "dark"
},{frontmatter,route})

</script>

<template>
    <NNotificationProvider>
        <Layout>
            <template #doc-before>
                <NCard title="我们需要你的帮助">
                    为我们发一条评论或加入我们的QQ群聊/论坛亦或是为我们发电，让Tianri和米新极限知道他们不是一意孤行。
                </NCard>
            </template>
            <template #doc-footer-before>
                <div class="giscus" id="giscus"></div>
            </template>
           </Layout>
        <Broadcast />
        
    </NNotificationProvider>
</template>
