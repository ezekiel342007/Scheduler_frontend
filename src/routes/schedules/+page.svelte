<script>
	export let data;
	import Schedules from '../../components/funtionality/Schedules.svelte';

	let scheduleList = data.data;
</script>

<main>
	<h1>Schedules</h1>
	<Schedules {scheduleList} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
