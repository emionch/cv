<script>
	const navLinks = [
		{ name: 'Experience', url: '/experience', icon: 'fa-briefcase' },
		{ name: 'Achievements', url: '/achievements', icon: 'fa-star' },
		{ name: 'Skills', url: '/skills', icon: 'fa-code' },
		{ name: 'Contact', url: '/contact', icon: 'fa-paper-plane' }
	];

	const intro = [
		`I'm an infrastructure and performance testing leader based in Lviv, Ukraine, with 20+ years
		of experience across IT operations, infrastructure architecture, and the processes that keep
		software organisations running.`,

		`Today I lead the Performance Testing Service at SoftServe, which I built from the ground up:
		the service offering, the development roadmap, the training program and the initial team —
		and 80+ delivered performance testing projects since.`,

		`Before that I spent over a decade running IT infrastructure and operations for software and
		e-commerce companies, leading teams of up to 32 people across networking, virtualization,
		storage, monitoring and information security.`,

		`I care about efficient, well-architected systems and clear processes. I've introduced
		ITIL-based IT processes, built monitoring covering thousands of services and hundreds of
		hosts, and led large infrastructure projects — from server room and datacenter builds to
		full network migrations and VoIP rollouts that cut telephony costs dramatically.`,

		`Budgeting matters to me as much as architecture: I've owned CAPEX/OPEX planning and driven
		efficiency through consolidation, while keeping services reliable for the business.`,

		`I also enjoy developing the people around me. I've built training programs from scratch,
		grown teams from their first hires into established departments, and lectured at
		Lviv Polytechnic National University.`,

		`I hold an MSc in Applied Mathematics and Informatics from Ivan Franko National University of
		Lviv, along with certifications from Cisco (CCNA, CCNP), VMware (VCP) and Microsoft (MCP).`
	];
</script>

<svelte:head>
	<title>Yevhen Mionchynskyy | CV | Intro</title>
</svelte:head>

<h1>Intro</h1>

<h2>👋 Hey! I'm Yevhen</h2>

{#each intro as paragraph}
	<p>{paragraph}</p>
{/each}

<div class="other-pages">
	{#each navLinks as { name, url, icon }}
		<a href={url} class="big-btn no-underline">
			<i class="fa-solid {icon}"></i>
			{name}
		</a>
	{/each}
</div>

<style lang="scss">
	h1 {
		margin-bottom: 1rem;
	}

	h2 {
		margin: 0;
		font-size: 1.5rem;
	}

	p {
		margin: 0.5rem 0;
		line-height: 1.5;
	}

	.other-pages {
		margin-top: 1rem;
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
		gap: 1rem;
		a {
			margin: 0;
			font-size: 1rem;
			padding: 0.5rem 0.5rem;
		}
	}
</style>
