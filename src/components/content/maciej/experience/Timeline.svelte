<script>
	import Employer from '$components/shared/Employer.svelte';
	import { isPolish } from '$src/stores/language';

	import casumo from '$assets/logo-casumo.webp';
	import fp from '$assets/logo-fp.jpg';

	import { en, pl } from './timeline.content';

	$: texts = $isPolish ? pl : en;
</script>

<div>
	<section class="grid gap-5">
		<Employer name={texts.employers.casumo.name} roles={texts.employers.casumo.roles}>
			<img slot="icon" src={casumo} />
			<div slot="default">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</div>
		</Employer>
		<Employer name={texts.employers.fp.name} roles={texts.employers.fp.roles}>
			<img slot="icon" src={fp} />
			<div slot="default">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</div>
		</Employer>
		<Employer
			name={texts.employers.goodpoint.name}
			roles={texts.employers.goodpoint.roles}
			icon={texts.employers.goodpoint.icon}
		>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</Employer>
		<div class="text-center text-gray-700" style="width: 100px">
			<i class="text-2xl fas fa-person-circle-question" />
		</div>
	</section>
</div>
