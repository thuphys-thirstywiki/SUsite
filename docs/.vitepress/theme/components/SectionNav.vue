<script setup lang="ts">
import { ref } from 'vue'

interface NavItem {
  text: string
  link?: string
  icon?: string
  open?: boolean
  children?: NavItem[]
}

interface NavSection extends NavItem {
  items: NavItem[]
}

const sections = ref<NavSection[]>([
  {
    text: 'Wiki',
    link: '/wiki/',
    open: true,
    items: [
      { text: '目录', link: '/wiki/' },
      { text: '可复用素材', link: '/wiki/artifacts/', icon: '/icons/artifacts.svg' },
      { text: '组织知识', link: '/wiki/knowledge/', icon: '/icons/study.svg' },
      { text: '活动', link: '/wiki/activities/', icon: '/icons/activities.svg' },
      { text: '维护指南', link: '/wiki/guide/', icon: '/icons/edit.svg' },
      { text: '技术扫盲', link: '/wiki/tech/', icon: '/icons/tech.svg' },
    ],
  },
  {
    text: '按身份阅读',
    link: '/wiki/people/',
    icon: '/icons/people.svg',
    items: [
      { text: '物理系同学', link: '/wiki/people/student' },
      { text: '学生会主席', link: '/wiki/people/zhuxituan' },
      { text: '学生会部长', link: '/wiki/people/buzhang' },
      {
        text: '学生会干事',
        link: '/wiki/people/ganshi',
        open: true,
        children: [
          { text: '生权部', link: '/wiki/info/departments/shengquan/', icon: '/icons/life.svg' },
          { text: '文宣部', link: '/wiki/info/departments/wenxuan/', icon: '/icons/pen.svg' },
          { text: '体育部', link: '/wiki/info/departments/tiyu/', icon: '/icons/sport.svg' },
          { text: '联络部', link: '/wiki/info/departments/lianluo/', icon: '/icons/message.svg' },
        ],
      },
    ],
  },
  {
    text: '活动',
    link: '/wiki/activities/',
    icon: '/icons/activities.svg',
    items: [
      { text: '迎新', link: '/wiki/activities/yingxin/' },
      { text: '学生节', link: '/wiki/activities/xueshengjie/' },
      { text: '新生舞会', link: '/wiki/activities/wuhui/' },
      { text: '跨校联谊', link: '/wiki/activities/lianyi/' },
      { text: '系领导接待日', link: '/wiki/activities/xilingdaojiedairi/' },
    ],
  },
  {
    text: '维护指南',
    link: '/wiki/guide/',
    icon: '/icons/edit.svg',
    items: [
      { text: 'Markdown 写作指南', link: '/wiki/guide/markdown' },
      { text: '示例词条（模板）', link: '/wiki/guide/sample-entry' },
      { text: '投稿与 Pull Request', link: '/wiki/guide/pr-guide' },
      { text: '贡献与部署', link: '/wiki/guide/contribute' },
    ],
  },
])
</script>

<template>
  <div class="section-nav">
    <div v-for="sec in sections" :key="sec.text" class="section-nav-group">
      <div class="section-nav-header" @click="sec.open = !sec.open">
        <svg class="section-nav-chevron" :class="{ open: sec.open }" viewBox="0 0 16 16" width="12" height="12">
          <path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <img v-if="sec.icon" class="section-nav-icon" :src="sec.icon" alt="" />
        <a class="section-nav-title" :href="sec.link">{{ sec.text }}</a>
      </div>
      <div v-if="sec.open" class="section-nav-items">
        <template v-for="item in sec.items" :key="item.text">
          <div v-if="item.children?.length" class="section-nav-subgroup">
            <div class="section-nav-subheader" @click="item.open = !item.open">
              <svg class="section-nav-chevron" :class="{ open: item.open }" viewBox="0 0 16 16" width="12" height="12">
                <path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a class="section-nav-title" :href="item.link">{{ item.text }}</a>
            </div>
            <div v-if="item.open" class="section-nav-subitems">
              <a v-for="child in item.children" :key="child.link" class="section-nav-link" :href="child.link">
                <img v-if="child.icon" class="section-nav-icon" :src="child.icon" alt="" />
                {{ child.text }}
              </a>
            </div>
          </div>
          <a v-else class="section-nav-link" :href="item.link">
            <img v-if="item.icon" class="section-nav-icon" :src="item.icon" alt="" />
            {{ item.text }}
          </a>
        </template>
      </div>
    </div>
  </div>
</template>
