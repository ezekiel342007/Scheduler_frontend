<script>
	import Card from '../../../../components/ui/Card.svelte';
	import Button from '../../../../components/ui/Button.svelte';
	import AddActivity from '../../../../components/funtionality/AddActivity.svelte';
	import Modal from '../../../../components/ui/Modal.svelte';

	export let data;
	let showEditMenu = false;
	let showAddActivity = false;

	function toggleAddActivity() {
		showAddActivity = !showAddActivity;
	}

	function toggleEdit() {
		showEditMenu = !showEditMenu;
	}
</script>

<h1>Activities</h1>
<div class="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
	<Card>
		{#each data.data as activity}
			<div class="grid grid-cols-4">
				<strong>Name</strong>
				<strong>Description</strong>
				<strong>Time</strong>
				<strong>Status</strong>
			</div>
			<br />
			<div
				role="button"
				class="group relative grid grid-cols-4 rounded-md transition p-2 hover:bg-gray-300 hover:grid-rows-2"
			>
				<p>{activity.name}</p>
				<p>{activity.description}</p>
				<p>{new Date(activity.time).getHours()}:{new Date(activity.time).getMinutes()}0</p>
				{#if activity.completed}
					<p>Completed!</p>
				{:else}
					<p>Pending</p>
				{/if}
				<button on:click={toggleEdit} class="hidden group-hover:block"> edit </button>
				<button class="hidden group-hover:block">delete</button>
				<button class="hidden group-hover:block">
					{#if activity.completed}
						check
					{:else}
						uncheck
					{/if}
				</button>
			</div>
		{/each}
		<Button on:click={toggleAddActivity}>Add activity</Button>
		{#if showAddActivity}
			<Modal on:input={toggleAddActivity}>
				<Card>
					<AddActivity on:addActivity={toggleAddActivity} />
				</Card>
			</Modal>
		{/if}
	</Card>
</div>
