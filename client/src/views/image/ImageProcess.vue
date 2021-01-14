<template>
	<div id="imageProcess">
		<MainView>
			<template v-slot:l>
				<div class="pa-5"></div>
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
						@click:clear="imagesInfo.list = []"
					></v-file-input>
					<v-btn @click="upload" class="ml-10">确认上传</v-btn>
				</v-row>
				<v-row class="mt-10">
					<v-col cols="3" v-for="img in currentImages" :key="img.name">
						<v-card style="height:100%">
							<v-img :src="img.url" contain height="200"></v-img>
							<v-divider></v-divider>
							<v-card-title>{{ img.name }}</v-card-title>
							<v-card-subtitle>{{ img.size | fileSize }}</v-card-subtitle>
						</v-card>
					</v-col>
				</v-row>
				<v-pagination
					v-if="imagesInfo.totalPage"
					v-model="imagesInfo.page"
					:length="imagesInfo.totalPage"
					:total-visible="7"
					class="my-5"
				></v-pagination>
			</template>
			<template v-slot:r>
				<v-card>
					<v-card-title>
						<v-icon class="pr-4">mdi-scissors-cutting</v-icon>
						<span class="text-subtitle-1">尺寸修改</span>
						<v-spacer></v-spacer>
						<v-checkbox v-model="sharpInfo.isSize"></v-checkbox>
					</v-card-title>
					<v-card-text>
						<v-row>
							<v-col>
								<v-text-field
									label="宽度(px)"
									v-model.number="sharpInfo.width"
									clearable
								></v-text-field>
							</v-col>
							<v-col>
								<v-text-field
									label="高度(px)"
									v-model.number="sharpInfo.height"
									clearable
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col>
								<v-text-field
									label="X轴边距(px)"
									clearable
									v-model.number="sharpInfo.XPadding"
								></v-text-field>
							</v-col>
							<v-col>
								<v-text-field
									label="Y轴边距(px)"
									clearable
									v-model.number="sharpInfo.YPadding"
								></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-checkbox
								v-model="sharpInfo.isSameRate"
								@click="sharpInfo.isSameRate ? 0 : (sharpInfo.sameRateSize = '')"
							></v-checkbox>
							<v-text-field
								label="保持长宽比(如 1000: 500)"
								v-model="sharpInfo.sameRateSize"
							></v-text-field>
						</v-row>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-title>
						<v-icon class="pr-4">mdi-image</v-icon>
						<span class="text-subtitle-1">图片压缩</span>
						<v-spacer></v-spacer>
						<v-checkbox v-model="sharpInfo.isCompress"></v-checkbox>
					</v-card-title>
				</v-card>
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

	imagesInfo: any = {
		// 界面显示图片信息
		list: [],
		get totalPage() {
			return Math.ceil(this.list.length / this.limit)
		},
		page: 1,
		limit: 12,
	}

	sharpInfo = {
		// 图片处理信息
		isSize: true,
		isCompress: true,
		width: 1000,
		height: 1000,
		XPadding: 100,
		YPadding: 100,
		isSameRate: false,
		get sameRate() {
			let arr: string[] = this.sameRateSize.split(':')
			let rate = (Number(arr[0]) / Number(arr[1])).toFixed(5)
			return rate
		},
		sameRateSize: '',
	}

	imageProcess = {
		sharpInfo: this.sharpInfo,
		files: [],
	}

	download = ''

	get currentImages() {
		let start = (this.imagesInfo.page - 1) * this.imagesInfo.limit
		let end = start + this.imagesInfo.limit
		return this.imagesInfo.list.slice(start, end)
	}

	fileChange(files: File[]) {
		const data = new FormData()
		files.forEach((file: any) => {
			data.append('files', file)
		})
		this.showImage(files)
		this.data = data
	}

	showImage(files: File[]) {
		this.imagesInfo.list = []
		files.map(file => {
			let reader = new FileReader()
			reader.onload = e => {
				this.imagesInfo.list.push({
					name: file.name,
					size: file.size,
					url: e.target?.result,
				})
			}
			reader.readAsDataURL(file)
		})
	}

	async upload() {
		let { data } = await this.$http.post('upload/image', this.data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		this.imageProcess.files = data
		this.process()
	}

	async process() {
		let { data } = await this.$http.post('image/process', this.imageProcess)
		this.download = data.download
		let filesInfo = data.filesInfo
		this.imagesInfo.list = this.imagesInfo.list.map((img: any) => {
			let afterImg = filesInfo.find((v: any) => {
				return img.name === v.name
			})
			return {
				name: img.name,
				size: afterImg.size,
				url: afterImg.url,
			}
		})
	}
}
</script>

<style lang="scss"></style>
