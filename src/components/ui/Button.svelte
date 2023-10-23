<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let buttonType;

	function handleClick() {
		dispatch('click');
	}
</script>

<button type={buttonType} on:click={handleClick} class="button transition">
	<slot />
</button>

<style>
	.button {
		width: fit-content;
		background-color: rgba(0, 0, 0, 0);
		padding-right: 20px;
		padding-left: 20px;
		padding-top: 7px;
		padding-bottom: 7px;
		color: rgba(0, 0, 0, 1);
		border: none;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
	}

	.button:hover {
		background-color: rgba(0, 0, 0, 0.1);
		color: rgba(0, 0, 0, 0.7);
	}
</style>
