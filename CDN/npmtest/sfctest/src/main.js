import { createApp } from "vue";
import App from "./App.vue";
import GlobalComponent from "./components/01_생성_이용/02_GlobalComponent.vue";
// createApp(App).component("GlobalComponent", GlobalComponent).mount("#app");
// import Emitcontainer from "./components/04_emit/Emitcontainer.vue";
// createApp(Emitcontainer).mount("#app");

// import ProvideContainerComponent from "./components/05_provide_inject/ProvideContainerComponent.vue";
// createApp(ProvideContainerComponent).mount("#app");

import SlotContainer from "./components/06_Slot이용/SlotContainer.vue";
createApp(SlotContainer).mount("#app");
