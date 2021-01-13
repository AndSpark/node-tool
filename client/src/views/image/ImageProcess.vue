<template>
	<div id="imageProcess">
		<v-file-input
			accept="image/*"
			prepend-icon="mdi-image"
			counter
			show-size
			small-chips
			multiple
			label="上传图片"
			@change="fileChange"
		></v-file-input>
		<v-btn @click="upload">上传</v-btn>
		<v-card v-for="img in imgList" :key="img.name">
			<v-img :src="img.url"></v-img>
			<v-card-title>{{ img.name }}</v-card-title>
		</v-card>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ImageProcess extends Vue {
	data: FormData | null = null
	imgList: Object[] = []
	fileChange(files: any) {
		const data = new FormData()
		files.forEach((file: any) => {
			data.append('files', file)
		})
		this.data = data
	}
	async upload() {
		let { data } = await this.$http.post('upload/image', this.data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		this.imgList = data
	}
}
</script>

<style lang="scss"></style>
