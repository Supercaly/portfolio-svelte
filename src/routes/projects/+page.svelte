<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";

	// TODO: Move this to a separate file
	const projects = [
		{
			title: "Title of Fake project 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in congue nisi, sit amet cursus urna. Fusce vel enim ipsum. Curabitur mattis metus ligula, vel tincidunt arcu suscipit eget.",
			links: [
				{ url: "#", type: "github" },
				{ url: "#", type: "web" },
				{ url: "#", type: "store" },
			],
		},
		{
			title: "Title of Fake project 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			links: [],
		},
		{
			title: "Title of Fake project 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in congue nisi, sit amet cursus urna. Fusce vel enim ipsum. Curabitur mattis metus ligula, vel tincidunt arcu suscipit eget.",
			links: [{ url: "#", type: "github" }],
			tags: ["tag 1", "tag 2", "tag 3"],
		},
		{
			title: "Title of Fake project 4",
			description: "Lorem ipsum dolor sit amet.",
			links: [],
			tags: ["tag 1"],
		},
		{
			title: "Title of Fake project 5",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in congue nisi, sit amet cursus urna. Fusce vel enim ipsum. Curabitur mattis metus ligula, vel tincidunt arcu suscipit eget.",
			links: [
				{ url: "#", type: "github" },
				{ url: "#", type: "web" },
				{ url: "#", type: "store" },
			],
			tags: ["tag 1", "tag 2", "tag 3"],
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Here I list some of my projects." />
</svelte:head>

<section>
	<SectionHeader
		title="Projects."
		description="A collection of some of my best projects."
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
