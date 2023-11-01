<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue';
interface Props {
	title?: string;
}
withDefaults(defineProps<Props>(), { title: '回到首页' });
</script>

<template>
	<router-link to="/">
		<el-space>
			<el-icon><ArrowLeftBold /></el-icon>
			<p>{{ title }}</p>
		</el-space>
	</router-link>
</template>

<style scoped></style>
