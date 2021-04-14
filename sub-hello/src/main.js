import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';
import actions from './utils/actions';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
    const { container } = props;
    console.log('sub hello ==>', container);
    router = new VueRouter({
        // base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
        // mode: 'history',
        routes,
    });

    // 判断 qiankun 环境则进行路由拦截，判断跳转路由是否有 /micro 开头前缀，没有则加上
    // if (window.__POWERED_BY_QIANKUN__) {
    //     router.beforeEach((to, from, next) => {
    //         console.log('to ==>', to);
    //         if (!to.path.includes('/vue')) {
    //             next({
    //                 path: '/vue' + to.path
    //             })
    //         } else {
    //             next()
    //         }
    //     })
    // }

    instance = new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('vue app bootstraped');
}

export async function mount(props) {
    console.log('props from main app - vue', props);

    // 注入actions
    actions.setActions(props);

    render(props);
}

export async function unmount() {
    instance.$destroy();
    instance = null;
    router = null;
}