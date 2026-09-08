<script lang="ts">
	interface Award {
		title: string;
		summary?: string;
		source?: string;
	}
	interface Certificate {
		name: string;
		date?: string;
		issuer?: string;
	}

	let { data }: { data: { awards: Award[]; certificates: Certificate[] } } = $props();

	let awards = $derived(data.awards);
	let certificates = $derived(data.certificates);

	const highlights = [
		'25+ years in IT, from system administration through to infrastructure and service leadership',
		'Built the Performance Testing Service at SoftServe from scratch — offering, roadmap, training program and team',
		'80+ performance testing projects delivered for clients',
		'Led teams of up to 32 direct reports, across infrastructure, operations, InfoSec and development',
		'Infrastructure monitoring at scale: 8,000+ service checks across 600+ hosts in 6 offices',
		'Network modernisation: MPLS over DMVPN, 3,000+ Ethernet ports, 4,000+ IP addresses',
		'Built a production platform across 2 datacenters with 48 Cisco blade servers and application balancers',
		'Cut international telephony costs by 10-100x by introducing VoIP',
		'Delivered 2,000+ product changes and introduced Scrum while running an e-commerce IT department',
		'Lectured at Lviv Polytechnic National University'
	];
</script>

<svelte:head>
	<title>Yevhen Mionchynskyy | CV | Achievements</title>
</svelte:head>

<h2>Achievements</h2>

<h3>Career Highlights</h3>
<ul class="highlights">
	{#each highlights as highlight}
		<li>{highlight}</li>
	{/each}
</ul>

<hr />

<h3>Awards</h3>
<ul class="awards">
	{#each awards as { title, summary, source }}
		<li>
			<strong>{title}</strong>{#if summary}
				&mdash; {summary}{/if}
			{#if source}
				<a class="source" href={source} target="_blank" rel="nofollow" aria-label={title}>
					<i class="fa-solid fa-link"></i>
				</a>
			{/if}
		</li>
	{/each}
</ul>

<hr />

<h3>Certifications</h3>
<ul class="certificates">
	{#each certificates as { name, issuer, date }}
		<li>
			{name}{#if issuer}
				&mdash; {issuer}{/if}{#if date}
				({date}){/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	h2 {
		font-size: 1.8rem;
		text-align: center;
		font-weight: 500;
	}
	h3 {
		margin: 1rem 0 0.5rem;
	}
	a,
	li,
	strong {
		font-size: 0.9rem;
	}
	ul {
		margin: 0;
		padding-left: 1.5rem;
	}
	hr {
		margin: 1rem 0;
		opacity: 0.8;
	}
	.source {
		font-size: 0.65rem;
		opacity: 0.65;
		margin-left: 2px;
		&:hover {
			opacity: 1;
		}
	}
	.highlights li {
		margin: 0.15rem 0;
	}
</style>
