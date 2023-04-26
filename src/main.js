import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//components
import InputComponent from "@/components/InputComponent.vue";

//icon components
import IconBase from "@/components/icons/IconBase.vue";
import WifiIcon from "@/components/icons/WifiIcon.vue";
import InfoCircle from "@/components/icons/InfoCircle.vue";
import WarningFill from "@/components/icons/WarningFill.vue";
import ChevronRightSmall from "@/components/icons/ChevronRightSmall.vue";
import ChevronDownSmall from "@/components/icons/ChevronDownSmall.vue";
import WarningIcon from "@/components/icons/WarningIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import HomeIcon from "@/components/icons/Home.vue";
import CalendarIcon from "@/components/icons/Calendar.vue";
import PlaceholderIcon from "@/components/icons/Placeholder.vue";
import AlertFill from "@/components/icons/AlertFill.vue";
import CheckSmall from "@/components/icons/CheckSmall.vue";
import MinusIcon from "@/components/icons/MinusIcon.vue";

import "./assets/main.css";

const app = createApp(App);

app.component("IconBase", IconBase);
app.component("WifiIcon", WifiIcon);
app.component("InfoCircle", InfoCircle);
app.component("ChevronDownSmall", ChevronDownSmall);
app.component("ChevronRightSmall", ChevronRightSmall);
app.component("WarningFill", WarningFill);
app.component("WarningIcon", WarningIcon);
app.component("CloseIcon", CloseIcon);
app.component("HomeIcon", HomeIcon);
app.component("PlaceholderIcon", PlaceholderIcon);
app.component("CalendarIcon", CalendarIcon);
app.component("AlertFill", AlertFill);
app.component("CheckSmall", CheckSmall);
app.component("MinusIcon", MinusIcon);
app.component("InputComponent", InputComponent);

app.use(createPinia());
app.use(router);

app.mount("#app");
