<script setup>
import { ref } from "vue";
import AlertComponent from "../components/AlertComponent.vue";
import AvatarComp from "../components/AvatarComp.vue";
import BadgeComponent from "../components/BadgeComponent.vue";
import BreadCrumbs from "../components/Breadcrumbs.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import InputComponent from "../components/InputComponent.vue";
import IconBase from "../components/icons/IconBase.vue";
import CheckboxComponent from "../components/CheckboxComponent.vue";
import RadioButtonComponent from "../components/RadioButtonComponent.vue";
import DropdownComponent from "../components/DropdownComponent.vue";
import DialogComponent from "../components/DialogComponent.vue";

const dizi = ref(["Arda"]);
const dizi2 = ref(["Arda", "Turan"]);
const dizi3 = ref(["Arda", "Turan", "Ecem"]);
const dizi4 = ref(["Arda", "Turan", "Ecem", "Aydın"]);
const selectArray = ref([
  { text: "aaa", value: "aaa" },
  { text: "bbb", value: "bbb" },
  { text: "ccc", value: "ccc" },
]);
</script>
<template>
  <div class="p-12 flex flex-col gap-16">
    <div class="flex flex-col gap-4">
      <p class="text-black font-black">ALERT</p>
      <div class="flex gap-4">
        <AlertComponent alarm-title="alert text" />
        <AlertComponent alarm-title="alert text" />
      </div>
      <div class="flex gap-4">
        <AlertComponent alarm-title="alert text" type="success" />
        <AlertComponent alarm-title="alert text" type="success" />
      </div>
      <div class="flex gap-4">
        <AlertComponent alarm-title="alert text" type="warning" />
        <AlertComponent alarm-title="alert text" type="warning" />
      </div>
      <div class="flex gap-4">
        <AlertComponent alarm-title="alert text" type="negative" />
        <AlertComponent alarm-title="alert text" type="negative" />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <p class="text-black font-black">AVATAR</p>
      <div class="flex gap-4 mt-4 items-center">
        <AvatarComp avatar-text="Ecem aydın" size="xlarge" />
        <AvatarComp avatar-text="Ecem aydın" size="large" />
        <AvatarComp avatar-text="Ecem aydın" />
        <AvatarComp avatar-text="Ecem aydın" size="small" />
        <AvatarComp avatar-text="Ecem aydın" size="xsmall" />
      </div>
      <div class="flex gap-4 mt-4 items-center">
        <AvatarComp avatar-text="Ecem aydın" size="xlarge" radius="full" />
        <AvatarComp avatar-text="Ecem aydın" size="large" radius="full" />
        <AvatarComp avatar-text="Ecem aydın" radius="full" />
        <AvatarComp avatar-text="Ecem aydın" size="small" radius="full" />
        <AvatarComp avatar-text="Ecem aydın" size="xsmall" radius="full" />
      </div>
      <div class="flex gap-4">
        <AvatarComp color="lowBlue" avatar-text="Ecem aydın" />
        <AvatarComp color="lowGreen" avatar-text="Ecem aydın" />
        <AvatarComp color="lowGrey" avatar-text="Ecem aydın" />
        <AvatarComp color="lowRed" avatar-text="Ecem aydın" />
        <AvatarComp color="lowOrange" avatar-text="Ecem aydın" />
        <AvatarComp color="lowRaspberry" avatar-text="Ecem aydın" />
        <AvatarComp color="lowMagenta" avatar-text="Ecem aydın" />
        <AvatarComp color="lowPurple" avatar-text="Ecem aydın" />
        <AvatarComp color="lowGrape" avatar-text="Ecem aydın" />
        <AvatarComp color="lowViolet" avatar-text="Ecem aydın" />
        <AvatarComp color="lowTeal" avatar-text="Ecem aydın" />
        <AvatarComp color="lowCyan" avatar-text="Ecem aydın" />
        <AvatarComp color="lowAquamarine" avatar-text="Ecem aydın" />
        <AvatarComp color="lowEmerald" avatar-text="Ecem aydın" />
      </div>
      <div class="flex gap-4">
        <AvatarComp color="lowBlue" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowGreen" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowGrey" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowRed" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowOrange" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp
          color="lowRaspberry"
          avatar-text="Ecem aydın"
          radius="full"
        />
        <AvatarComp color="lowMagenta" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowPurple" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowGrape" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowViolet" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowTeal" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="lowCyan" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp
          color="lowAquamarine"
          avatar-text="Ecem aydın"
          radius="full"
        />
        <AvatarComp color="lowEmerald" avatar-text="Ecem aydın" radius="full" />
      </div>
      <div class="flex gap-4">
        <AvatarComp color="highBlue" avatar-text="Ecem aydın" />
        <AvatarComp color="highGreen" avatar-text="Ecem aydın" />
        <AvatarComp color="highGrey" avatar-text="Ecem aydın" />
        <AvatarComp color="highRed" avatar-text="Ecem aydın" />
        <AvatarComp color="highOrange" avatar-text="Ecem aydın" />
        <AvatarComp color="highRaspberry" avatar-text="Ecem aydın" />
        <AvatarComp color="highMagenta" avatar-text="Ecem aydın" />
        <AvatarComp color="highPurple" avatar-text="Ecem aydın" />
        <AvatarComp color="highGrape" avatar-text="Ecem aydın" />
        <AvatarComp color="highViolet" avatar-text="Ecem aydın" />
        <AvatarComp color="highTeal" avatar-text="Ecem aydın" />
        <AvatarComp color="highCyan" avatar-text="Ecem aydın" />
        <AvatarComp color="highAquamarine" avatar-text="Ecem aydın" />
        <AvatarComp color="highEmerald" avatar-text="Ecem aydın" />
      </div>
      <div class="flex gap-4">
        <AvatarComp color="highBlue" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="highGreen" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="highGrey" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="highRed" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="highOrange" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp
          color="highRaspberry"
          avatar-text="Ecem aydın"
          radius="full"
        />
        <AvatarComp
          color="highMagenta"
          avatar-text="Ecem aydın"
          radius="full"
        />
        <AvatarComp color="highPurple" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="highGrape" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="highViolet" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="highTeal" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp color="highCyan" avatar-text="Ecem aydın" radius="full" />
        <AvatarComp
          color="highAquamarine"
          avatar-text="Ecem aydın"
          radius="full"
        />
        <AvatarComp
          color="highEmerald"
          avatar-text="Ecem aydın"
          radius="full"
        />
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-black font-black">BADGE</p>
      <div class="flex flex-wrap gap-2">
        <BadgeComponent emphasis="high" color="Blue" badge-text="Badge Text" />
        <BadgeComponent emphasis="high" color="Green" badge-text="Badge Text" />
        <BadgeComponent emphasis="high" color="Grey" badge-text="Badge Text" />
        <BadgeComponent emphasis="high" color="Red" badge-text="Badge Text" />
        <BadgeComponent
          emphasis="high"
          color="Orange"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="high"
          color="Raspberry"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="high"
          color="Magenta"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="high"
          color="Purple"
          badge-text="Badge Text"
        />
        <BadgeComponent emphasis="high" color="Grape" badge-text="Badge Text" />
        <BadgeComponent
          emphasis="high"
          color="Violet"
          badge-text="Badge Text"
        />
        <BadgeComponent emphasis="high" color="Teal" badge-text="Badge Text" />
        <BadgeComponent emphasis="high" color="Cyan" badge-text="Badge Text" />
        <BadgeComponent
          emphasis="high"
          color="Aquamarine"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="high"
          color="Emerald"
          badge-text="Badge Text"
        />
      </div>
      <div class="flex wrap gap-2">
        <BadgeComponent
          emphasis="medium"
          color="Blue"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Green"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Grey"
          badge-text="Badge Text"
        />
        <BadgeComponent emphasis="medium" color="Red" badge-text="Badge Text" />
        <BadgeComponent
          emphasis="medium"
          color="Orange"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Raspberry"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Magenta"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Purple"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Grape"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Violet"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Teal"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Cyan"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Aquamarine"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="medium"
          color="Emerald"
          badge-text="Badge Text"
        />
      </div>
      <div class="flex wrap gap-2">
        <BadgeComponent emphasis="low" color="blue" badge-text="Badge Text" />
        <BadgeComponent emphasis="low" color="Green" badge-text="Badge Text" />
        <BadgeComponent emphasis="low" color="Grey" badge-text="Badge Text" />
        <BadgeComponent emphasis="low" color="Red" badge-text="Badge Text" />
        <BadgeComponent emphasis="low" color="Orange" badge-text="Badge Text" />
        <BadgeComponent
          emphasis="low"
          color="Raspberry"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="low"
          color="Magenta"
          badge-text="Badge Text"
        />
        <BadgeComponent emphasis="low" color="Purple" badge-text="Badge Text" />
        <BadgeComponent emphasis="low" color="Grape" badge-text="Badge Text" />
        <BadgeComponent emphasis="low" color="Violet" badge-text="Badge Text" />
        <BadgeComponent emphasis="low" color="Teal" badge-text="Badge Text" />
        <BadgeComponent emphasis="low" color="Cyan" badge-text="Badge Text" />
        <BadgeComponent
          emphasis="low"
          color="Aquamarine"
          badge-text="Badge Text"
        />
        <BadgeComponent
          emphasis="low"
          color="Emerald"
          badge-text="Badge Text"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex wrap gap-2">
          <BadgeComponent emphasis="high" color="Blue" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="high" color="Green" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="high" color="Grey" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="high" color="Red" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="high"
            color="Orange"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="high"
            color="Raspberry"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="high"
            color="Magenta"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="high"
            color="Purple"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="high" color="Grape" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="high"
            color="Violet"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="high" color="Teal" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="high" color="Cyan" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="high"
            color="Aquamarine"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="high"
            color="Emerald"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
        </div>
        <div class="flex wrap gap-2">
          <BadgeComponent
            emphasis="medium"
            color="Blue"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Green"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Grey"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="medium" color="Red" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Orange"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Raspberry"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Magenta"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Purple"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Grape"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Violet"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Teal"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Cyan"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Aquamarine"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="medium"
            color="Emerald"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
        </div>
        <div class="flex wrap gap-2">
          <BadgeComponent emphasis="low" color="Blue" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Green" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Grey" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Red" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Orange" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="low"
            color="Raspberry"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="low"
            color="Magenta"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Purple" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Grape" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Violet" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Teal" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent emphasis="low" color="Cyan" badge-text="Badge Text">
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="low"
            color="Aquamarine"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
          <BadgeComponent
            emphasis="low"
            color="Emerald"
            badge-text="Badge Text"
          >
            <template #icon>
              <IconBase :width="16" :height="16">
                <InfoCircle />
              </IconBase>
            </template>
          </BadgeComponent>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <p class="text-black font-black">BREADCRUMBS</p>
      <div class="flex gap-4">
        <BreadCrumbs :items="dizi"></BreadCrumbs>
      </div>
      <div class="flex gap-4">
        <BreadCrumbs :items="dizi2"></BreadCrumbs>
      </div>
      <div class="flex gap-4">
        <BreadCrumbs :items="dizi3"></BreadCrumbs>
      </div>
      <div class="flex gap-4">
        <BreadCrumbs :items="dizi4"></BreadCrumbs>
      </div>
    </div>

    <div class="flex flex-col gap-12">
      <p class="text-black font-black">BUTTON</p>
      <div class="flex flex-col gap-4 pl-4">
        <p class="font-bold text-black">DEFAULT</p>
        <p class="text-black">Default Primary None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent size="large" button-name="Button Text" />
            <ButtonComponent button-name="Button Text" />
            <ButtonComponent size="small" button-name="Button Text" />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent size="large" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent size="small" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent size="large" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent size="small" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent size="large" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent size="small" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent size="large" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent size="small" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent size="large" button-name="Button Text" disabled>
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent button-name="Button Text" disabled>
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent size="small" button-name="Button Text" disabled>
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent loading button-name="Button Text" disabled>
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Default Primary Success</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="success"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent intent="success" button-name="Button Text" />
            <ButtonComponent
              intent="success"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent intent="success" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent intent="success" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent intent="success" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent intent="success" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="success"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="success"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="success"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="success"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="success"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="success"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Default Primary Destructive</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="destructive"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent intent="destructive" button-name="Button Text" />
            <ButtonComponent
              intent="destructive"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent intent="destructive" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent intent="destructive" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent intent="destructive" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent intent="destructive" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="destructive"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="destructive"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="destructive"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              intent="destructive"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="destructive"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              intent="destructive"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Default Secondary None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent appearance="secondary" button-name="Button Text" />
            <ButtonComponent
              appearance="secondary"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent appearance="secondary" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent appearance="secondary" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent appearance="secondary" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent appearance="secondary" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Default Secondary Success</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              appearance="secondary"
              intent="success"
              button-name="Button Text"
            />
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="success"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="success"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Default Secondary Destructive</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              button-name="Button Text"
            />
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="secondary"
              intent="destructive"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Default Inverted None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="inverted"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent appearance="inverted" button-name="Button Text" />
            <ButtonComponent
              appearance="inverted"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent appearance="inverted" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent appearance="inverted" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent appearance="inverted" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent appearance="inverted" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="inverted"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="inverted"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="inverted"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              appearance="inverted"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="inverted"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              appearance="inverted"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 pl-4">
        <p class="font-bold text-black">GHOST</p>
        <p class="text-black">Ghost Primary None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent type="ghost" button-name="Button Text" />
            <ButtonComponent
              type="ghost"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="ghost" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="ghost" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="ghost" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="ghost" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="ghost" button-name="Button Text" disabled>
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Ghost Primary Success</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="success"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              intent="success"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              intent="success"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="success"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="success"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="success"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Ghost Primary Destructive</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              intent="destructive"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              intent="destructive"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              intent="destructive"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Ghost Secondary None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="secondary"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Ghost Inverted None</p>
        <div class="bg-gray-900 w-fit flex gap-6 p-2">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="inverted"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Ghost Reverse Inverted None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              button-name="Button Text"
            />
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="ghost"
              appearance="reverse inverted"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 pl-4">
        <p class="font-bold text-black">BARE</p>
        <p class="text-black">Bare Primary None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent type="bare" button-name="Button Text" />
            <ButtonComponent
              type="bare"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent type="bare" size="large" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" size="small" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent type="bare" size="large" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" size="small" button-name="Button Text">
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent type="bare" size="large" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" size="small" button-name="Button Text">
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent type="bare" size="large" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" size="small" button-name="Button Text">
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent type="bare" button-name="Button Text" disabled>
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Bare Primary Success</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="success"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              intent="success"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              intent="success"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="success"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="success"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="success"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="success"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Bare Primary Destructive</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              intent="destructive"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              intent="destructive"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              intent="destructive"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Bare Secondary None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              appearance="secondary"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="secondary"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="secondary"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Bare Inverted None</p>
        <div class="flex gap-6 bg-gray-900 w-fit p-2">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              appearance="inverted"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="inverted"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="inverted"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
        <p class="text-black">Bare Reverse Inverted None</p>
        <div class="flex gap-6">
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              button-name="Button Text"
            />
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            />
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
            >
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
              <template #append>
                <IconBase>
                  <ChevronDownSmall />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              loading
              size="large"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              loading
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
            <ButtonComponent
              type="bare"
              appearance="reverse inverted"
              loading
              size="small"
              button-name="Button Text"
              disabled
            >
              <template #prepend>
                <IconBase>
                  <PlaceholderIcon />
                </IconBase>
              </template>
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <p class="text-black font-black">CARD</p>
      <CardComponent
        show-header="true"
        show-content="true"
        show-progress="true"
        show-footer="true"
        title="Title"
        sub-title="Task:"
        content="Creating Vue components"
        sub-title2="Created:"
        content2="Mon, 14 Feb 2023"
        sub-title-3="Last Modified:"
        content3="Today, 5:23 am"
        border="secondary"
      >
        <template #titleIcon>
          <IconBase :width="16" :height="16">
            <CalendarIcon />
          </IconBase>
        </template>
        <template #FooterAction>
          <button class="text-gray-600">Details</button>
          <button class="text-blue-500">Mark as resolved</button>
        </template>
      </CardComponent>
      <div class="flex flex-col gap-2">
        <CardComponent
          radius="none"
          size="large"
          show-header="true"
          title="Title"
        >
          <template #headerDescription>
            <div class="text-xs text-content-secondary">Description</div>
          </template>
          <template #headerAction>
            <div class="flex items-center">
              <ButtonComponent type="bare" button-name="Summary" />
              <ButtonComponent type="bare" button-name="Add" />
            </div>
          </template>
        </CardComponent>
        <CardComponent
          radius="none"
          size="large"
          show-header="true"
          title="Title"
        >
          <template #titleIcon>
            <IconBase :width="16" :height="16">
              <CalendarIcon />
            </IconBase>
          </template>
          <template #headerDescription>
            <div class="text-xs text-content-secondary">Description</div>
          </template>
          <template #headerAction>
            <div class="flex items-center">
              <ButtonComponent type="bare" button-name="Summary" />
              <ButtonComponent type="bare" button-name="Add" />
            </div>
          </template>
        </CardComponent>
        <CardComponent
          radius="none"
          size="large"
          show-header="true"
          title="Title"
        >
          <template #headerDescription>
            <div class="text-xs text-content-secondary">Description</div>
          </template>
          <template #titleIcon>
            <AvatarComp size="normal" radius="full" avatar-text="Title" />
          </template>
          <template #headerAction>
            <div class="flex items-center">
              <ButtonComponent type="bare" button-name="Summary" />
              <ButtonComponent type="bare" button-name="Add" />
            </div>
          </template>
        </CardComponent>
      </div>
      <div class="flex gap-2">
        <CardComponent
          show-content="true"
          show-progress="true"
          title="Title"
          sub-title="Task:"
          content="Creating Vue components"
          sub-title2="Created:"
          content2="Mon, 14 Feb 2023"
          sub-title-3="Last Modified:"
          content3="Today, 5:23 am"
          size="medium"
        >
        </CardComponent>
        <CardComponent
          show-content="true"
          show-progress="true"
          title="Title"
          sub-title="Task:"
          content="Creating Vue components"
          sub-title2="Created:"
          content2="Mon, 14 Feb 2023"
          sub-title-3="Last Modified:"
          content3="Today, 5:23 am"
          color="secondary"
          size="medium"
        >
        </CardComponent>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <p class="text-black font-black">INPUT</p>
      <div class="flex gap-6">
        <div class="flex flex-col gap-6">
          <InputComponent placeholder="Input Placeholder" />
          <InputComponent
            showHelperText="true"
            placeholder="Input Placeholder"
          />
          <InputComponent
            showHelperText="true"
            helperTextColor="alert"
            placeholder="Input Placeholder"
          />
        </div>
        <div class="flex flex-col gap-6">
          <InputComponent placeholder="Input Placeholder">
            <template #prepend>
              <IconBase>
                <InfoCircle />
              </IconBase>
            </template>
          </InputComponent>
          <InputComponent placeholder="Input Placeholder">
            <template #append>
              <IconBase>
                <InfoCircle />
              </IconBase>
            </template>
          </InputComponent>
          <InputComponent placeholder="Input Placeholder">
            <template #prepend>
              <IconBase>
                <InfoCircle />
              </IconBase>
            </template>
            <template #append>
              <IconBase>
                <InfoCircle />
              </IconBase>
            </template>
          </InputComponent>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <p class="text-black font-black">CHECKBOX</p>
      <div class="flex gap-6">
        <CheckboxComponent></CheckboxComponent>
        <CheckboxComponent disabled></CheckboxComponent>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <p class="text-black font-black">RADIO</p>
      <div class="flex gap-6">
        <RadioButtonComponent></RadioButtonComponent>
        <RadioButtonComponent></RadioButtonComponent>
        <RadioButtonComponent></RadioButtonComponent>
        <RadioButtonComponent disabled></RadioButtonComponent>
      </div>
    </div>
    <div class="flex flex-col gap-6 pb-20">
      <p class="text-black font-black">DROPDOWN</p>
      <div class="flex gap-6">
        <DropdownComponent :items="selectArray">
          <template #item="{ item }">
            {{ item.value }}
          </template>
        </DropdownComponent>
        <DropdownComponent :items="selectArray">
          <template #item="{ item }">
            {{ item.value }}
          </template>
        </DropdownComponent>
        <DropdownComponent :items="selectArray">
          <template #item="{ item }">
            {{ item.value }}
          </template>
        </DropdownComponent>
        <DropdownComponent :items="selectArray">
          <template #item="{ item }">
            {{ item.value }}
          </template>
        </DropdownComponent>
      </div>
      <div class="flex gap-6">
        <DropdownComponent :items="selectArray">
          <template #item="{ item }">
            {{ item.value }}
          </template>
        </DropdownComponent>
        <DropdownComponent :items="selectArray">
          <template #item="{ item }">
            {{ item.value }}
          </template>
        </DropdownComponent>
        <DropdownComponent :items="selectArray">
          <template #item="{ item }">
            {{ item.value }}
          </template>
        </DropdownComponent>
        <DropdownComponent :items="selectArray">
          <template #item="{ item }">
            {{ item.value }}
          </template>
        </DropdownComponent>
      </div>
    </div>
    <div class="flex flex-col gap-6 pb-20">
      <p class="text-black font-black">DIALOG</p>
      <div class="flex gap-6 flex-col">
        <DialogComponent
          title="Title"
          content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        >
          <template #actions>
            <ButtonComponent size="small" button-name="Actions" />
            <ButtonComponent size="small" button-name="Actions" />
          </template>
        </DialogComponent>
        <DialogComponent
          size="medium"
          title="Title"
          content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        >
          <template #actions>
            <ButtonComponent size="small" button-name="Actions" />
            <ButtonComponent size="small" button-name="Actions" />
          </template>
        </DialogComponent>
        <DialogComponent
          size="large"
          title="Title"
          content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        >
          <template #actions>
            <ButtonComponent size="small" button-name="Actions" />
            <ButtonComponent size="small" button-name="Actions" />
          </template>
        </DialogComponent>
        <DialogComponent title="Title"></DialogComponent>
        <DialogComponent size="medium" title="Title"></DialogComponent>
        <DialogComponent size="large" title="Title">
          <template #titleIcon>
            <IconBase>
              <WarningIcon />
            </IconBase>
          </template>
        </DialogComponent>
        <DialogComponent
          content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        ></DialogComponent>
        <DialogComponent>
          <template #actions>
            <ButtonComponent size="small" button-name="Actions" />
            <ButtonComponent size="small" button-name="Actions" />
          </template>
        </DialogComponent>
        <DialogComponent
          content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        >
          <template #title> Title </template>
        </DialogComponent>
        <DialogComponent>
          <template #title> Title </template>
          <template #actions>
            <ButtonComponent size="small" button-name="Actions" />
            <ButtonComponent size="small" button-name="Actions" />
          </template>
        </DialogComponent>
        <DialogComponent
          content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        >
          <template #actions>
            <ButtonComponent size="small" button-name="Actions" />
            <ButtonComponent size="small" button-name="Actions" />
          </template>
        </DialogComponent>
      </div>
    </div>
  </div>
</template>
