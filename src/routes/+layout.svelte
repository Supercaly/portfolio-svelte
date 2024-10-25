<script lang="ts">
    import "../app.scss";

    let {children} = $props();
</script>

<div class="app">
    <main>
        {@render children()}
    </main>
</div>

<style lang="scss">
    @use "../mixins.scss" as *;

    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: var(--spacing-xl);
        padding: 0px var(--16px);
        max-width: var(--max-width);
        box-sizing: border-box;
        
        @include md($screen-medium) {
            margin-top: var(--spacing-xxl);           
            padding: 0px var(--32px);
        }
    }

</style>