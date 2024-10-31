<script lang="ts">
    import Icon from "./Icon.svelte";

    interface Props {
        name: string;
        href: string;
        target?: string;
        size?: string;
        style?: string;
    }

    const { name, href, target = "", size, style }: Props = $props();
</script>

<a {href} {target} {style}><Icon {name} {size} /></a>

<style lang="scss">
    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
