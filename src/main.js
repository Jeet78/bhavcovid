import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHospital,
  faVial,
  faStethoscope,
  faArrowLeft,
  faBurn,
  faUtensils,
  faCogs,
  faDirections,
  faPhoneAlt,
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([
  faHospital,
  faVial,
  faStethoscope,
  faArrowLeft,
  faBurn,
  faUtensils,
  faCogs,
  faDirections,
  faPhoneAlt,
  faHandHoldingMedical,
]);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
