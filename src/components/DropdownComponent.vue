<script setup>
import { ref } from "vue";

const selected = ref("");
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="w-full relative">
    <button
      class="group text-content-tertiary pl-4 pr-3 py-2 w-full flex justify-between items-center border bg-interaction-background-form-field hover:border-interaction-border-hover focus:ring disabled:border-interaction-border-neutral-normal/50 border-interaction-border-neutral-normal rounded-md"
    >
      <p>{{ selected ? selected : "Select" }}</p>
      <IconBase class="text-action-neutral-normal">
        <ChevronDownSmall></ChevronDownSmall>
      </IconBase>

      <div
        class="hidden absolute top-12 left-0 z-10 group-focus-within:block w-full border px-2 py-1.5 border-border-default-alpha text-content-primary bg-interaction-background-modeless shadow-bottom-300"
      >
        <template v-if="items && items.length > 0">
          <div
            v-for="item in items"
            :key="item.id"
            class="flex gap-3 items-center px-2 py-1.5 text-sm rounded-md hover:bg-interaction-ghost-hover focus:ring-2 disabled:bg-interaction-ghost-normal disabled:opacity-50"
            @click="selected = item.value"
          >
            <slot name="item" :item="item">
              {{ item.text }}
            </slot>
          </div>
        </template>

        <div v-else>Seçenek yok</div>
      </div>
    </button>
  </div>
</template>
