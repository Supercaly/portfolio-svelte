<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import Icon from "$lib/components/Icon.svelte";
    import { onDestroy, onMount } from "svelte";

    let showBackdrop = $state(false);
    if (browser) {
        onMount(() => {
            window.onscroll = () => {
                if (window.scrollY > 40) {
                    showBackdrop = true;
                } else {
                    showBackdrop = false;
                }
            };
        });

        onDestroy(() => {
            window.onscroll = () => {};
        });
    }

    interface Props {
        onContactsClick: () => void;
        onThemeChange: () => void;
        currentTheme: string;
    }

    let { onContactsClick, onThemeChange, currentTheme }: Props = $props();
</script>

<header>
    <nav>
        <ul class="backdrop" class:show-backdrop={showBackdrop}>
            <!-- TODO: Animate page selection -->
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a class="nav-btn" href="/">
                    <div class="nav-icon"><Icon name="user" /></div>
                    <p class="nav-text label-medium">About</p>
                </a>
            </li>
            <li
                aria-current={$page.url.pathname === "/experience"
                    ? "page"
                    : undefined}
            >
                <a class="nav-btn" href="/experience">
                    <div class="nav-icon"><Icon name="briefcase" /></div>
                    <p class="nav-text label-medium">Experience</p>
                </a>
            </li>
            <li
                aria-current={$page.url.pathname === "/publications"
                    ? "page"
                    : undefined}
            >
                <a class="nav-btn" href="/publications">
                    <div class="nav-icon"><Icon name="bar-chart-2" /></div>
                    <p class="nav-text label-medium">Publications</p>
                </a>
            </li>
            <li
                aria-current={$page.url.pathname === "/projects"
                    ? "page"
                    : undefined}
            >
                <a class="nav-btn" href="/projects">
                    <div class="nav-icon"><Icon name="layers" /></div>
                    <p class="nav-text label-medium">Projects</p>
                </a>
            </li>
            <li>
                <button onclick={onContactsClick} class="nav-btn">
                    <div class="nav-icon"><Icon name="at-sign" /></div>
                    <p class="nav-text label-medium">Contacts</p>
                </button>
            </li>
            <li>
                <button onclick={onThemeChange} class="theme-switch"
                    ><Icon name={currentTheme === "light" ? "sun" : "moon"} />
                </button>
            </li>
        </ul>
    </nav>
</header>

<style lang="scss">
    @use "../mixins.scss" as *;

    header {
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: auto;
        right: 0px;
        z-index: var(--zindex-nav);
        padding-top: var(--spacing-s);

        nav {
            display: flex;
            flex-direction: column;
            align-items: center;

            .backdrop {
                border-radius: var(--48px);
                transition: background 0.3s ease-in-out;
            }

            .show-backdrop {
                background: var(--color-extra-backdrop);
                backdrop-filter: blur(10px) saturate(1.7);
            }

            ul {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: var(--2px);
                margin: 0px;
                padding: var(--8px);
                list-style-type: none;

                @include md($screen-small) {
                    gap: var(--5px);
                    padding: var(--8px) var(--16px);
                }

                li {
                    display: flex;
                    height: fit-content;
                    width: fit-content;
                    position: relative;
                    border-radius: var(--48px);
                    transition: all 0.3s ease-in-out;

                    .nav-text {
                        display: none;
                    }

                    @include md($screen-large) {
                        .nav-text {
                            display: block;
                        }

                        // Turns off navbar icons on large screens
                        // .nav-icon {
                        //     display: none;
                        // }
                    }

                    &[aria-current="page"] {
                        background: var(--color-extra-on-backdrop);

                        @include md($screen-small) {
                            .nav-text {
                                display: block;
                            }
                        }
                    }
                }

                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .nav-btn {
                    text-decoration: none;
                    color: var(--color-primary);
                    padding: var(--6px) var(--10px);
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: var(--8px);

                    @include md($screen-small) {
                        padding: var(--8px) var(--12px);
                    }

                    @include md($screen-large) {
                        padding: var(--12px) var(--24px);
                    }
                }

                .theme-switch {
                    width: var(--48px);
                    height: var(--48px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-on-primary);
                    background: var(--color-primary);
                    border-radius: var(--48px);
                }
            }
        }
    }
</style>
