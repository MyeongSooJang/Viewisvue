import { createApp } from "vue";
import App from "./App.vue";
import GlobalComponent from "./components/01_생성_이용/02_GlobalComponent.vue";

// createApp(App).component("GlobalComponent", GlobalComponent).mount("#app");
// import EmitContainer from "./components/04_emit/EmitContainer.vue";
// createApp(EmitContainer).mount("#app");
// import BordContainerComponent from "./components/board/BordContainerComponent.vue";
// createApp(BordContainerComponent).mount("#app");
// import ProvideContainerComponent from "./components/05_provide_inject/ProvideContainerComponent.vue";
// createApp(ProvideContainerComponent).mount("#app");

// import SlotContainer from "./components/06_slot이용/SlotContainer.vue";
// createApp(SlotContainer).mount("#app");

// import DynamicComponent from "./07_slot다수컴포넌트/DynamicComponent.vue";
// createApp(DynamicComponent).mount("#app");

import RouteApp from "./RouteApp.vue";
import router from "./components/08_라우터/router";
const app = createApp(RouteApp);
app.use(router);
app.mount("#app");
