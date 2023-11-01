import IndexPage from '@/pages/IndexPage/IndexPage.vue';
import CreateResume from '@/pages/CreateResume/CreateResume.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
	{
		path: '/',
		name: 'index',
		component: IndexPage,
	},
	{
		path: '/create',
		name: 'create',
		component: CreateResume,
	},
];
export default routes;
