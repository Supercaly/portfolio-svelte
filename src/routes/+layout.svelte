<script lang="ts">
    import "../app.scss";
    import Footer from "./Footer.svelte";
    import Navbar from "./Navbar.svelte";

    let { children } = $props();

    let theme = $state("light");
    let showContacts = $state(false);

    $inspect("current theme set to", theme);
</script>

<div class="app">
    <Navbar
        bind:currentTheme={theme}
        onContactsClick={() => {
            showContacts = true;
        }}
    />
    <main>
        {@render children()}
    </main>
    <Footer />
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
        padding: 0px var(--24px);
        max-width: var(--max-width);
        box-sizing: border-box;
        overflow-x: hidden;

        @include md($screen-medium) {
            margin-top: var(--spacing-xxl);
            padding: 0px var(--32px);
        }
    }
</style>
