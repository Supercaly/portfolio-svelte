<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	import projects from "$lib/config/projects.json";
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Here I list some of my projects." />
</svelte:head>

<section>
	<SectionHeader
		title="Projects."
		description="Some of my creative and exciting tech projects."
	/>
	<div class="content">
		{#each projects as project}
			<div class="project"><ProjectCard {...project} /></div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use "../../mixins.scss" as *;

	.content {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--24px);
		padding: var(--spacing-l) 0px;

		@include md($screen-medium) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		@include md($screen-large) {
			grid-template-columns: repeat(6, minmax(0, 1fr));
			gap: var(--32px);
		}

		.project {
			grid-column: span 2 / span 2;
		}
	}
</style>
