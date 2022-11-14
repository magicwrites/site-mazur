<script>
	import Preface from '$components/shared/Preface.svelte';
	import qr from '$assets/qr-code-marcelina.png';

	let age = new Date().getFullYear() - 1987;
</script>

<div class="flex flex-col gap-8">
	<section class="flex flex-col gap-4">
		<div>Osobiste</div>

		<div class="grid grid-cols-4 gap-1 w-3/4 text-xs">
			<div class="text-gray-400">data urodzenia</div>
			<div class="col-span-3">
				<span>10-05-1987</span>
				<span class="text-gray-400">- {age} lat</span>
			</div>
			<div class="text-gray-400">lokalizacja</div>
			<div class="col-span-3">Gliwice, Poland</div>
			<div class="text-gray-400">języki obce</div>
			<div class="col-span-3">angielski B2</div>
		</div>

		<div class="grid grid-cols-4 gap-1 w-3/4 text-xs">
			<div class="text-gray-400">programy księgowe</div>
			<div class="col-span-3">
				<span>symfonia finanse i księgowość</span>
				<span class="text-gray-400">/</span>
				<span>optima</span>
			</div>
			<div class="text-gray-400">programy inne</div>
			<div class="col-span-3">excel</div>
		</div>

		<div class="grid grid-cols-4 gap-1 w-3/4 text-xs">
			<div class="text-gray-400">stan cywilny</div>
			<div class="col-span-3">
				<span>zamężna</span>
				<span class="text-gray-400">/</span>
				<span>dwójka dzieci</span>
			</div>
			<div class="text-gray-400">zainteresowania</div>
			<div class="col-span-3">
				<span>squash</span>
				<span class="text-gray-400">/</span>
				<span>książki</span>
				<span class="text-gray-400">/</span>
				<span>psychologia</span>
				<span class="text-gray-400">/</span>
				<span>gra na fortepianie</span>
			</div>
		</div>
	</section>

	<div class="flex items-center justify-end gap-4">
		<section class="flex flex-col gap-3 items-end text-xs">
			<div class="flex items-center gap-3">
				<div>
					<span class="text-gray-400">numer telefonu</span>
					<span>+48 697 952 558</span>
				</div>
			</div>

			<div class="flex items-center gap-3">
				<div>
					<span class="text-gray-400">po więcej informacji udaj się na</span>
					<span>www.marcelina.mazur.site</span>
				</div>
			</div>
		</section>

		<img src={qr} class="w-12" alt="qr-code" />
	</div>
</div>
