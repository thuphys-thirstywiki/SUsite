<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { onContentUpdated, useData } from 'vitepress'

const { theme, page, frontmatter } = useData()

const editLink = computed(() => {
  const { text = '在 GitHub 上编辑此页', pattern = '' } = theme.value.editLink || {}
  if (!pattern) return null
  return {
    url: pattern.replace(/:path/g, page.value.filePath),
    text,
  }
})

const show = computed(
  () => editLink.value && frontmatter.value.editLink !== false
)

// 移动端：编辑按钮跟随本地导航栏（"本页目录"按钮右侧）
const isMobile = ref(false)
const localNav = ref<HTMLElement | null>(null)

function findLocalNav() {
  localNav.value = document.querySelector('.VPLocalNav .container') as HTMLElement | null
}

onMounted(() => {
  const mq = window.matchMedia('(max-width: 959px)')
  isMobile.value = mq.matches
  mq.addEventListener('change', (e) => (isMobile.value = e.matches))
  findLocalNav()
})

onContentUpdated(() => nextTick(findLocalNav))
</script>

<template>
  <a
    v-if="show && !isMobile"
    class="vp-edit-link-top"
    :href="editLink.url"
    target="_blank"
    rel="noreferrer"
  >
    <span class="vpi-square-pen edit-link-icon" />
    {{ editLink.text }}
  </a>

  <Teleport v-if="show && isMobile && localNav" :to="localNav">
    <a
      class="vp-edit-link-mobile"
      :href="editLink.url"
      target="_blank"
      rel="noreferrer"
    >
      <span class="vpi-square-pen edit-link-icon" />
      <span class="edit-text">{{ editLink.text }}</span>
    </a>
  </Teleport>
</template>

<style scoped>
.vp-edit-link-top {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}

.vp-edit-link-top:hover {
  color: var(--vp-c-brand-2);
}

.edit-link-icon {
  margin-right: 6px;
}
</style>
