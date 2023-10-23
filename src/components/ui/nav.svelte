<script>
	let navItems = [
		{ name: 'Home', href: '' },
		{ name: 'schedules', href: '/schedules' },
		{ name: 'commitment status', href: '/commitment status' },
		{ name: 'about', href: '/about' }
	];
	let activeItem = navItems[0];
	function navChange(item) {
		activeItem = item;
	}
</script>

<ul class="nav">
	{#each navItems as item}
		<li role="button" class:active={item.name === activeItem.name} on:click={navChange(item)}>
			<a href="{item.href}/">{item.name}</a>
		</li>
	{/each}
</ul>

<style>
	.nav {
		display: flex;
		flex-direction: row;
	}
	li {
		padding: 4px;
	}
</style>
