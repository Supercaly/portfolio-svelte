<script lang="ts">
    import "../app.scss";
    import { onMount } from "svelte";
    import Contacts from "./Contacts.svelte";
    import Footer from "./Footer.svelte";
    import Navbar from "./Navbar.svelte";

    let { children } = $props();

    let theme = $state('light');
    let showContacts = $state(false);

    onMount(() => {
        // Default theme based on the current hours of light
        const currentHour = new Date().getHours();
        theme = (currentHour >= 6 && currentHour < 20) ? 'light' : 'dark';
    });

    $inspect("current theme set to", theme);
</script>

<svelte:head>
    <link rel="stylesheet" href="/theme/{theme}.css"/>
</svelte:head>

<div class="app">
    {#if showContacts}
        <Contacts
            onClick={() => {
                showContacts = false;
            }}
        />
    {/if}
    <Navbar
        currentTheme={theme}
        onThemeChange={() => {
            switch (theme) {
                case 'light':
                    theme = 'dark';
                    break;
                case 'dark':
                    theme = 'light';
                    break;
            }
        }}
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
        margin-top: var(--spacing-xxl);
        padding: 0px var(--spacing-m);
        max-width: var(--max-width);
        box-sizing: border-box;
        overflow-x: hidden;
    }
</style>
