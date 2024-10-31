<script lang="ts">
    import BaseCard from "./BaseCard.svelte";
    import IconLink from "./IconLink.svelte";

    interface Props {
        title: string;
        description: string;
        links?: {
            url: string;
            type: string;
        }[];
        tags?: string[];
    }

    const { title, description, links, tags }: Props = $props();
</script>

<BaseCard>
    <div class="content">
        <h5 class="title-large">{title}</h5>
        <p class="body-small">{description}</p>
        {#if links !== undefined && links.length > 0}
            <div class="links">
                {#each links as link}
                    <IconLink
                        href={link.url}
                        target="_blank"
                        name={link.type}
                        style="width: var(--48px); height: var(--48px); color: var(--color-on-surface);"
                    />
                {/each}
            </div>
        {/if}
        {#if tags !== undefined && tags.length > 0}
            <div class="tags">
                <div class="tags">
                    {#each tags as tag}
                        <div class="tag">
                            <p class="label-small">{tag}</p>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</BaseCard>

<style lang="scss">
    @use "../../mixins.scss" as *;

    .content {
        display: flex;
        flex-direction: column;
        gap: var(--8px);
        padding: var(--24px) var(--32px);
        color: var(--color-on-surface);

        @include md($screen-medium) {
            padding: var(--24px);
        }

        .links {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            color: var(--color-on-surface);
        }

        .tags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: var(--10px);

            .tag {
                display: inline-block;
                color: var(--color-on-surface);
                border: 0.5px solid var(--color-on-surface);
                border-radius: var(--48px);
                padding: var(--6px) var(--12px);
            }
        }
    }
</style>
