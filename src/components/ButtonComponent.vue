<script setup>
import { cva } from "class-variance-authority";

// const slots = useSlots();

const button = cva(
  [
    "w-fit rounded-md flex items-center gap-2 leading-7 focus:ring focus:ring-offset-2 whitespace-nowrap",
  ],
  {
    variants: {
      size: {
        small: "p-1 px-3 tetx-sm",
        medium: "p-2 px-4 tetx-sm",
        large: "p-2.5 px-4",
      },
    },
    compoundVariants: [
      {
        type: "default",
        appearance: "primary",
        intent: "none",
        class:
          "text-action-inverted-normal bg-action-primary-normal hover:bg-action-primary-hover active:bg-action-primary-active selected:bg-action-primary-selected disabled:bg-action-primary-normal disabled:opacity-50 loading:bg-action-primary-normal loading:opacity-50",
      },
      {
        type: "default",
        appearance: "primary",
        intent: "success",
        class:
          "text-action-inverted-normal bg-action-success-normal hover:bg-action-success-hover active:bg-action-success-active selected:bg-action-success-selected disabled:bg-action-success-normal disabled:opacity-50 loading:bg-action-success-normal loading:opacity-50",
      },
      {
        type: "default",
        appearance: "primary",
        intent: "destructive",
        class:
          "text-action-inverted-normal bg-action-destructive-normal hover:bg-action-destructive-hover active:bg-action-destructive-active  selected:bg-action-destructive-selected disabled:bg-action-destructive-normal disabled:opacity-50 loading:bg-action-destructive-normal loading:opacity-50",
      },
      {
        type: "default",
        appearance: "secondary",
        intent: "none",
        class:
          "shadow-bottom-100 border border-action-outline-normal text-action-neutral-normal bg-action-inverted-normal hover:text-action-neutral-hover hover:border-action-outline-hover active:text-action-neutral-active active:border-action-outline-active selected:text-action-neutral-selected selected:border-action-outline-selected disabled:text-action-neutral-normal disabled:border-action-outline-normal disabled:opacity-50 loading:text-action-neutral-normal loading:border-action-outline-normal loading:opacity-50",
      },
      {
        type: "default",
        appearance: "secondary",
        intent: "success",
        class:
          "shadow-bottom-100 border border-action-outline-normal text-action-success-normal bg-action-inverted-normal hover:text-action-success-hover hover:border-action-outline-hover active:text-action-success-active active:border-action-outline-active selected:text-action-success-selected selected:border-action-outline-selected disabled:text-action-success-normal disabled:border-action-outline-normal disabled:opacity-50 loading:text-action-success-normal loading:border-action-outline-normal loading:opacity-50",
      },
      {
        type: "default",
        appearance: "secondary",
        intent: "destructive",
        class:
          "shadow-bottom-100 border border-action-outline-normal text-action-destructive-normal bg-action-inverted-normal hover:text-action-destructive-hover hover:border-action-outline-hover active:text-action-destructive-active active:border-action-outline-active selected:text-action-destructive-selected selected:border-action-outline-selected disabled:text-action-destructive-normal disabled:border-action-outline-normal disabled:opacity-50 loading:text-action-destructive-normal loading:border-action-outline-normal loading:opacity-50",
      },
      {
        type: "default",
        appearance: "inverted",
        intent: "none",
        class:
          "shadow-bottom-100 text-action-neutral-normal bg-action-inverted-normal hover:text-action-neutral-hover hover:bg-action-inverted-hover active:text-action-neutral-active active:bg-action-inverted-active selected:text-action-neutral-selected selected:bg-action-inverted-selected disabled:text-action-neutral-normal disabled:bg-action-inverted-normal disabled:opacity-50 loading:text-action-neutral-normal loading:bg-action-inverted-normal loading:opacity-50",
      },
      {
        type: "ghost",
        appearance: "primary",
        intent: "none",
        class:
          "bg-action-ghost-normal text-action-primary-normal hover:text-action-primary-hover active:text-action-primary-active selected:text-action-primary-selected disabled:text-action-primary-normal disabled:opacity-50 loading:text-action-primary-normal hover:bg-action-ghost-hover active:bg-action-ghost-active selected:bg-action-ghost-selected disabled:bg-action-ghost-normal loading:bg-action-ghost-normal loading:opacity-50",
      },
      {
        type: "ghost",
        appearance: "primary",
        intent: "success",
        class:
          "bg-action-ghost-normal text-action-success-normal hover:text-action-success-hover active:text-action-success-active selected:text-action-success-selected disabled:text-action-success-normal disabled:opacity-50 loading:text-action-success-normal hover:bg-action-ghost-hover active:bg-action-ghost-active selected:bg-action-ghost-selected disabled:bg-action-ghost-normal loading:bg-action-ghost-normal loading:opacity-50",
      },
      {
        type: "ghost",
        appearance: "primary",
        intent: "destructive",
        class:
          "bg-action-ghost-normal text-action-destructive-normal hover:text-action-destructive-hover active:text-action-destructive-active selected:text-action-destructive-selected disabled:text-action-destructive-normal disabled:opacity-50 loading:text-action-destructive-normal hover:bg-action-ghost-hover active:bg-action-ghost-active selected:bg-action-ghost-selected disabled:bg-action-ghost-normal loading:bg-action-ghost-normal loading:opacity-50",
      },
      {
        type: "ghost",
        appearance: "secondary",
        intent: "none",
        class:
          "bg-action-ghost-normal text-action-neutral-normal hover:text-action-neutral-hover active:text-action-neutral-active selected:text-action-neutral-selected disabled:text-action-neutral-normal disabled:opacity-50 loading:text-action-neutral-normal hover:bg-action-ghost-hover active:bg-action-ghost-active selected:bg-action-ghost-selected disabled:bg-action-ghost-normal loading:bg-action-ghost-normal loading:opacity-50",
      },
      {
        type: "ghost",
        appearance: "inverted",
        intent: "none",
        class:
          "bg-action-ghost-normal text-action-inverted-normal hover:text-action-inverted-hover active:text-action-inverted-active selected:text-action-inverted-selected disabled:text-action-inverted-normal disabled:opacity-50 loading:text-action-inverted-normal hover:bg-action-ghost-inverted-hover active:bg-action-ghost-inverted-active selected:bg-action-ghost-inverted-selected disabled:bg-action-ghost-inverted-normal loading:bg-action-ghost-inverted-normal loading:opacity-50",
      },
      {
        type: "ghost",
        appearance: "reverse inverted",
        intent: "none",
        class:
          "bg-action-ghost-normal text-action-reverse-inverted-normal hover:text-action-reverse-inverted-hover active:text-action-reverse-inverted-active selected:text-action-reverse-inverted-selected disabled:text-action-reverse-inverted-normal disabled:opacity-50 loading:text-action-reverse-inverted-normal hover:bg-action-ghost-hover active:bg-action-ghost-active selected:bg-action-ghost-selected disabled:bg-action-ghost-normal loading:bg-action-ghost-normal loading:opacity-50",
      },
      {
        type: "bare",
        appearance: "primary",
        intent: "none",
        class:
          "text-action-primary-normal hover:text-action-primary-hover active:text-action-primary-active selected:text-action-primary-selected disabled:text-action-primary-normal disabled:opacity-50 loading:text-action-primary-normal loading:opacity-50",
      },
      {
        type: "bare",
        appearance: "primary",
        intent: "success",
        class:
          "text-action-success-normal hover:text-action-success-hover active:text-action-success-active selected:text-action-success-selected disabled:text-action-success-normal disabled:opacity-50 loading:text-action-success-normal loading:opacity-50",
      },
      {
        type: "bare",
        appearance: "primary",
        intent: "none",
        class:
          "text-action-primary-normal hover:text-action-primary-hover active:text-action-primary-active selected:text-action-primary-selected disabled:text-action-primary-normal disabled:opacity-50 loading:text-action-primary-normal loading:opacity-50",
      },
      {
        type: "bare",
        appearance: "primary",
        intent: "destructive",
        class:
          "text-action-destructive-normal hover:text-action-destructive-hover active:text-action-destructive-active selected:text-action-destructive-selected disabled:text-action-destructive-normal disabled:opacity-50 loading:text-action-destructive-normal loading:opacity-50",
      },
      {
        type: "bare",
        appearance: "secondary",
        intent: "none",
        class:
          "text-action-neutral-normal hover:text-action-neutral-hover active:text-action-neutral-active selected:text-action-neutral-selected disabled:text-action-neutral-normal disabled:opacity-50 loading:text-action-neutral-normal loading:opacity-50",
      },
      {
        type: "bare",
        appearance: "inverted",
        intent: "none",
        class:
          "underline decoration-1 text-action-inverted-normal hover:text-action-inverted-hover active:text-action-inverted-active selected:text-action-inverted-selected disabled:text-action-inverted-normal disabled:opacity-50 loading:text-action-inverted-normal loading:opacity-50",
      },
      {
        type: "bare",
        appearance: "reverse inverted",
        intent: "none",
        class:
          "underline decoration-1 text-action-reverse-inverted-normal hover:text-action-reverse-inverted-hover active:text-action-reverse-inverted-active selected:text-action-reverse-inverted-selected disabled:text-action-reverse-inverted-normal disabled:opacity-50 loading:text-action-reverse-inverted-normal loading:opacity-50",
      },
    ],
  }
);

