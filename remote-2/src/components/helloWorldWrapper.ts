import { createApp } from "vue";
import HelloWorldVue from "./HelloWorld.vue";

export default function (element: Element) {
  createApp(HelloWorldVue).mount(element);
}
