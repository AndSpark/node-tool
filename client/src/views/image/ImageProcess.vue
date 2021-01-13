<template>
	<div id="imageProcess">
		<MainView>
			<template v-slot:l>
				<div class="pa-5">
					<p>1.前端显示未修改前图片，分页，节省内存</p>
					<p>2.修改后显示服务端修改后图片，分页，</p>
				</div>
			</template>
			<template v-slot:c>
				<v-row align="center">
					<v-file-input
						accept="image/*"
						prepend-icon="mdi-image"
						counter
						show-size
						small-chips
						multiple
						label="选择上传图片"
						@change="fileChange"
						@click:clear="imgList = []"
					></v-file-input>
					<v-btn @click="upload" class="ml-10">确认上传</v-btn>
				</v-row>
				<v-row class="mt-10">
					<v-col cols="2" v-for="img in imgList" :key="img.originalname">
						<v-card style="height:100%">
							<v-img :src="img.url" contain height="200"></v-img>
							<v-divider></v-divider>
							<v-card-title>{{ img.originalname }}</v-card-title>
							<v-card-subtitle>{{ img.size | fileSize }}</v-card-subtitle>
						</v-card>
					</v-col>
				</v-row>
			</template>
		</MainView>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainView from '@/components/MainView.vue'
@Component({
	components: {
		MainView,
	},
	filters: {
		fileSize(size: number): string | undefined {
			if (size < 1024) {
				return size + 'B'
			} else if (size < 1024 * 1024) {
				return (size / 1024).toFixed(2) + 'kB'
			} else if (size < 1024 * 1024 * 1024) {
				return (size / 1024 / 1024).toFixed(2) + 'MB'
			}
		},
	},
})
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
