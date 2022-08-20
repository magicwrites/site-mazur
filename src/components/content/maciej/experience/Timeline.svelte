<script>
	import Employer from '$components/shared/Employer.svelte';
	import { isPolish } from '$src/stores/language';

	import casumo from '$assets/logo-casumo.webp';
	import fp from '$assets/logo-fp.jpg';

	import { en, pl } from './timeline.content';

	$: texts = $isPolish ? pl : en;
</script>

<div>
	<section class="grid gap-14 xl:gap-10 print:pt-8">
		<Employer
			name={texts.employers.casumo.name}
			roles={texts.employers.casumo.roles}
			from={texts.employers.casumo.from}
			to={texts.employers.casumo.to}
		>
			<img slot="icon" src={casumo} />
			<div slot="default">
				<div>
					<span class="whitespace-nowrap">Front-end</span> developer in one of the most innovative
					online casino brands in the industry. Ensuring our product remains
					<span class="whitespace-nowrap">regulation-compliant</span> in engaged markets. Helping to
					guide the evolution of company software.
				</div>
				<div class="pt-4">
					Eventually taking up the mantle of software architect in order to design and deliver the
					second iteration of Casumo UI in form of micro-frontends.
				</div>
			</div>
		</Employer>
		<Employer
			name={texts.employers.fp.name}
			roles={texts.employers.fp.roles}
			from={texts.employers.fp.from}
			to={texts.employers.fp.to}
		>
			<img slot="icon" src={fp} />
			<div slot="default">
				<div>
					Over seven years of work in a software outsourcing company. Exposure to a vast array of
					technologies and multitude of clients from across Europe. Contribution to public services,
					media, financial, logistics and healthcare related projects. Assigned to clients
					individualy or in teams with up to 60 members.
				</div>
				<div class="pt-4">
					Performing role of a <span class="whitespace-nowrap">front-end</span> developer using
					mainstream javascript solutions. Some of the more unconventional projects required usage
					of niche languages, <span class="whitespace-nowrap">full-stack</span>
					work or delivery of <span class="whitespace-nowrap">cross-platform</span> UI among other unorthodox
					techniques.
				</div>
			</div>
		</Employer>
		<Employer
			name={texts.employers.goodpoint.name}
			roles={texts.employers.goodpoint.roles}
			icon={texts.employers.goodpoint.icon}
			from={texts.employers.goodpoint.from}
			to={texts.employers.goodpoint.to}
		>
			Rapid design and delivery of websites for small and medium sized companies. Client contact,
			offer negotiations and IT support. Mostly PHP MVC frameworks code - first experience with
			professional software development.
		</Employer>
		<!-- <div class="text-center text-gray-700 hidden xl:block" style="width: 100px">
			<i class="text-xl fas fa-paper-plane" />
		</div> -->
	</section>
</div>
