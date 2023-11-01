<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
	<div class="init-wrapper">
		<p class="title">{{ msg }}</p>
		<router-link to="/create">
			<el-button type="primary">创建简历</el-button>
		</router-link>
		<el-button type="primary">编辑简历</el-button>
	</div>
</template>

<style scoped lang="less">
.init-wrapper {
	font-family: STKaiti;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	:deep(.el-button:first-child) {
		margin-right: 10px;
	}
	.title {
		@apply font-bold text-center;
		font-size: 50px;
	}
}
</style>
