import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import Clipboard from 'v-clipboard'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import PageNotFound from "./components/PageNotFound";
import StblEditor from "./components/Tools/StblEditor";
import StblMerger from "@/components/Tools/StblMerger";
import HomePage from "@/components/HomePage";

Vue.use(BootstrapVue);
Vue.use(Clipboard);

// ----------------------------------------------------------------------
// Routing

const routes = [
    {
        path: '/ts4-tools/stbl-editor',
        component: StblEditor
    },
    {
        path: '/ts4-tools/stbl-merger',
        component: StblMerger
    },
    {
        path: '/page-not-found',
        component: PageNotFound,
        meta: {
            title: 'Page Not Found'
        }
    },
    {
        path: '/',
        component: HomePage
    },
    {
        path: '*',
        redirect: '/page-not-found'
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

// ----------------------------------------------------------------------
// App

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    router: router,
    watch: {
        // eslint-disable-next-line no-unused-vars
        '$route'(to, from) {
            window.scrollTo(0, 0);
        }
    },
    render: h => h(App)
}).$mount('#app');
