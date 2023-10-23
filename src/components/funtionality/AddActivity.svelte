<script>
	import Button from '../ui/Button.svelte';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	const dispatch = createEventDispatcher();

	const id = $page.params.id;

	let activityName = '';
	let activityDescription = '';
	let activityTime = '';
	let repetitive = false;

	function toggleRepetitive() {
		repetitive = !repetitive;
	}

	function handleClick() {
		dispatch('addActivity');
	}

	function submitActivity() {
		const activity = {
			name: activityName,
			description: activityDescription,
			time: activityTime,
			repetitive: repetitive,
			schedule_id: id
		};
		fetch('http://localhost:8000/schedule/{id}/activity', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(activity)
		})
			.then((res) => {
				res.json();
			})
			.then((resposeMessage) => {
				console.log(resposeMessage);
			});
	}
</script>

<form
	transition:fade={{ duration: 300, easing: quintInOut }}
	on:submit|preventDefault={submitActivity}
>
	<label for="name">name</label>
	<input
		class="border mb-2 border-black rounded-md p-1 pt-0 pb-0"
		type="text"
		name="name"
		bind:value={activityName}
	/> <br />
	<label for="description">description</label>
	<input
		class="border mb-2 border-black rounded-md p-1 pt-0 pb-0"
		type="text"
		name="description"
		bind:value={activityDescription}
	/> <br />
	<label for="time">time</label>
	<input
		class="border mb-2 border-black rounded-md p-1 pt-0 pb-0"
		type="datetime-local"
		name="time"
		bind:value={activityTime}
	/>
	<label for="repeat">repetitive</label>
	<input
		class="mb-2"
		type="checkbox"
		name="repeat"
		on:checked={repetitive}
		on:change={toggleRepetitive}
	/> <br />
	<Button buttonType={'submit'} on:click={handleClick}>Add</Button>
</form>
