<script setup>
import { cva } from "class-variance-authority";

const card = cva(["rounded-lg"], {
  variants: {
    size: {
      fit: "w-fit",
      xsmall: "w-1/4",
      small: "w-1/3",
      medium: "w-1/2",
      large: "w-2/3",
      xlarge: "w-4/5",
      full: "w-full",
    },
    border: {
      primary: "border-none",
      secondary: "border border-border-default-alpha shadow-bottom-200",
    },
    radius: {
      none: "rounded-none",
      medium: "rounded-md",
      full: "rounded-full",
    },
    color: {
      primary: "bg-background-default text-content-primary",
      secondary: "bg-transparent",
    },
  },
});
defineProps({
  title: {
    type: String,
  },
  //   showTitle: {
  //     type: Boolean,
  //     default: false,
  //   },
  subTitle: {
    type: String,
  },
  content: {
    type: String,
  },
  subTitle2: {
    type: String,
  },
  content2: {
    type: String,
  },
  subTitle3: {
    type: String,
  },
  content3: {
    type: String,
  },
  showHeader: {
    type: Boolean,
    default: false,
  },
  showContent: {
    type: Boolean,
    default: false,
  },
  showProgress: {
    type: Boolean,
    default: false,
  },
  showFooter: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "small",
  },
  border: {
    type: String,
    default: "primary",
  },
  radius: {
    type: String,
    default: "medium",
  },
  color: {
    type: String,
    default: "primary",
  },
});
</script>
<template>
  <div :class="card({ size, border, radius, color })">
    <!-- header -->
    <div
      v-if="showHeader"
      class="flex justify-between items-center p-4 px-6 w-full border-b border-border-default"
    >
      <div class="flex items-center gap-2">
        <slot name="titleIcon"></slot>
        <div class="flex flex-col">
          <h2 class="font-medium">{{ title }}</h2>
          <slot name="headerDescription"></slot>
        </div>
      </div>
      <slot name="headerAction"></slot>
    </div>
    <!-- Content -->
    <div v-if="showContent" class="p-6 flex flex-col gap-4">
      <div
        v-if="showProgress"
        class="bg-non-contextual-blue-muted w-fit px-2 rounded-lg flex gap-1"
      >
        <div class="text-non-contextual-blue-default font-black">&#x2022;</div>
        <div class="text-non-contextual-blue-default">In Progress</div>
      </div>
      <div>
        <h3 class="text-content-secondary text-xs">{{ subTitle }}</h3>
        <p class="text-content-primary">{{ content }}</p>
      </div>
      <div class="grid grid-cols-2 text-xs gap-4 w-full">
        <div>
          <h3 class="text-content-secondary">{{ subTitle2 }}</h3>
          <p class="text-content-primary line-clamp-1 text-sm">
            {{ content2 }}
          </p>
        </div>
        <div>
          <h3 class="text-content-secondary">{{ subTitle3 }}</h3>
          <p class="text-content-primary line-clamp-1 text-sm">
            {{ content3 }}
          </p>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div
      v-if="showFooter"
      class="flex gap-2 items-center justify-end px-3 pb-3 text-xs"
    >
      <slot name="FooterAction"></slot>
    </div>
  </div>
</template>
