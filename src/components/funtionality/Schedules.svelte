<script>
	export let scheduleList;
	import { formatDate } from '../../lib/utils';
	import Card from '../ui/Card.svelte';
	import Button from '../ui/Button.svelte';
	import AddSchedule from './AddSchedule.svelte';
	let showScheduleForm = false;

	function toggleScheduleForm() {
		showScheduleForm = !showScheduleForm;
	}
</script>

<Card>
	<div class="schedule-list">
		<div class="grid-headers">
			<h3>Name</h3>
			<h3>Date Created</h3>
		</div>
		{#each scheduleList as schedule}
			<a href="schedules/{schedule.id}/activities" class="container group relative transition">
				<div class="schedule">
					<p>{schedule.name}</p>
					<p>{formatDate(schedule.date_created)}</p>
				</div>
			</a>
		{/each}
	</div>
	<Button on:click={toggleScheduleForm}>Add a Schedule</Button>
	{#if showScheduleForm}
		<AddSchedule />
	{/if}
</Card>

<style>
	.schedule-list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.grid-headers {
		display: grid;
		grid-template-columns: 200px 200px;
	}
	.container {
		margin-bottom: 9px;
		width: fit-content;
		height: fit-content;
		padding: 12px;
		border-radius: 8px;
	}
	.schedule {
		display: grid;
		grid-template-columns: 200px 200px;
		list-style-type: none;
		pointer-events: none;
	}
	.container:hover {
		background-color: lightgrey;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
	}
</style>
