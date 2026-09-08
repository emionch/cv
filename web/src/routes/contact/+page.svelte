<script>
	let emailVisible = $state(false);
	const revealEmail = () => {
		emailVisible = true;
		navigator.clipboard.writeText('emionch@gmail.com');
	};
</script>

<svelte:head>
	<title>Yevhen Mionchynskyy | CV | Contact</title>
</svelte:head>

<h1>Contact</h1>

<p>
	If you're looking for an experienced IT infrastructure, operations or performance testing leader,
	then I'd love to hear from you!
</p>
<p>
	You can get in touch by dropping me an email
	{#if emailVisible}
		<a href="mailto:emionch@gmail.com">emionch@gmail.com</a>
	{:else}
		<button
			onclick={revealEmail}
			class="small-btn no-float"
			title="Click to show email address, and copy to clipboard"
		>
			Reveal email address
		</button>
	{/if}
</p>
<p>Thank you for stopping by, and I really hope to hear from you!</p>

<div class="some-text">
	<p>
		You can learn more about me on the
		<a href="/intro">intro</a>
		page, or browse the
		<a href="/skills">skills</a>
		,
		<a href="/experience">experience</a>
		and
		<a href="/achievements">achievements</a>
		pages to see if I align with what you're looking for. A PDF version of my CV can be downloaded
		<a href="/download">here</a>
		.
	</p>
	<p>
		You'll also find me on LinkedIn, at
		<a href="https://www.linkedin.com/in/yevhenmionchynskyy/">in/yevhenmionchynskyy</a>
		.
	</p>
	<p>
		To see if I'd be a good fit for your team, you can view my
		<a href="/ideal-role">ideal role</a>
		.
	</p>
	<p>
		If you've got any questions, or would like me to send over some references, feel free to reach
		out! :)
	</p>
</div>

<style lang="scss">
	.some-text {
		font-size: 0.8rem;
		border: 2px solid var(--primary);
		padding: 0.25rem 0.5rem;
		margin: 4rem auto 1rem auto;
		border-radius: 4px;
		background: #0000000a;
		a {
			font-weight: 500;
		}
	}
</style>
