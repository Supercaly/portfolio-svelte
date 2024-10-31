<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import XIcon from "$lib/assets/icons/x.svg?component";
    import FacebookIcon from "$lib/assets/icons/facebook.svg?component";
    import InstagramIcon from "$lib/assets/icons/instagram.svg?component";
    import TwitterIcon from "$lib/assets/icons/twitter.svg?component";
    import GitHubIcon from "$lib/assets/icons/github.svg?component";
    import LinkedInIcon from "$lib/assets/icons/linkedin.svg?component";

    interface Props {
        onClick: () => void;
    }

    const { onClick }: Props = $props();

    const infos = {
        email: "name.surname@email.com",
        phone: "+00 123 4567890",
        // social: [],
    };
</script>

<div class="contacts">
    <div class="sheet">
        <div class="header">
            <h5 class="title-large">Contact Me</h5>
            <button onclick={onClick} class="close-btn">
                <Icon><XIcon /></Icon>
            </button>
        </div>
        <div class="content">
            <!-- TODO: Make content dynamic -->
            <div class="card">
                <h6 class="title-small">Email</h6>
                <a
                    class="body-large"
                    href="mailto:{infos.email}"
                    target="_blank">{infos.email}</a
                >
            </div>
            <div class="card">
                <h6 class="title-small">Phone</h6>
                <a class="body-medium" href="tel:{infos.phone}">{infos.phone}</a
                >
            </div>
            <div class="card">
                <h6 class="title-small">Social</h6>
                <!-- TODO: Make icons dynamic -->
                <div class="socials">
                    <!-- TODO: Make IconLink component -->
                    <a href="/" target="_blank"><Icon><FacebookIcon /></Icon></a
                    >
                    <a href="/" target="_blank"
                        ><Icon><InstagramIcon /></Icon></a
                    >
                    <a href="/" target="_blank"><Icon><TwitterIcon /></Icon></a>
                    <a href="/" target="_blank"><Icon><LinkedInIcon /></Icon></a
                    >
                    <a href="/" target="_blank"><Icon><GitHubIcon /></Icon></a>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @use "../mixins.scss" as *;

    .contacts {
        position: fixed;
        inset: 0px;
        z-index: var(--zindex-contacts);
        background: var(--color-extra-overlay);

        .sheet {
            position: fixed;
            width: 100%;
            inset: auto 0px 0px auto;
            overflow: hidden;
            background: var(--color-extra-backdrop);
            backdrop-filter: blur(10px) saturate(1.7);
            border-radius: var(--12px) var(--12px) 0px 0px;
            z-index: var(--zindex-contacts);

            @include md($screen-small) {
                width: var(--contacts-width);
                // TODO: Replace with spacing 32-24
                inset: auto 16px 16px auto;
                border-radius: var(--12px);
            }

            @include md($screen-medium) {
                // TODO: Replace with spacing 32-24
                inset: auto 40px 30px auto;
            }
        }

        .header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: var(--16px) var(--24px);
            background: var(--color-primary);
            color: var(--color-on-primary);

            .close-btn {
                width: var(--48px);
                height: var(--48px);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--12px);
                background: none;
                border: none;
                color: var(--color-on-primary);

                &:hover {
                    background: var(--color-on-primary-opacity-32);
                }
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            padding: var(--16px) var(--24px);
            gap: var(--16px);

            a {
                color: var(--color-on-surface);
            }

            .card {
                display: flex;
                flex-direction: column;
                padding: var(--16px);
                background: var(--color-extra-on-backdrop);
                border-radius: var(--12px);
                color: var(--color-secondary);
                gap: var(--8px);
            }

            .socials {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly;
                gap: var(--10px);
            }
        }
    }
</style>
