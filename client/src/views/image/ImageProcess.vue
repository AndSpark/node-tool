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
		></v-file-input>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class ImageProcess extends Vue {}
</script>

<style lang="scss"></style>
