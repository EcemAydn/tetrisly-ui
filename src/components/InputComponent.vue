<script setup>
import IconBase from "../components/icons/IconBase.vue";
import { cva } from "class-variance-authority";

const a = cva(["flex items-center gap-1 text-xs"], {
  variants: {
    helperTextColor: {
      neutral: "text-content-secondary",
      alert: "text-content-negative",
    },
  },
});
defineProps({
  type: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  helperText: {
    type: String,
    default: "Helper text",
  },
  helperTextColor: {
    type: String,
    default: "neutral",
  },
  showHelperText: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<!-- 
    * proplar:
    * Error-message: varsa error yap dizaynı
    * Info: altta yazı olcak.

 -->

<template>
  <div>
    <div
      class="flex gap-2 items-center text-content-primary bg-interaction-background-form-field py-2 px-4 w-full border rounded-md border-interaction-neutral-normal hover:border-interaction-border-hover focus-within:ring-2 focus-within:border-interaction-default-normal focus-within:ring-interaction-default-normal disabled:border-interaction-border-neutral-normal"
      :class="'border-interaction-border-alert'"
    >
      <slot name="prepend"></slot>
      <input
        class="w-full outline-none text-sm"
        required
        v-bind="$attrs"
        :type="type"
        @input="(e) => $emit('update:modelValue', e.target.value)"
        :value="modelValue"
      />
      <slot name="append"></slot>
    </div>
    <div v-if="showHelperText" :class="a({ helperTextColor })">
      <IconBase width="12" height="12">
        <InfoCircle v-if="helperTextColor === 'neutral'" />
        <AlertFill v-if="helperTextColor === 'alert'" />
      </IconBase>
      <p>{{ helperText }}</p>
    </div>
  </div>
</template>
