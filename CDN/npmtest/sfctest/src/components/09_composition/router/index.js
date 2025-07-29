import { createRouter, createWebHistory } from "vue-router";
import RefReactiveComponent from "@/components/09_composition/components/RefReactiveComponent.vue";
import ComputedWatchComponent from "../components/ComputedWatchComponent.vue";
import LifeCycleComponent from "../components/LifeCycleComponent.vue";
import PropsEmitComponent from "../components/PropsEmitComponent.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/refreactive", component: RefReactiveComponent },
    { path: "/computedwatch", component: ComputedWatchComponent },
    { path: "/lifecycle", component: LifeCycleComponent },
    { path: "/propsemit", component: PropsEmitComponent },
  ],
});
