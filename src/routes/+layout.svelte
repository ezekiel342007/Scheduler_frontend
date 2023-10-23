<script>
	import '../app.postcss';
	import '../app.postcss';
	import Nav from '../components/ui/nav.svelte';
</script>

<body>
	<Nav />

	<slot />
</body>

<style>
	body {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
