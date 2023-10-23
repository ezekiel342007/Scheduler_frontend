<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleAction() {
    dispatch('input')
  }
</script>

<div on:click={handleAction} class="shade">
	<slot />
</div>

<style>
	.shade {
		background-color: rgba(0, 0, 0, 0.1);
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 7rem;
	}
</style>
