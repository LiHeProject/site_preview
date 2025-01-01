<script setup lang="ts">
import { useNotification } from 'naive-ui';

const notification = useNotification()

let new_year_broadcast = false

notification.create({
    title: "公开预览测试",
    content: "内容可能会在任何时刻被更改"
})
if(new Date().getFullYear() == 2025 && !new_year_broadcast) {
    notification.create({
        title: "新年快乐！",
        content: "Tianri和米新极限祝福你们，2025年一切顺心，万事如意，新年快乐！"
    })
    new_year_broadcast = true
}
notification.create({
        title: "对了！",
        content: "我们的论坛也举行了新年活动，现在注册/登录并签到1天即可取得徽章「灾变见证者」，结束时间1月5日，活动期间签到、发送内容等获得的LCoin增加"
})

</script>

<template>

</template>