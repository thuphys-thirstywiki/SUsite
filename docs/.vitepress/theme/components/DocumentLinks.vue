<script setup lang="ts">
defineProps<{
  related?: { text: string; link: string; note?: string }[]
  backlinks?: { text: string; link: string; note?: string }[]
}>()
</script>

<template>
  <section v-if="related?.length || backlinks?.length" class="document-links">
    <div v-if="related?.length" class="link-group">
      <h2>关联文档</h2>
      <a v-for="item in related" :key="item.link" :href="item.link">
        <strong>{{ item.text }}</strong><span v-if="item.note">{{ item.note }}</span>
      </a>
    </div>
    <div v-if="backlinks?.length" class="link-group">
      <h2>被引用于</h2>
      <a v-for="item in backlinks" :key="item.link" :href="item.link">
        <strong>{{ item.text }}</strong><span v-if="item.note">{{ item.note }}</span>
      </a>
    </div>
  </section>
</template>
