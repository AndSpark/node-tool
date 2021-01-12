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
			<v-container>
				<v-row>
					<v-col cols="12" sm="2">
						<v-sheet rounded="lg" min-height="268">
							<!--  -->
						</v-sheet>
					</v-col>

					<v-col cols="12" sm="8">
						<v-sheet min-height="70vh" rounded="lg" class="pa-8">
							<router-view></router-view>
						</v-sheet>
					</v-col>

					<v-col cols="12" sm="2">
						<v-sheet rounded="lg" min-height="268">
							<!--  -->
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
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
				link: '/',
			},
			{
				label: '数据库翻译',
				link: '/',
			},
			{
				label: '网页翻译',
				link: '/',
			},
		],
	}),
})
</script>
