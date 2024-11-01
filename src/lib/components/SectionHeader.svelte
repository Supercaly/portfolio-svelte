<script lang="ts">
    interface Props {
        title: string;
        description: string;
    }

    const { title, description }: Props = $props();
</script>

<div class="content">
    <h1 class="display-large">{title}</h1>
    <h3 class="headline-medium">{description}</h3>
</div>

<style lang="scss">
    @use "../../mixins.scss" as *;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        gap: var(--spacing-s);
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
