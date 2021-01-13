<template>
	<div>
		<main-view></main-view>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MainView from '@/components/MainView.vue'
@Component({
	components: {
		MainView,
	},
})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
