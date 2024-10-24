<script lang="ts">
    import "../app.css";

    let {children} = $props();
</script>

<div class="app">
    <main>
        {@render children()}
    </main>
</div>

<style>
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
        /* TODO: Make margin top responsive */
        margin-top: var(--100px);
        padding: 1rem;
        /* TODO: Make max width responsive */
        max-width: var(--90px);
        box-sizing: border-box;
    }

</style>