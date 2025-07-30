import { createRouter, createWebHistory } from "vue-router";
import PiniaParentComponent from "../PiniaParentComponent.vue";
import PiniaChildComponent from "../PiniaChildComponent.vue";
import PiniaChild2Component from "../PiniaChild2Component.vue";
import MemberContianer from "../MemberContainer.vue";
import DemoContainer from "@/components/demos/DemoContainer.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: PiniaParentComponent },
    { path: "/child", component: PiniaChildComponent },
    { path: "/child2", component: PiniaChild2Component },
    { path: "/member", component: MemberContianer },
    { path: "/demolist", component: DemoContainer },
  ],
});
export default router;
