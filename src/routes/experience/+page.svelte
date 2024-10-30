<script lang="ts">
	import ActivityCard from "$lib/components/ActivityCard.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";

	const studies = [
		{
			start: "20XX",
			end: "present",
			title: "A Fake study 1.",
			institution: "A place where we did something.",
			description: "A long description of what we did.",
			location: "Somewhere",
		},
		{
			start: "20XX",
			title: "A Fake study 2.",
			institution: "A place where we did something.",
			location: "Somewhere",
		},
		{
			start: "20XX",
			end: "20XX",
			title: "A Fake study 3.",
			institution: "A place where we did something.",
			location: "Somewhere",
		},
	];
	const works = [
		{
			start: "20XX",
			end: "present",
			title: "A Fake work 1.",
			institution: "A place where we did something.",
			description: "A long description of what we did.",
			location: "Somewhere",
		},
		{
			start: "20XX",
			title: "A Fake work 2.",
			institution: "A place where we did something.",
			location: "Somewhere",
		},
	];
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
		description="A list of all my academic degrees."
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
		description="A list of jobs and internships done in the years."
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
