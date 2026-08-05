<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

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
</script>

<template>
  <a
    v-if="show"
    class="vp-edit-link-top"
    :href="editLink.url"
    target="_blank"
    rel="noreferrer"
  >
    <span class="vpi-square-pen edit-link-icon" />
    {{ editLink.text }}
  </a>
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
