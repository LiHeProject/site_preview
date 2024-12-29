
<template>
    <div class="center" v-for="l in lines">
        <p>{{ l }}</p>
    </div>
</template>

<style scoped>
.center {
    justify-items: center;
}
</style>

<script setup lang="ts">
import { computed } from "vue";
import { useThemeLocaleData } from "vuepress-theme-hope/composables/index.js"
import { _ThemeLocaleData } from "../locales/zh_Changed";

let locale = useThemeLocaleData()

const lines = computed(()=>{
        return (locale.value as _ThemeLocaleData).blogCategoryLocale.lines
    }
)
</script>