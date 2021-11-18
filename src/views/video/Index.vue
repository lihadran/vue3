<template>
	<div class="video">
		<container v-if="videos.length > 0" :src="videos[1].video" />
		<top />
		<bottom />

		<asides />
	</div>
</template>
<script>
import axios from '@/axios';
import container from './components/Container';
import top from './components/Top';
import bottom from './components/Bottom';
import asides from './components/Aside';
import '@/assets/css/video.css';
import { ref } from 'vue';

export default {
	components: {
		container,
		top,
		bottom,
		asides,
	},
	setup() {
		const videos = ref([]);
		axios('/video/list/recommend').then((res) => {
			videos.value = res.data;
		});
		return {
			videos,
		};
	},
};
</script>
