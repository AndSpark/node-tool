<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="3">
				<v-sheet rounded="lg" min-height="268">
					<slot name="l"></slot>
				</v-sheet>
			</v-col>

			<v-col cols="12" sm="6">
				<v-sheet min-height="80vh" rounded="lg" class="pa-8 sheet-main">
					<slot name="c"></slot>
				</v-sheet>
			</v-col>

			<v-col cols="12" sm="3">
				<v-sheet rounded="lg" min-height="268">
					<slot name="r"></slot>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class MainView extends Vue {}
</script>

<style lang="scss"></style>
