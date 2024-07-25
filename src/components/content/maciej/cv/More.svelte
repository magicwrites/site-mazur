<script>
	import Preface from '$components/shared/Preface.svelte';
	import qr from '$assets/qr-code-maciej.webp';

	let age = new Date().getFullYear() - 1988;
</script>

<div class="flex flex-col gap-8">
	<section class="flex flex-col gap-4">
		<div>Personal information</div>

		<div class="grid grid-cols-4 gap-1 w-2/3 text-xs">
			<div class="text-gray-400">born</div>
			<div class="col-span-3">
				<span>15-07-1988</span>
				<span class="text-gray-400">- {age} years old</span>
			</div>
			<div class="text-gray-400">location</div>
			<div class="col-span-3">Gliwice, Poland</div>
			<div class="text-gray-400">timezone</div>
			<div class="col-span-3">central european time - CET or CEST</div>
		</div>

		<div class="grid grid-cols-4 gap-1 w-2/3 text-xs">
			<div class="text-gray-400">civil status</div>
			<div class="col-span-3">
				<span>married</span>
				<span class="text-gray-400">/</span>
				<span>two kids</span>
			</div>
			<div class="text-gray-400">relocation</div>
			<div class="col-span-3">no</div>
			<div class="text-gray-400">remote work</div>
			<div class="col-span-3">yes</div>
			<div class="text-gray-400">can invoice</div>
			<div class="col-span-3">
				<span>yes</span>
				<span class="text-gray-400"> - owner of a company</span>
			</div>
		</div>
	</section>

	<div class="flex items-center justify-end gap-4">
		<section class="flex flex-col gap-3 items-end text-xs">
			<div class="flex items-center gap-3">
				<div>
					<span class="text-gray-400">reach me at</span>
					<span>maciej@mazur.site</span>
				</div>
			</div>

			<div class="flex items-center gap-3">
				<div>
					<span class="text-gray-400">for more information visit</span>
					<span>www.maciej.mazur.site</span>
				</div>
			</div>
		</section>

		<img src={qr} class="w-12" alt="qr-code" />
	</div>
</div>
