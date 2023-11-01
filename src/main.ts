import { createApp } from 'vue';
import '@/style/global.css';
import 'element-plus/dist/index.css';
import { createRouter, createWebHashHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import App from './App.vue';
import './samples/node-api';
import routes from '@/router/index';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
});
app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.mount('#app').$nextTick(() => {
	postMessage({ payload: 'removeLoading' }, '*');
});
