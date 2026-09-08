<script lang="ts">
	import '../../styles/resume-main.scss';
	import '../../styles/other-pages.scss';

	interface Skill {
		name: string;
		keywords: string[];
	}
	interface Certificate {
		name: string;
		date?: string;
		issuer?: string;
	}
	interface Lang {
		language: string;
		fluency?: string;
	}

	let { data }: { data: { skills: Skill[]; certificates: Certificate[]; languages: Lang[] } } =
		$props();

	let skills = $derived(data.skills);
	let certificates = $derived(data.certificates);
	let languages = $derived(data.languages);

	const softSkills = [
		{
			skill: 'Team Leadership',
			desc: 'Built and led teams of up to 32 direct reports across infrastructure, operations and performance testing, from hiring and appraisals through to day-to-day management.'
		},
		{
			skill: 'Service Ownership',
			desc: 'Took the Performance Testing Service at SoftServe from a blank sheet to a service offering, roadmap, training program and 80+ delivered client projects.'
		},
		{
			skill: 'Budgeting & Cost Control',
			desc: 'Managed CAPEX/OPEX budgeting and drove efficiency improvements through consolidation — including VoIP that cut international telephony costs by 10-100x.'
		},
		{
			skill: 'Process Design',
			desc: 'Implemented ITIL-based IT processes, standard operating procedures and corporate tooling (Jira, Confluence, TestLink) across several organisations.'
		},
		{
			skill: 'Infrastructure Architecture',
			desc: 'Designed and delivered datacenter, network and storage platforms at scale: MPLS over DMVPN, 3,000+ Ethernet ports, enterprise storage and virtualization farms.'
		},
		{
			skill: 'Vendor & Client Relationships',
			desc: 'Prepared proposals and drove solution deployment in client environments, and managed relationships with internet, SIP and collocation providers.'
		},
		{
			skill: 'Mentorship & Training',
			desc: 'Developed training programs from scratch, grew teams from initial hires to established departments, and lectured at Lviv Polytechnic National University.'
		}
	];
</script>

<svelte:head>
	<title>Yevhen Mionchynskyy | CV | Skills</title>
</svelte:head>

<section class="skills-page">
	<h1>Skills</h1>
	<p>
		Below is a breakdown of the technologies, methodologies and tools I've worked with extensively
		across 20+ years in IT infrastructure, operations and performance testing.
	</p>

	{#each skills as category}
		<h3>{category.name}</h3>
		<ul class="keywords">
			{#each category.keywords as keyword}
				<li class="chip">{keyword}</li>
			{/each}
		</ul>
	{/each}

	{#if certificates.length}
		<h3>Certifications</h3>
		<ul class="plain">
			{#each certificates as cert}
				<li>
					{cert.name}{#if cert.issuer}
						&mdash; {cert.issuer}{/if}{#if cert.date}
						({cert.date}){/if}
				</li>
			{/each}
		</ul>
	{/if}

	{#if languages.length}
		<h3>Languages</h3>
		<ul class="plain">
			{#each languages as lang}
				<li>{lang.language} &mdash; {lang.fluency}</li>
			{/each}
		</ul>
	{/if}

	<h3>Soft Skills</h3>
	<ul class="soft-skills">
		{#each softSkills as skill}
			<li>
				{skill.skill}
				<br />
				<span class="skill-desc">{skill.desc}</span>
			</li>
		{/each}
	</ul>

	<div class="note">
		<p>
			<b>Note</b>: The list is not exhaustive — it doesn't include everything used on individual
			client projects.
			<br />
			<br />
			For the soft skills, I can provide references, or put you in touch with previous colleagues who
			can vouch for my abilities.
		</p>
	</div>
</section>

<style lang="scss">
	p {
		font-size: 0.95rem;
	}
	ul {
		padding-left: 0.5rem;
		list-style: none;
		li {
			margin: 0.1rem 0;
			font-size: 0.95rem;
		}
	}
	.keywords {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		.chip {
			font-size: 0.85rem;
			padding: 0.1rem 0.5rem;
			border: 1px solid var(--primary-transparent);
			border-radius: var(--button-radius, 0.5rem);
			background: var(--primary-transparent);
			color: var(--text-color);
		}
	}
	.plain li {
		opacity: 0.9;
	}
	.soft-skills {
		list-style: none;
		li {
			font-size: 0.95rem;
			font-weight: 500;
			margin: 0.25rem 0 0 0;
			&:before {
				content: '✓';
				margin-right: 0.5rem;
			}
			.skill-desc {
				font-size: 0.8rem;
				opacity: 0.8;
				font-style: italic;
				font-weight: 400;
				margin: 0 0 0 1rem;

				display: -webkit-box;
				max-width: 100%;
				line-clamp: 2;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}
	}
	.note {
		border: 2px solid var(--primary);
		padding: 0.25rem 0.5rem;
		margin: 1rem auto;
		border-radius: 4px;
		background: #0000000a;
		b,
		p {
			font-size: 0.8rem;
		}
		b {
			font-weight: 500;
		}
	}
</style>
