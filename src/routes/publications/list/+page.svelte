<script lang="ts">
    import publications from "$lib/config/publications.json";

    const articles = publications["articles"];
	articles.forEach((e) =>
		e.articles.sort(
			(a, b) => Number(b.doi === undefined) - Number(a.doi === undefined),
		),
	);
	const papers = articles.flatMap((y) => y.articles);
</script>

<div>
    <ul>
        {#each papers as paper}
            <li class="body-large">
                {paper.authors.join(", ")}. {paper.year}. "{paper.title}". {paper.doi}
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    div {
        max-width: var(--card-max-width);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: var(--24px);
    }
</style>
