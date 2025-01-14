<script setup lang="ts">
import { useNotification } from 'naive-ui';

const notification = useNotification()

notification.create({
    title: "注意：本作品处于公开预览测试阶段",
    content: "内容可能会在任何时刻被更改"
})
// if(new Date().getFullYear() == 2025) {
//     notification.create({
//         title: "新年快乐！",
//         content: "Tianri和米新极限祝福所有“观测者”们新年快乐！"
//     })
// }
notification.create({
    title: "公告：",
    content: "受限于主创Tianri的个人原因，本站点将在2025年1月15日起暂时停止所有作品的更新，番茄上的作品保持更新，原因竟是他出门了，无法用电脑更新了。而本站点更新必须使用git。米新也懒得搞，成天到晚除了吃就是睡！艳丽批判（bushi）"
})
notification.create({
        title: "对了！",
        content: "我们的论坛也举行了新年活动，现在注册/登录并签到1天即可取得徽章「灾变见证者」，结束时间1月结束，活动期间签到、发送内容等获得的LCoin增加"
})

</script>

<template>

</template>
