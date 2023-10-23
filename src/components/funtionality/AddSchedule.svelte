<script>
	import Button from '../ui/Button.svelte';
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	let name = '';

	function handleSubmit() {
		fetch('http://localhost:8000/schedule', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name })
		})
			.then((res) => {
				console.log({ res });
				return res.json();
			})
			.then((json) => {
				console.log({ json });
			})
			.catch((err) => console.error(err));
	}
</script>

<form
	class="schedule"
	action="submit"
	on:submit|preventDefault={handleSubmit}
	transition:slide={{ duration: 200, easing: quintInOut, axis: 'y' }}
>
	<label for="name">Name</label>
	<input type="text" bind:value={name} name="name" />
	<Button buttonType={'submit'}>Save</Button>
</form>

<style>
	.schedule {
		margin-top: 1.3rem;
		height: fit-content;
		width: fit-content;
		background-color: white;
		padding: 1.5rem;
		border-radius: 9px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
	}
	label {
		font-weight: bold;
	}
	input {
		margin-right: 13px;
		border: 1.2px solid black;
		border-radius: 4px;
	}
</style>
