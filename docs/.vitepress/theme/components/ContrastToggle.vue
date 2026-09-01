<script lang="ts">
import { ref } from 'vue'

// 模块级共享状态：桌面导航栏与移动端展开菜单会同时挂载两个开关实例
const enabled = ref(false)
</script>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const HC_KEY = 'su-hc'

let observer: MutationObserver | null = null

function isDark() {
  return document.documentElement.classList.contains('dark')
}

/** 高对比度模式下同步浏览器主题色（移动端地址栏底色） */
function syncThemeColor() {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  if (!meta) return
  meta.content = enabled.value
    ? isDark()
      ? '#0a0c10'
      : '#ffffff'
    : '#3270b9'
}

function setEnabled(on: boolean) {
  enabled.value = on
  document.documentElement.classList.toggle('hc', on)
  try {
    localStorage.setItem(HC_KEY, on ? '1' : '0')
  } catch {
    /* 隐私模式下 localStorage 可能不可写，忽略即可 */
  }
  syncThemeColor()
}

onMounted(() => {
  enabled.value = document.documentElement.classList.contains('hc')
  syncThemeColor()
  // 深浅色切换时保持主题色同步
  observer = new MutationObserver(syncThemeColor)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <button
    type="button"
    class="su-contrast-toggle"
    :class="{ on: enabled }"
    :aria-pressed="enabled"
    :aria-label="enabled ? '关闭高对比度模式' : '开启高对比度模式'"
    :title="enabled ? '关闭高对比度模式' : '开启高对比度模式'"
    @click="setEnabled(!enabled)"
  >
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7" />
      <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" />
    </svg>
  </button>
</template>
