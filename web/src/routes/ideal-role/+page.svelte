<script>
	import { base } from '$app/paths';
	const navLinks = [
		{ name: 'Intro', url: '/intro', icon: 'fa-address-card' },
		{ name: 'Experience', url: '/experience', icon: 'fa-briefcase' },
		{ name: 'Achievements', url: '/achievements', icon: 'fa-star' },
		{ name: 'Skills', url: '/skills', icon: 'fa-code' }
	];

	const intro = [
		`I'm looking for a role where I can lead infrastructure, operations or performance testing
		teams, and be accountable for services that the business genuinely relies on.`,
		`Process quality, cost efficiency and reliability matter to me, and I enjoy building the
		structures — roadmaps, training, standard procedures — that let a team deliver consistently.`,
		`I like being close enough to the technology to make architectural calls myself, while
		growing the engineers around me so the team outlasts any one person.`,
		`Ultimately, I want the systems we run to be reliable and cost-effective, and the people
		running them to have what they need to succeed.`
	];

	const requirements = [
		{ lbl: 'Location', desc: 'Lviv, Ukraine — remote or hybrid also works well' },
		{
			lbl: 'Seniority',
			desc: 'Leadership role — service, department or engineering management — with room to stay hands-on technically'
		},
		{
			lbl: 'Discipline',
			desc: 'Performance testing, IT infrastructure & operations, or technical service delivery'
		},
		{ lbl: 'Industry', desc: 'Software services, e-commerce, or enterprise IT' }
	];

	const values = [
		'Values reliability, quality processes and engineering standards',
		'Invests in training and developing its people',
		'Takes budgeting discipline and cost efficiency seriously',
		'Open to modernising tooling and approaches'
	];
</script>

<svelte:head>
	<title>Yevhen Mionchynskyy | CV | Ideal Role</title>
</svelte:head>

<h1>What I'm looking for</h1>

{#each intro as paragraph}
	<p>{paragraph}</p>
{/each}

<h2>Values</h2>
<p class="subtitle">I'm looking for a company which has the following core values</p>
<ul>
	{#each values as value}
		<li>{value}</li>
	{/each}
</ul>

<h2>Requirements</h2>
<p class="subtitle">
	I'm pretty flexible on the details, but ideally looking to work within these parameters
</p>
<ul>
	{#each requirements as { lbl, desc }}
		<li>
			<strong>{lbl}:</strong>
			{desc}
		</li>
	{/each}
</ul>

<h2>Why me?</h2>
<p>
	Take a look at my
	<a href="{base}/achievements">achievements</a>
	for what I've delivered, or my
	<a href="{base}/intro">intro</a>
	to learn more about how I work.
</p>

<h2>Get in Touch</h2>
<p>
	Does this sound good to you? If so, I'd love to hear from you! So please do
	<a href="{base}/contact">get in touch</a>
	.
</p>

<div class="other-pages">
	{#each navLinks as { name, url, icon }}
		<a href="{base}{url}" class="big-btn no-underline">
			<i class="fa-solid {icon}"></i>
			{name}
		</a>
	{/each}
</div>

<style lang="scss">
	h2 {
		font-size: 1.2rem;
		font-weight: 600;
		margin: 2rem 0 0.5rem 0;
	}

	.subtitle {
		margin: 0 0 0.5rem 0;
		font-size: 0.8rem;
		font-style: italic;
		opacity: 0.8;
	}

	ul {
		margin: 0;
		padding-left: 1rem;
		font-size: 1rem;
		li {
			strong {
				font-weight: 600;
			}
		}
	}

	p {
		font-size: 1rem;
		margin: 0 0 0.5rem 0;
	}

	.other-pages {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
		gap: 1rem;
		margin: 1rem 0;
		a {
			margin: 0;
			font-size: 1rem;
			padding: 0.5rem 0.5rem;
		}
	}
</style>
