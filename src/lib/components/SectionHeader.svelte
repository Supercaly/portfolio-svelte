<script lang="ts">
    interface Props {
        title: string;
        description: string;
    }

    const { title, description }: Props = $props();
</script>

<div class="content">
    <h1 class="display-large">{title}</h1>
    <h3 class="headline-large">{description}</h3>
</div>

<style lang="scss">
    @use "../../mixins.scss" as *;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        // TODO: Make gap responsive
        gap: var(--20px);
        padding: var(--spacing-l) 0px;

        h1,
        h3 {
            padding: 0;
            margin: 0;
            text-align: center;
            max-width: var(--header-max-width);
        }
    }
</style>
