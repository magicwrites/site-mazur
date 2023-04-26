<script>
	import Redirect from '$components/shared/Redirect.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Links.content';

	$: texts = $isPolish ? pl : en;

	$: columns = Object.keys(texts)
		.join('. .')
		.split('.')
		.map((key) => (key ? texts[key] : null));
</script>

<section
	class="sm:grid sm:grid-cols-2 2xl:grid-cols-11 flex flex-col gap-8 2xl:gap-0 px-8 2xl:px-0"
>
	{#each columns as link}
		{#if link}
			<div class="2xl:col-span-2 flex flex-col xl:flex-row">
				<a href={link.href} target={link.external ? '_blank' : '_self'}>
					<Redirect icon={link.icon}>
						<div class="text-neutral-400 text-xs">{link.label}</div>
						<div>{link.title}</div>
					</Redirect>
				</a>
			</div>
		{:else}
			<div class="hidden 2xl:block" />
		{/if}
	{/each}
</section>
