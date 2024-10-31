<script lang="ts">
    interface Props {
        title: string;
    }

    const {title}: Props = $props();
</script>

<div class="content">
    <h1 class="headline-medium">{title}</h1>
</div>

<style lang="scss">
    .content {   
        h1{
            padding: 0;
            margin: 0;
            text-align: center;
            max-width: var(--header-max-width);
        }
    }
</style>
