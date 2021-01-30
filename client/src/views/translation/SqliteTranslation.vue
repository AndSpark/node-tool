<template>
	<div id="SqliteTranslation">
		<v-snackbar :timeout="-1" v-model="isUploading" centered>
			<v-progress-circular indeterminate color="green"></v-progress-circular>
			正在上传翻译中,还剩{{ translatingNumber }}个翻译中
		</v-snackbar>
		<main-view>
			<template v-slot:l>
				<v-sheet class="pa-5">
					<p>* 选择数据库文件上传</p>
					<p>* 内容越多翻译时间越久</p>
					<p>* 目前只能对单一语言数据库翻译（例如只有en或cn）</p>
				</v-sheet>
			</template>
			<template v-slot:c>
				<v-row align="center">
					<v-file-input
						accept=".db"
						prepend-icon="mdi-file"
						counter
						show-size
						small-chips
						label="选择数据库文件上传"
						@change="fileChange"
					></v-file-input>

					<v-btn class="ml-10" @click="upload" v-if="!isUploading && !hadUploaded">确认上传</v-btn>
					<v-btn class="ml-10" v-if="hadUploaded" :href="downloadUrl">下载</v-btn>
					<v-img src="@/assets/lang.png" class="mt-10"></v-img>
				</v-row>
			</template>
			<template v-slot:r>
				<v-sheet class="pa-5">
					<v-text-field v-model="sqliteInfo.lang" label="当前语言代码"></v-text-field>
					<v-text-field v-model="sqliteInfo.translateAcode" label="翻译后语言代码"></v-text-field>
					<v-text-field v-model="sqliteInfo.acode" label="当前区域编码"></v-text-field>
					<v-text-field v-model="sqliteInfo.translateLang" label="翻译后区域编码"></v-text-field>
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
export default class SqliteTranslation extends Vue {
	data: FormData | null = null
	sqliteInfo = {
		acode: 'cn',
		lang: 'zh',
		translateAcode: 'en',
		translateLang: 'en',
	}
	hadUploaded = false
	isUploading = false
	downloadUrl = ''
	translatingNumber = ''
	fileChange(file: File) {
		this.data = new FormData()
		this.hadUploaded = false
		if (file) {
			this.data?.append('file', file)
		}
	}

	async upload() {
		this.isUploading = true

		let { data } = await this.$http.post('upload/sqlite', this.data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		let { data: wsUrl } = await this.$http.post('product/translate', {
			sqliteInfo: this.sqliteInfo,
			file: data[0],
		})

		const ws = new WebSocket(wsUrl)

		ws.onmessage = msg => {
			if (msg.data.length < 5) {
				this.translatingNumber = msg.data
			} else {
				this.downloadUrl = msg.data
				this.hadUploaded = true
				this.isUploading = false
			}
		}
		ws.onerror = function() {
			console.log('err')
		}
		ws.onclose = function() {
			console.log('close')
		}
	}
}
</script>

<style lang="scss"></style>
