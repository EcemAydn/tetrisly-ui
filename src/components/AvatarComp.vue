<script setup>
import { cva } from "class-variance-authority";

const image = cva([""], {
  variants: {
    size: {
      xsmall: "w-5 h-5",
      small: "w-6 h-6",
      normal: "w-8 h-8",
      large: "w-10 h-10",
      xlarge: "w-12 h-12",
    },
    radius: {
      normal: "rounded-md",
      full: "rounded-full",
    },
  },
});

const imageText = cva(
  ["flex items-center justify-center bg-gray-500 text-white"],
  {
    variants: {
      size: {
        xsmall: "w-5 h-5",
        small: "w-6 h-6",
        normal: "w-8 h-8",
        large: "w-10 h-10",
        xlarge: "w-12 h-12",
      },
      radius: {
        normal: "rounded-md",
        full: "rounded-full",
      },
      color: {
        lowBlue: "bg-non-contextual-blue-muted !text-black",
        lowGreen: "bg-non-contextual-green-muted !text-black",
        lowGrey: "bg-non-contextual-grey-muted !text-black",
        lowRed: "bg-non-contextual-red-muted !text-black",
        lowOrange: "bg-non-contextual-orange-muted !text-black",
        lowRaspberry: "bg-non-contextual-raspberry-muted !text-black",
        lowMagenta: "bg-non-contextual-magenta-muted !text-black",
        lowPurple: "bg-non-contextual-purple-muted !text-black",
        lowGrape: "bg-non-contextual-grape-muted !text-black",
        lowViolet: "bg-non-contextual-violet-muted !text-black",
        lowTeal: "bg-non-contextual-teal-muted !text-black",
        lowCyan: "bg-non-contextual-cyan-muted !text-black",
        lowAquamarine: "bg-non-contextual-aquamarine-muted !text-black",
        lowEmerald: "bg-non-contextual-emerald-muted !text-black",
        highBlue: "bg-non-contextual-blue-default",
        highGreen: "bg-non-contextual-green-default",
        highGrey: "bg-non-contextual-grey-default",
        highRed: "bg-non-contextual-red-default",
        highOrange: "bg-non-contextual-orange-default !text-black",
        highRaspberry: "bg-non-contextual-raspberry-default",
        highMagenta: "bg-non-contextual-magenta-default",
        highPurple: "bg-non-contextual-purple-default",
        highGrape: "bg-non-contextual-grape-default",
        highViolet: "bg-non-contextual-violet-default",
        highTeal: "bg-non-contextual-teal-default",
        highCyan: "bg-non-contextual-cyan-default",
        highAquamarine: "bg-non-contextual-aquamarine-default",
        highEmerald: "bg-non-contextual-emerald-default",
      },
    },
  }
);

defineProps({
  avatarText: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  size: {
    type: String,
    default: "normal",
  },
  radius: {
    type: String,
    default: "normal",
  },
  color: {
    type: String,
    default: "highGrey",
  },
});
</script>
<template>
  <div class="relative flex-shrink-0">
    <div v-if="!imageLink" :class="imageText({ size, radius, color })">
      {{ avatarText.split(" ")[0].charAt(0) }}
      <!-- {{ avatarText.split(" ")[1].charAt(0) }} -->
    </div>
    <img v-else :class="image({ size, radius })" :src="imageLink" alt="Photo" />
  </div>
</template>
