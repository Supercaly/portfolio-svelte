<script lang="ts">
	import ArticleCard from "$lib/components/ArticleCard.svelte";
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";
	import publications from "$lib/config/publications.json";

	const articles = publications["articles"];
	const flat_articles = articles.flatMap((y) => y.articles);
	const num_articles = flat_articles.length;
	const num_citations = publications["citations"];
	const num_hindex = publications["hindex"];
	const num_coauthors = [
		...new Set(
			flat_articles
				.map((e) => {
					return e.authors;
				})
				.flat(),
		),
	].length;
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
	<div class="metrics">
		<div class="metric">
			<span class="title-medium">
				<b>{num_articles === undefined ? "--" : num_articles}</b>
			</span>
			<span class="title-small">papers</span>
		</div>
		<div class="metric">
			<span class="title-medium">
				<b>{num_citations === undefined ? "--" : num_citations}</b>
			</span>
			<span class="title-small">citations</span>
		</div>
		<div class="metric">
			<span class="title-medium">
				<b>{num_hindex === undefined ? "--" : num_hindex}</b>
			</span>
			<span class="title-small">h-index</span>
		</div>
		<div class="metric">
			<span class="title-medium">
				<b>{num_coauthors === undefined ? "--" : num_coauthors}</b>
			</span>
			<span class="title-small">co-authors</span>
		</div>
	</div>
	<div class="content">
		{#each articles as year}
			<div class="year">
				<SubsectionHeader title={year.title} />
				<div class="articles">
					{#each year.articles as article}
						<div class="project"><ArticleCard {...article} /></div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use "../../mixins.scss" as *;

	.metrics {
		display: flex;
		flex-direction: row;
		gap: var(--24px);
		flex-wrap: wrap;
		justify-content: center;

		.metric {
			display: flex;
			flex-direction: row;
			gap: var(--8px);
			align-items: baseline;
		}
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: var(--spacing-l) 0px;

		.year {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			
			.articles {
				width: 100%;
				display: grid;
				grid-template-columns: repeat(2, minmax(0, 1fr));
				gap: var(--24px);
				padding: var(--spacing-l) 0px;

				@include md($screen-large) {
					grid-template-columns: repeat(4, minmax(0, 1fr));
					gap: var(--32px);
				}
			}

			.project {
				grid-column: span 2 / span 2;
			}
		}
	}
</style>
