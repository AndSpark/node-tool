<template>
	<div id="ProductUpload">
		<v-snackbar v-model="isUploading" centered :timeout="-1">
			<v-progress-circular indeterminate color="green"></v-progress-circular>
			正在上传中
		</v-snackbar>
		<main-view>
			<template v-slot:l>
				<v-sheet class="pa-5">
					<p>* 压缩包内有 product 文件夹 和 数据库文件</p>
					<p>* product内文件夹根据分类分类,如下示意</p>
					<v-divider></v-divider>
					<v-treeview v-model="tree" :items="items" activatable item-key="name" open-on-click>
						<template v-slot:prepend="{ item, open }">
							<v-icon v-if="!item.file">
								{{ open ? 'mdi-folder-open' : 'mdi-folder' }}
							</v-icon>
							<v-icon v-else>
								{{ files[item.file] }}
							</v-icon>
						</template>
					</v-treeview>
				</v-sheet>
			</template>
			<template v-slot:c>
				<v-row align="center">
					<v-file-input
						accept=".zip"
						prepend-icon="mdi-language-html5"
						counter
						show-size
						small-chips
						label="选择产品压缩包.zip上传"
						@change="fileChange"
					></v-file-input>

					<v-btn class="ml-10" @click="upload" v-if="!isUploading && !hadUploaded">确认上传</v-btn>
					<v-btn class="ml-10" v-if="hadUploaded" :href="downloadUrl">下载</v-btn>
				</v-row>
			</template>
			<template v-slot:r>
						<v-sheet class="pa-5">
					<v-text-field v-model="sqliteInfo.sitename" label="站点文件夹名"></v-text-field>

						<v-card-title>
						<span class="text-subtitle-1">产品名是否为图片名</span>
						<v-spacer></v-spacer>
						<v-checkbox v-model="sqliteInfo.isFileName"></v-checkbox>
					</v-card-title>

				</v-sheet>
				</template>
		</main-view>
	</div>
</template>

<script lang="ts">
import MainView from '@/components/MainView.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({
	components: {
		MainView,
	},
})
export default class ProductUpload extends Vue {
	data: FormData | null = null
	sqliteInfo = {
		sitename: 'fushi',
		pcode: 2,
		acode: 'cn',
		isFileName: true,
	}

	files = {
		md: 'mdi-language-markdown',
		png: 'mdi-file-image',
		txt: 'mdi-file-document-outline',
	}
	items = [
		{
			name: 'product',
			children: [
				{
					name: '冰箱',
					children: [
						{
							name: 'logo.png',
							file: 'png',
						},
					],
				},
				{
					name: '洗衣机',
					children: [
						{
							name: 'logo.png',
							file: 'png',
						},
					],
				},
				{
					name: '空调',
					children: [
						{
							name: 'logo.png',
							file: 'png',
						},
					],
				},
			],
		},
		{
			name: '878490a6ab380cf5bb4e7c97387e6850.db',
			file: 'txt',
		},
	]

	hadUploaded = false
	isUploading = false
	downloadUrl = ''
	fileChange(file: File) {
		this.data = new FormData()
		this.hadUploaded = false
		if (file) {
			this.data?.append('file', file)
		}
	}

	async upload() {
		this.isUploading = true

		let { data } = await this.$http.post('upload/product', this.data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		this.downloadUrl = (
			await this.$http.post('product', {
				sqliteInfo: this.sqliteInfo,
				file: data[0],
			})
		).data
		this.$nextTick().then(_ => {
			this.hadUploaded = true

			this.isUploading = false
		})
	}
}
</script>

<style lang="scss"></style>
