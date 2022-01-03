<script>
	async function handleClick() {
		const queryParams = new URLSearchParams({ q: 'spawn wildcats' });
		const response = await fetch(`/.netlify/functions/search?${queryParams}`);
		console.log(await response.json());
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={handleClick}>Hello Function</button>

<style>
	button {
		cursor: pointer;
	}
</style>
