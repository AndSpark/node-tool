<template>
	<v-app>
		<v-app-bar app color="white" flat>
			<v-avatar
				:color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
				size="32"
			></v-avatar>

			<v-tabs centered class="ml-n9" color="grey darken-1">
				<v-tab v-for="link in links" :key="link.label" :to="link.link">
					{{ link.label }}
				</v-tab>
			</v-tabs>

			<v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="32"></v-avatar>
		</v-app-bar>

		<v-main class="grey lighten-3">
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'App',

	components: {},

	data: () => ({
		links: [
			{
				label: '主页',
				link: '/',
			},
			{
				label: '图片处理',
				link: '/image',
			},
			{
				label: '产品上传',
				link: '/productUpload',
			},
			{
				label: '数据库翻译',
				link: '/sqliteTranslation',
			},
			{
				label: '网页翻译',
				link: '/htmlTranslation',
			},
		],
	}),
})
</script>
