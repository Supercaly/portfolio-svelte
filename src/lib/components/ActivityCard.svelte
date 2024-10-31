<script lang="ts">
    import BaseCard from "./BaseCard.svelte";
    import Icon from "./Icon.svelte";

    interface Props {
        start: string;
        end?: string;
        title: string;
        institution: string;
        description?: string;
        location: string;
    }

    const { start, end, title, institution, description, location }: Props =
        $props();
</script>

<BaseCard>
    <div class="content">
        <div class="period">
            <span class="label-medium">{start}</span>
            {#if end !== undefined}
                <span class="label-medium">-</span>
                <span class="label-medium">{end}</span>
            {/if}
        </div>
        <div class="text-content">
            <h5 class="title-large">{title}</h5>
            <p class="body-medium">{institution}</p>
            {#if description !== undefined}
                <p class="body-small">{description}</p>
            {/if}
            <div class="location">
                <Icon name="map-pin" />
                <p class="body-small">{location}</p>
            </div>
        </div>
    </div>
</BaseCard>

<style lang="scss">
    @use "../../mixins.scss" as *;

    .content {
        display: grid;
        grid-template-columns: 150px auto;
        padding: var(--24px) var(--32px);

        @include md($max: $screen-medium) {
            display: flex;
            flex-direction: column;
            gap: var(--24px);
            padding: var(--24px);
        }

        .period {
            width: fit-content;
            height: fit-content;
            display: flex;
            gap: var(--4px);
            padding: var(--6px) var(--12px);
            color: var(--color-on-primary);
            background: var(--color-primary);
            border-radius: var(--48px);
        }

        .location {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--8px);
        }

        .text-content {
            display: flex;
            flex-direction: column;
            gap: var(--10px);
            color: var(--color-on-surface);
        }
    }
</style>
