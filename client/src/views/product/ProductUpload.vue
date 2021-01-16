<template>
	<div id="ProductUpload">
		<main-view>
			<template v-slot:l>
				<v-sheet class="pa-5">
					<p></p>
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
						label="选择产品压缩包上传"
						@change="fileChange"
					></v-file-input>
					<v-btn class="ml-10" @click="upload" v-if="!hadUploaded">确认上传</v-btn>
					<v-btn class="ml-10" @click="download" v-if="hadUploaded">下载</v-btn>
				</v-row>
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
	data: FormData | null = new FormData()
	sqliteInfo = {
		sitename: 'fushi',
		pcode: 2,
		acode: 'cn',
	}
	filename = ''
	hadUploaded = false
	isUploading = false
	fileChange(file: File) {
		this.hadUploaded = false
		if (file) {
			this.data?.append('file', file)
		}
	}
	async upload() {
		this.isUploading = true
		await this.$http.post('upload/product', this.data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		// let { data } = await this.$http.post('product', this.sqliteInfo)
		// this.isUploading = false
		// this.hadUploaded = true
	}
	async download() {}
}
</script>

<style lang="scss"></style>
