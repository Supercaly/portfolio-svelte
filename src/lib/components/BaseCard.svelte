<script lang="ts">
    import type { Snippet } from "svelte";

    const {children}: {children: Snippet} = $props();
</script>

<div class="card">{@render children()}</div>

<style lang="scss">
    .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        max-width: var(--card-max-width);
        background: var(--color-surface-container-opacity-30);
        border-radius: var(--12px);
    }
</style>