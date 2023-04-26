<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="flex gap-1 w-full items-center">
    <IconBase>
      <HomeIcon class="text-action-neutral-normal"></HomeIcon>
    </IconBase>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center last:text-action-outline-active text-action-neutral-normal"
    >
      <IconBase>
        <ChevronRightSmall></ChevronRightSmall>
      </IconBase>
      <p class="text-sm">
        {{ item }}
      </p>
    </div>
  </div>
</template>
