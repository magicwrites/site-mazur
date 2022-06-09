<script>
	export let name = null;
	export let roles = [];
	export let icon = 'fas fa-handshake';
	export let iconUrl = null;
</script>

<div class="text-gray-700">
	<section class="flex">
		<header class="flex flex-col items-center h-auto">
			<div
				class="rounded-full border border-gray-700 text-gray-700 flex"
				style="min-width: 100px; min-height: 100px"
			>
				{#if $$slots.icon}
					<div class="m-auto w-16 max-h-16">
						<slot name="icon" />
					</div>
				{:else}
					<i class="m-auto text-2xl {icon}" />
				{/if}
			</div>
			<div class="mt-5 w-1 flex-grow rounded bg-gray-500" />
		</header>
		<main class="ml-10 pt-8 mt-0.5">
			<div class="text-2xl font-varela">{name}</div>
			<section class="pb-4 text-gray-400 font-work text-xs">
				{#each roles as role (role.name)}
					<div class="flex">
						<div class="col-span-7 w-48">{role.name}</div>
						<div class="text-gray-300">
							<span>{role.from}</span>
							{#if role.to}
								<span>- {role.to}</span>
							{:else}
								<span>+</span>
							{/if}
						</div>
					</div>
				{/each}
			</section>
			<div class="text-gray-400 font-work">
				<slot />
			</div>
		</main>
	</section>
</div>
