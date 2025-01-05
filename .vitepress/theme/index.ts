import { defineComponent, h, inject } from 'vue'
import { Theme,useData,useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from '../layouts/Layout.vue'
import { setup } from '@css-render/vue3-ssr'
import { darkTheme, NConfigProvider } from 'naive-ui'

const CssRenderStyle = defineComponent({
  setup() {
    const collect: ()=>string = inject('css-render-collect',()=>{return ""})
    return {
      style: collect()
    }
  },
  render() {
    return h('css-render-style', {
      innerHTML: this.style
    })
  }
})

const VitepressPath = defineComponent({
  setup() {
    const route = useRoute()
    return () => {
      return h('vitepress-path', null, [route.path])
    }
  }
})

const NaiveUIProvider = defineComponent({
  render() {
    return h(
      NConfigProvider,
      { abstract: true, inlineThemeDisabled: true,theme: useData().isDark.value ? darkTheme : null },
      {
        default: () => [
          h(Layout, null, { default: this.$slots.default?.() }),
          import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null
        ]
      }
    )
  }
})

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(NaiveUIProvider, null, {
      
    })
  },
  enhanceApp({ app, router, siteData }) {
    if(import.meta.env.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    }
  }
} satisfies Theme
