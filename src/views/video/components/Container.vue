<template>
	<div class="video-container">
		<iframe
			id="iframe"
			:src="props.src"
			scrolling="no"
			border="0"
			frameborder="no"
			framespacing="0"
			allowfullscreen="true"
		>
		</iframe>
		<div class="audio">声音↑</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
	props: ['src'],
	setup(props, context) {
		const video = ref(null);

		onMounted(() => {
			const v1 = document.getElementById('iframe');

			const h = v1.offsetHeight;
			const H = document.documentElement.clientHeight;

			v1.style.top = (H - h) / 5 + 'px';
			v1.play();
		});

		return { props, video };
	},
};
</script>
