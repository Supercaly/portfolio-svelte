<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        size?: String;
        children: Snippet;
    }

    const { size = "24px", children }: Props = $props();
</script>

<div class="icon-container" style="width: {size}; height: {size}">
    {@render children()}
</div>

<style lang="scss">
    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
