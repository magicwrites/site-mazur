<script>
	import maciej from '$assets/maciej-chair.jpg';
	import { isPolish } from '$src/stores/language';
	import * as about from './About.content';
	import * as description from './about/Description.content';

	$: texts = $isPolish
		? {
				about: about.pl,
				description: description.pl
		  }
		: {
				about: about.en,
				description: description.en
		  };
</script>

<section class="grid grid-cols-11">
	<div class="col-span-5 flex flex-col gap-32">
		<div class="flex flex-col gap-16">
			<header class="flex flex-col gap-2">
				<h1 class="uppercase text-6xl font-dosis -ml-1">Maciej Mazur</h1>
				<div class="text-neutral-400">{texts.about.job}</div>
			</header>

			<main class="flex flex-col gap-8">
				{#each texts.description.paragraphs as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</main>
		</div>

		<footer class="flex flex-col gap-4">
			{#each texts.about.links as link}
				<div>
					<div class="text-neutral-400 text-sm">{link.label}</div>
					<a
						href={link.href}
						class="border-b border-transparent hover:border-neutral-700 transition inline-block cursor-pointer"
						target="_blank"
					>
						{link.text}
					</a>
				</div>
			{/each}
		</footer>
	</div>

	<div class="col-span-1" />

	<div class="col-span-5 pt-24">
		<div class="border-[64px] border-neutral-100">
			<img src={maciej} alt="maciej" />
		</div>
	</div>
</section>