defineProps({
  buttonName: {
    type: String,
  },
  intent: {
    type: String,
    default: "none",
    validator(value) {
      return ["none", "success", "destructive"].includes(
        value.toLocaleLowerCase()
      );
    },
  },
  size: {
    type: String,
    default: "medium",
    validator(value) {
      return ["small", "medium", "large"].includes(value.toLocaleLowerCase());
    },
  },
  appearance: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "secondary", "inverted", "reverse inverted"].includes(
        value.toLocaleLowerCase()
      );
    },
  },
  type: {
    type: String,
    default: "default",
    validator(value) {
      return ["default", "ghost", "bare"].includes(value.toLocaleLowerCase());
    },
  },
});
// function getColor(color) {
//   switch (color) {
//     case "primary":
//       return "action-primary-normal";
//     case "success":
//       return "action-success-normal";
//     case "destructive":
//       return "action-destructive-grey";
//     case "inverted":
//       return "text-action-inverted-normal";
//     // case "secondary":
//     //   return "text-action-neutral-normal";
//     // case "secondarySuccess":
//     //   return "text-action-success-normal";
//     // case "secondaryDestructive":
//     //   return "bg-non-contextual-raspberry";
//     default:
//       return "primary";
//   }
// }
// const button = computed(() => {
//   let defaultClass = "text-md w-fit rounded-md whitespace-nowrap p-2 px-4";

//   // defaultClass += slots.icon ? "p-1" : "px-2";

//   const action = props.action.toLocaleLowerCase();
//   const color = props.color.toLocaleLowerCase();

//   switch (action) {
//     case "default":
//       defaultClass += `bg-${getColor(color)}`;
//       break;
//     case "ghost":
//       defaultClass += `text-${getColor(color)}`;
//       break;
//     case "bare":
//       defaultClass += `bg-${getColor(color)}`;
//       break;
//     default:
//       defaultClass += `bg-${getColor(color)}`;
//   }

//   return defaultClass;
// });
</script>
<template>
  <button :class="button({ intent, appearance, type, size })" class="">
    <slot name="prepend"></slot>
    {{ buttonName }}
    <slot name="append"></slot>
  </button>
</template>
