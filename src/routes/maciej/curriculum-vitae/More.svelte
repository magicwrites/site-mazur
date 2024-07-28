<script>
	import Preface from '$components/shared/Preface.svelte';
	import qr from '$assets/qr-code-maciej.webp';

	let age = new Date().getFullYear() - 1988;
</script>

<div class="flex flex-col gap-8">
	<h3 class="font-medium">Personal information</h3>

	<div class="grid grid-cols-2 items-end">
		<section class="flex flex-col gap-4">
			<div class="grid grid-cols-4 gap-1 text-xs">
				<div>born:</div>
				<div class="col-span-3">
					<span>15-07-1988</span>
					<span>- {age} years old</span>
				</div>
				<div>location:</div>
				<div class="col-span-3">Gliwice, Poland</div>
				<div>timezone:</div>
				<div class="col-span-3">Central European Time</div>
			</div>
		</section>

		<div class="flex items-center justify-end gap-4">
			<section class="flex flex-col gap-3 items-end text-xs">
				<div class="flex items-center gap-3">
					<div>
						<span>reach me at</span>
						<span>maciej@mazur.site</span>
					</div>
				</div>

				<div class="flex items-center gap-3">
					<div>
						<span>for more information visit</span>
						<span>maciej.mazur.site</span>
					</div>
				</div>
			</section>

			<img src={qr} class="w-12" alt="qr-code" />
		</div>
	</div>
</div>
