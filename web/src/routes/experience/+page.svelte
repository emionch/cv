<script lang="ts">
	import { base } from '$app/paths';
	import Language from '../../components/Language.svelte';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let { data }: { data: { combinedJobData: any[] } } = $props();
	let experience = $derived(data.combinedJobData);
</script>

<svelte:head>
	<title>Yevhen Mionchynskyy | CV | Experience</title>
</svelte:head>

<h1>Experience</h1>

{#each experience as job}
	<div class="job">
		<h2>
			{#if job.companyUrl && job.companyLogo}
				<a href={job.companyUrl} target="_blank" rel="nofollow" class="no-underline">
					<img
						class="company-logo"
						src={job.companyLogo.startsWith('http') ? job.companyLogo : base + job.companyLogo}
						alt={job.company}
					/>
				</a>
			{/if}
			<span>{job.position}</span>
			at
			<span>{job.company}</span>
		</h2>
		<p class="dates">{job.datesWorked}</p>

		{#if job.responsibilities}
			<p class="responsibilities">{job.responsibilities}</p>
		{/if}

		{#if job.highlights}
			<h3>Highlights</h3>
			<ul class="highlights">
				{#each job.highlights as highlight}
					<li>{highlight}</li>
				{/each}
			</ul>
		{/if}

		{#if job.projects && job.projects.length > 0}
			<h3>{job.projectType}</h3>
			<ul class="projects">
				{#each job.projects || [] as project}
					<li title={project.name}><img src={project.logo} width="64" alt={project.name} /></li>
				{/each}
			</ul>
		{/if}

		{#if job.technologies && job.technologies.length > 0}
			<h3>Primary Technologies</h3>
			<ul class="technologies">
				{#each job.technologies as technology}
					<li><Language language={technology} /></li>
				{/each}
			</ul>
		{/if}
	</div>
{/each}

<style lang="scss">
	.job {
		padding: 1rem 0;
		font-size: 0.9rem;
		&:not(:last-child) {
			border-bottom: 2px solid #d1cfcf;
		}
		.responsibilities {
			font-style: italic;
			opacity: 0.8;
		}
		h2 {
			font-size: 1.2rem;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin: 1rem 0 0 0;
			// Logos vary from square app icons to wide wordmarks, so pin the
			// height and let the width follow the artwork
			img {
				height: 1.4rem;
				width: auto;
				max-width: 5.5rem;
				object-fit: contain;
				border-radius: 3px;
			}
		}
		p {
			margin: 0.5rem 0;
		}
		.dates {
			font-size: 0.8rem;
			opacity: 0.8;
			margin: 0.15rem 0 0.5rem 0;
		}
		h3 {
			font-size: 1rem;
			font-weight: 600;
			margin: 0;
		}
		.projects {
			list-style: none;
			padding: 0;
			display: flex;
			gap: 0.5rem;
			img {
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
			}
		}
		.technologies,
		.highlights {
			margin: 0.5rem 0;
			padding: 0 0 0 1rem;
			li :global(.language) {
				font-weight: 400;
			}
		}
	}
</style>
