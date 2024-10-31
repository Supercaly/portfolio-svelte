<script lang="ts">
    import BaseCard from "./BaseCard.svelte";
    import Icon from "./Icon.svelte";
    import Cockade from "$lib/assets/extra/cockade.svg?component";

    interface Props {
        type: string;
        url?: string;
        title: string;
        authors: string[];
        year: string;
        journal: string;
        doi?: string;
        tags?: string[];
        location?: string;
        hasAward?: Boolean;
    }

    const {
        type,
        url,
        title,
        authors,
        year,
        journal,
        doi,
        tags,
        location,
        hasAward = false,
    }: Props = $props();

    let screenWidth: number = $state(0);
    let screenSmall: boolean = $derived(screenWidth <= 480);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<BaseCard>
    <div class="content">
        <div class="inner-content">
            <div class="type-icon">
                {#if screenSmall}
                    {#if type === "conference"}
                        <p class="label-medium">Conference</p>
                    {:else if type === "journal"}
                        <p class="label-medium">Journal</p>
                    {:else}
                        <p class="label-medium"></p>
                    {/if}
                {:else}
                    <Icon
                        name={type === "conference" ? "users" : "book-open"}
                    />
                {/if}
            </div>
            <div class="text-content">
                {#if url !== undefined}
                    <a href={url}>
                        <h5 class="title-large">{title}</h5>
                    </a>
                {:else}
                    <h5 class="title-large">{title}</h5>
                {/if}
                <p class="body-medium">{authors.join("; ")}</p>
                <p class="body-medium">{year}</p>
                <p class="body-medium">{journal}</p>
                {#if tags !== undefined}
                    <p class="body-medium">{tags.join(", ")}</p>
                {/if}
                {#if doi !== undefined}
                    <p class="body-small">{doi}</p>
                {/if}
                {#if location !== undefined}
                    <div class="location">
                        <Icon name="map-pin" />
                        <p class="body-small">{location}</p>
                    </div>
                {/if}
                {#if doi === undefined}
                    <div class="status">
                        <div class="status-indicator"></div>
                        <p class="body-small">In Progress</p>
                    </div>
                {/if}
            </div>
        </div>
        {#if hasAward}
            <!-- TODO: Make cockade responsive of small screens  -->
            <div><Cockade /></div>
        {/if}
    </div>
</BaseCard>

<style lang="scss">
    @use "../../mixins.scss" as *;

    .content {
        display: flex;
        flex-direction: row;
        padding: 0px var(--32px) var(--24px);
        gap: var(--32px);

        @include md($max: $screen-medium) {
            padding: 0px var(--24px) var(--24px);
            gap: var(--24px);
        }

        .inner-content {
            flex: 1;
            display: flex;
            flex-direction: row;
            gap: var(--32px);
            margin-top: var(--24px);

            @include md($max: $screen-medium) {
                gap: var(--24px);
            }

            @include md($max: $screen-small) {
                flex-direction: column;
                gap: var(--16px);
            }
        }

        .type-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: var(--48px);
            height: var(--48px);
            background: var(--color-tertiary);
            color: var(--color-on-tertiary);
            border-radius: var(--80px);

            @include md($max: $screen-small) {
                width: min-content;
                height: min-content;
                padding: var(--4px) var(--8px);
            }
        }

        .text-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: var(--10px);
            color: var(--color-on-surface);

            a {
                color: var(--color-on-surface);
            }

            .location {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: var(--8px);
            }

            .status {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: var(--8px);

                .status-indicator {
                    width: var(--12px);
                    height: var(--12px);
                    background: var(--color-extra-paper-status);
                    border-radius: var(--12px);
                    margin: var(--6px);
                }
            }
        }
    }
</style>
