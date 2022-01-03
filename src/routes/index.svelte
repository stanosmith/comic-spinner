<script>
	$: q = '';
	async function handleClick() {
		const queryParams = new URLSearchParams({ q });
		const response = await fetch(`/.netlify/functions/search?${queryParams}`);
		console.log(await response.json());
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input type="text" bind:value={q} />
<button on:click={handleClick}>Hello Function</button>

<style>
	button {
		cursor: pointer;
	}
</style>
