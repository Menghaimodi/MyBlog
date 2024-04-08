/*
 * @Author: 我会想你的哈哈 12027048+menghaimodi@user.noreply.gitee.com
 * @Date: 2024-04-07 19:48:17
 * @LastEditors: 我会想你的哈哈 12027048+menghaimodi@user.noreply.gitee.com
 * @LastEditTime: 2024-04-08 10:11:35
 * @FilePath: \web-story\docs\.vitepress\config.mts
 * @Description: ：
 * 
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "元首·爱娃~浪漫故事~❤️❤️❤️",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/A touch of platinum' }
    ],

    sidebar: [
      {
        text: '文章',
        collapsed: false, // 默认展开
        items: [
          { text: '一抹铂金', link: '/A touch of platinum' },
          {
            text: '短篇故事', items: [
              { text: '热烈烈的夏日周末', link: '/Hot summer weekend' },
              // { text: '子分支2', link: '/api-examples/subpage2' },
              // 添加更多子分支项目...
            ]
          }
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 自定义配置上次更新的文本和日期格式
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    // 开启本地搜索
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
