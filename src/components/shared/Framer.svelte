<script>
	import frame1 from '$assets/frame-1.png';
	import frame2 from '$assets/frame-2.png';
</script>

<section>
	<slot />

	<div class="hidden 2xl:block sm-frame-1 absolute opacity-5">
		<img src={frame1} class="h-full select-none" alt="frame-1" />
	</div>

	<div class="hidden 2xl:block sm-frame-2 absolute opacity-30">
		<img src={frame2} class="h-full select-none" alt="frame-2" />
	</div>
</section>

<style>
	@media (min-width: 1280px) {
	}

	@media (min-width: 1333px) {
	}

	@media (min-width: 1920px) {
		.sm-frame-1 {
			right: 22.5%;
			top: 15.25%;
		}

		.sm-frame-2 {
			right: 0;
			top: 15.25%;
			overflow: hidden;
		}

		.sm-frame-2 img {
			transform: translateX(85px);
		}

		.sm-frame-1 img,
		.sm-frame-2 img {
			height: auto;
			width: 92.5%;
		}
	}
</style>
