<script setup>
import { useSlots, computed } from "vue";

const slots = useSlots();

const props = defineProps({
  badgeText: {
    type: String,
  },
  color: {
    type: String,
    default: "grey",
    validator(value) {
      return [
        "blue",
        "green",
        "grey",
        "red",
        "orange",
        "raspberry",
        "magenta",
        "purple",
        "grape",
        "violet",
        "teal",
        "cyan",
        "aquamarine",
        "emerald",
      ].includes(value.toLocaleLowerCase());
    },
  },
  emphasis: {
    type: String,
    default: "high",
    validator(value) {
      return ["high", "medium", "low"].includes(value.toLocaleLowerCase());
    },
  },
});

function getColor(color) {
  switch (color) {
    case "blue":
      return "bg-non-contextual-blue";
    case "green":
      return "bg-non-contextual-green";
    case "grey":
      return "bg-non-contextual-grey";
    case "red":
      return "bg-non-contextual-red";
    case "orange":
      return "bg-non-contextual-orange";
    case "raspberry":
      return "bg-non-contextual-raspberry";
    case "magenta":
      return "bg-non-contextual-magenta";
    case "purple":
      return "bg-non-contextual-purple";
    case "grape":
      return "bg-non-contextual-grape";
    case "violet":
      return "bg-non-contextual-violet";
    case "teal":
      return "bg-non-contextual-teal";
    case "cyan":
      return "bg-non-contextual-cyan";
    case "aquamarine":
      return "bg-non-contextual-aquamarine";
    case "emerald":
      return "bg-non-contextual-emerald";
    default:
      return "blue";
  }
}

// eslint-disable-next-line vue/return-in-computed-property
const badge = computed(() => {
  let defaultClass = "text-sm w-fit rounded-md whitespace-nowrap ";

  defaultClass += slots.icon ? "p-1" : "px-2";

  const emphasis = props.emphasis.toLocaleLowerCase();
  const color = props.color.toLocaleLowerCase();

  switch (emphasis) {
    case "high":
      defaultClass += ` ${getColor(
        color
      )}-default text-content-invented-primary`;
      break;
    case "medium":
      defaultClass += ` ${getColor(color)}-muted text-content-primary`;
      break;
    case "low":
      defaultClass += ` ${getColor(color)}-subtle text-content-primary`;
      break;
    default:
      defaultClass += ` ${getColor(color)}-default`;
  }

  return defaultClass;
});
</script>
<template>
  <div :class="badge">
    <slot name="icon">
      {{ badgeText }}
    </slot>
  </div>
</template>
