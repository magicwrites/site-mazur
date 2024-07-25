<script lang="ts">
	// import Logo from '$components/shared/logo/application/Logo.svelte';
	// import Button from '$components/shared/button/basic/Basic.svelte';
	// import Arrow from '$components/shared/link/arrow/Arrow.svelte';
</script>

<div class="flex flex-col items-center font-work">
	<section class="flex flex-col gap-24 w-[640px] p-8 pt-16">
		<a href="/maciej"> logo </a>

		<article class="flex flex-col gap-8">
			<header class="flex flex-col gap-1">
				<h2 class="text-3xl">Aplikacja do faktur</h2>
				<aside class="text-sm text-neutral-400">Studium przypadku</aside>
			</header>

			<section class="flex flex-col gap-8">
				<p>
					Prace nad aplikacją rozpoczęły się na początku 2020 roku, a sam projekt przeżył już trzy
					odsłony:
				</p>

				<ol class="list-decimal pl-16">
					<li>wersja prototypowa</li>
					<li>wersja pełna: mikro-serwisowa, rozszerzona</li>
					<li>wersja obecna: uproszczona, skorygowana</li>
				</ol>

				<section class="flex flex-col gap-4">
					<p>
						Efekt wydaje mi się już wystarczająco interesujący aby pohylić się nad jego kształtem
						technicznym, opisać proces w ramach którego powstawał i wyciągnąć kilka - być może
						osobistych - wniosków.
					</p>

					<strong class="font-semibold">
						Opiszę więc owe dwa fundamenty projektu: sposób w jaki zarządzam swoją pracą oraz wybory
						techniczne, które uformowały aplikację.
					</strong>
				</section>

				<section class="flex flex-col gap-4">
					<h3 class="text-xl">Jak do tego podejść</h3>

					<p>
						Przygotowanie nawet najprostszej aplikacji wymaga znaczącej ilości pracy sięgającej
						tygodni, miesięcy a czasami lat. Projekty jednoosobowe a&nbsp;w&nbsp;szczególności te
						wykonywane "po godzinach" muszą zachować minimalistyczne cele aby mieć jakiekolwiek
						szanse na realizację.
					</p>

					<strong class="font-semibold">
						Świadomy ryzyka, już na wczesnym etapie życia projektu zdecydowałem się na ścisłą
						kontrolę czasu i energii poświecanej na eleganckie faktury.
					</strong>

					<p>
						Przyjąłem cel, niejako "uzasadnienie biznesowe", którego wypełnieniem miała stać się
						aplikacja. Zarysowałem minimum funkcjonalności, które były konieczne przy tworzeniu
						faktury i porzuciłem te z nich, które wydały mi się nadmiarowe. Co miało się jeszcze
						okazać - byłem niewystarczająco krytyczny w tym względzie.
					</p>

					<p>
						Podstawowe założenie, które motywowało mnie do podjęcia tego wyzwania opisałem w <a
							href="/blog/manifest"
							target="_blank"
							class="underline">manifeście</a
						>. Połączyłem to przesłanie z okazją do rozwoju własnego zaplecza technicznego i
						umiejętności prowadzenia projektu. Razem uzasadniło to sporą inwestycję w opisywaną
						inicjatywę.
					</p>

					<p>
						Ostatecznie podzieliłem pracę na kamienie milowe i przypisałem im pożądane ramy czasowe:
					</p>
				</section>

				<ol class="list-decimal pl-16">
					<li>analiza i wybór technologii pod realizację celów</li>
					<li>dowód koncepcji poprzez wdrożenie wybranych technologii</li>
					<li>wersja prototypowa: pierwszy realny interfejs graficzny</li>
					<li>wersja pełna: uzupełnienie podstawowych funkcjonalności</li>
					<li>
						<strong class="font-semibold"
							>wersja uporządkowana: druga iteracja pracy nad aplikacją</strong
						>
					</li>
					<li>publikacja: premiera i wstępna weryfikacja przez użytkowników</li>
					<li>
						<strong class="font-semibold"
							>wersja produkcyjna: trzecia iteracja pracy nad aplikacją</strong
						>
					</li>
				</ol>

				<section class="flex flex-col gap-4">
					<strong class="font-semibold"
						>Celem ram czasowych nie była realizacja projektu w założonym odgórnie terminie - była
						nim próba oszacowania czasu koniecznego aby wykonać cały proces budowy aplikacji, który
						uważałem za minimalny i niezbędny.</strong
					>
				</section>

				<section class="flex flex-col gap-4">
					<h3 class="text-xl">Jak to poskładać</h3>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, maxime similique
						distinctio placeat voluptatum quod magnam eum asperiores esse ut voluptatibus molestias
						aut sed reprehenderit a. Dolorum animi atque porro!
					</p>
				</section>
			</section>
		</article>

		<footer class="grid grid-cols-2 gap-4 print:hidden">
			<a href="/maciej">
				powrót
				<!-- <Arrow reverse icon="fas fa-arrow-left">
					<div>blog</div>
				</Arrow> -->
			</a>
		</footer>
	</section>
</div>
