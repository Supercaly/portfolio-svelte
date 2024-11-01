<script lang="ts">
	import ArticleCard from "$lib/components/ArticleCard.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";

	const articles = [
		{
			type: "conference",
			url: "#",
			title: "A Fake article 1",
			authors: ["Author 1", "Author 2", "Author 3"],
			year: "20XX",
			journal: "A fake conference.",
			doi: "XXXX/XXXXXXXXXXXXX",
			tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
			location: "A city",
			hasAward: false,
		},
		{
			type: "journal",
			url: "#",
			title: "A Fake article 2",
			authors: ["Author 1", "Author 2"],
			year: "20XX",
			journal: "A fake journal.",
			hasAward: false,
		},
		{
			type: "conference",
			url: "#",
			title: "A Fake article 3",
			authors: ["Author 1"],
			year: "20XX",
			journal: "A fake conference.",
			location: "A city",
			hasAward: true,
		},
		{
			type: "conference",
			url: "#",
			title: "A Fake article 4",
			authors: ["Author 1", "Author 2", "Author 3", "Author 4"],
			year: "20XX",
			journal: "A fake conference.",
			doi: "XXXX/XXXXXXXXXXXXX",
			tags: ["Tag 1", "Tag 2"],
			location: "A city",
			hasAward: true,
		},
		{
			type: "journal",
			url: "#",
			title: "A Fake article 5",
			authors: ["Author 1", "Author 2"],
			year: "20XX",
			journal: "A fake conference.",
			doi: "XXXX/XXXXXXXXXXXXX",
			hasAward: false,
		},
	];
</script>

<svelte:head>
	<title>Publications</title>
	<meta
		name="description"
		content="Here I list some of my scientific publications in journal and conferences."
	/>
</svelte:head>

<section>
	<SectionHeader
		title="Publications."
		description="A collection of my scientific publications on academic journals and conferences around the world."
	/>
	<!-- TODO: Add citations off of google scholar -->
	<div class="content">
		{#each articles as article}
			<div class="project"><ArticleCard {...article} /></div>
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

		@include md($screen-large) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
			gap: var(--32px);
		}

		.project {
			grid-column: span 2 / span 2;
		}
	}
</style>
