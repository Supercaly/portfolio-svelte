<script lang="ts">
	import ActivityCard from "$lib/components/ActivityCard.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	import studies from "$lib/config/studies.json";
	import works from "$lib/config/works.json";
</script>

<svelte:head>
	<title>Experience</title>
	<meta
		name="description"
		content="Here I tell you my studies and my work experiences."
	/>
</svelte:head>

<section>
	<SectionHeader
		title="Study."
		description="My academic journey and the knowledge I've gained along the way."
	/>
	<div class="content">
		{#each studies as study}
			<ActivityCard {...study} />
		{/each}
	</div>
</section>
<section>
	<SectionHeader
		title="Work."
		description="A glimpse into my professional experiences."
	/>
	<div class="content">
		{#each works as work}
			<ActivityCard {...work} />
		{/each}
	</div>
</section>

<style lang="scss">
	@use "../../mixins.scss" as *;

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--24px);
		padding: var(--spacing-l);

		@include md($screen-large) {
			gap: var(--32px);
		}
	}
</style>
