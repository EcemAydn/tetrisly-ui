<script setup>
import { ref } from "vue";
import { cva } from "class-variance-authority";

const checked = ref(false);
const check = ref(true);
const minus = ref(false);
const button = cva(
  [
    "flex justify-center items-center rounded h-4 w-4 focus:ring-2 focus:border focus:border-interaction-inverted-normal",
  ],
  {
    variants: {
      checked: {
        true: "text-white bg-interaction-default-normal hover:bg-interaction-default-hover disabled:bg-interaction-default-normal/50",
        false:
          "bg-interaction-background-form-field border-2 border-interaction-border-neutral-normal hover:border-interaction-border-hover disabled:border-interaction-border-neutral-normal/50",
      },
    },
  }
);

defineProps({
  color: {
    type: String,
    default: "checkedFalse",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Checkbox Label",
  },
});
</script>
<template>
  <div class="flex items-center">
    <button
      type="button"
      @click="checked = !checked"
      :disabled="disabled"
      :class="button({ checked })"
    >
      <IconBase>
        <CheckSmall v-if="check" />
        <MinusIcon v-if="minus" />
      </IconBase>
    </button>
    <input :value="checked" v-bind="$attrs" type="checkbox" class="hidden" />
    <label
      :disabled="disabled"
      class="pl-2 text-sm text-content-primary disabled:text-content-primary/50"
      >{{ label }}</label
    >
  </div>
</template>
