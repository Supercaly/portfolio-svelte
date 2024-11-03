<script>
    import SectionHeader from "$lib/components/SectionHeader.svelte";
</script>

<section>
    <SectionHeader
        title="Oops!"
        description="It looks like you've reached an unknown destination. Try heading back!"
    />
    <a href="/" class="title-medium">Home</a>
</section>

<style lang="scss">
    a {
        text-decoration: none;
        color: var(--color-on-primary);
        background: var(--color-primary);
        padding: var(--16px) var(--24px);
        border-radius: var(--12px);
    }
</style>
