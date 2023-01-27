import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@popperjs/core"

// PROGRESS BAR
import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
    color: "#000000",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};

// Vue Writer
import VueWriter from "vue-writer";

createApp(App).use(VueWriter).use(VueProgressBar, options).use(router).mount('#app')
