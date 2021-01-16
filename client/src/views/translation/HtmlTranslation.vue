<template>
	<div id="HtmlTranslation">
		<v-snackbar v-model="translating" centered>
			<v-progress-circular indeterminate color="green"></v-progress-circular>
			正在翻译中
		</v-snackbar>
		<main-view>
			<template v-slot:l> </template>
			<template v-slot:c>
				<v-row align="center">
					<v-file-input
						accept=".html"
						prepend-icon="mdi-language-html5"
						counter
						show-size
						small-chips
						multiple
						label="选择需要翻译的网页"
						@change="fileChange"
						@drop.native="drop"
					></v-file-input>
					<v-btn class="ml-10" @click="upload" v-if="!translating && !translated">确认上传</v-btn>
					<v-btn class="ml-10" @click="download" v-if="translated">确认并下载</v-btn>
				</v-row>
				<v-subheader v-if="translated" class="pa-0">
					请确认下方翻译后的文本，确认后点击右方下载按钮。如需要修改请自行修改翻译后的文本。
				</v-subheader>
				<v-card v-if="htmlArr.length && htmlArr[0].words" class="mt-10">
					<v-card-title>
						<v-tabs center-active v-model="html">
							<v-tab v-for="html in htmlArr" :key="html.name" style="text-transform:none">
								{{ html.name }}
							</v-tab>
						</v-tabs>
					</v-card-title>
					<v-divider></v-divider>
					<v-card-text>
						<v-tabs-items v-model="html" style="overflow-y:auto;height:50vh">
							<v-tab-item v-for="html in htmlArr" :key="html.name">
								<v-row v-for="(word, i) in html.words" :key="i">
									<v-col cols="6">
										<v-textarea
											auto-grow
											v-model="word.origin"
											label="原文本"
											readonly
										></v-textarea>
									</v-col>
									<v-col cols="6">
										<v-textarea auto-grow v-model="word.local" label="翻译后"></v-textarea>
									</v-col>
								</v-row>
							</v-tab-item>
						</v-tabs-items>
					</v-card-text>
				</v-card>
			</template>
			<template v-slot:r>
				<v-sheet class="pa-10">
					<v-subheader> <v-icon>mdi-ab-testing</v-icon>选择翻译语言</v-subheader>
					<v-radio-group v-model="lang" class="px-5">
						<v-radio :value="1" label="中文 翻译为 英文"></v-radio>
						<v-radio :value="2" label="英文 翻译为 中文"></v-radio>
					</v-radio-group>
				</v-sheet>
			</template>
		</main-view>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainView from '@/components/MainView.vue'
import render from './htmlTranslation/render'
import JSZip from 'jszip'
@Component({
	components: {
		MainView,
	},
})
export default class HtmlTranslation extends Vue {
	data: FormData | null = null
	htmlArr: any[] = []
	html: any = null
	translatedHtmlArr: any[] = []
	translating: boolean = false
	translated: boolean = false
	lang = 1
	fileChange(files: File[]) {
		this.translated = false
		this.htmlArr = []
		files.forEach(file => {
			let reader = new FileReader()
			reader.onload = e => {
				this.htmlArr.push({
					name: file.name,
					html: e.target?.result,
				})
			}
			reader.readAsText(file)
		})
	}

	drop(e: any) {
		e.preventDefault()
		e.stopPropagation()
		console.log(e)
		return false
	}
	dragover(e: DragEvent) {
		e.preventDefault()
		e.stopPropagation()
		return false
	}
	funcDownload(content: any, filename: string) {
		var eleLink = document.createElement('a')
		eleLink.download = filename
		eleLink.style.display = 'none'
		// 字符内容转变成blob地址
		var blob = new Blob([content], {
			type: 'application/zip',
		})
		eleLink.href = URL.createObjectURL(blob)
		// 触发点击
		document.body.appendChild(eleLink)
		eleLink.click()
		// 然后移除
		document.body.removeChild(eleLink)
	}

	async download() {
		let zip = new JSZip()
		let htmlDir = zip.folder('html')

		this.htmlRender()
		this.translatedHtmlArr.forEach(v => {
			htmlDir?.file(v.name, v.html)
		})
		let content = await zip.generateAsync({ type: 'blob' })
		this.funcDownload(content, 'html.zip')
	}

	htmlRender() {
		this.translatedHtmlArr = this.htmlArr.map(v => {
			return {
				name: v.name,
				html: render(v.html, v.words),
				words: v.words,
			}
		})
	}

	async upload() {
		this.translating = true
		let htmlInfo = {
			htmlArr: this.htmlArr,
			lang: this.lang,
		}
		let { data } = await this.$http.post('/translation/html', htmlInfo)
		this.translating = false
		this.translated = true
		this.htmlArr = data.map((v: any) => {
			return {
				name: v.name,
				html: v.html,
				words: JSON.parse(v.json),
			}
		})
	}
}
</script>

<style lang="scss"></style>
