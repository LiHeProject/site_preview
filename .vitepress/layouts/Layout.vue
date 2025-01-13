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
    mapping: "url",
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
                    请为我们留下评论或加入我们的官方QQ群/论坛，如可以和愿意，你也可以为我们发电或加入我们。这会使本企划变得更好（例如角色拥有立绘，游戏开发速度加快，质量提高）
                </NCard>
            </template>
            <template #doc-footer-before>
                <div class="giscus" id="giscus"></div>
            </template>
        </Layout>
        <Broadcast />
        
    </NNotificationProvider>
</template>
