<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import IconLink from "$lib/components/IconLink.svelte";
    import infos from "$lib/config/infos.json";

    interface Props {
        onClick: () => void;
    }

    const { onClick }: Props = $props();
</script>

<div class="contacts">
    <div class="sheet">
        <div class="header">
            <h5 class="title-large">Contact Me</h5>
            <button onclick={onClick} class="close-btn">
                <Icon name="x" />
            </button>
        </div>
        <div class="content">
            <div class="card">
                <h6 class="title-small">Email</h6>
                {#each infos.emails as email}
                    <a class="body-large" href="mailto:{email}" target="_blank"
                        >{email}</a
                    >
                {/each}
            </div>
            <div class="card">
                <h6 class="title-small">Phone</h6>
                {#each infos.phones as phone}
                    <a class="body-medium" href="tel:{phone}">{phone}</a>
                {/each}
            </div>
            <div class="card">
                <h6 class="title-small">Academic</h6>
                {#each infos.academic as ac}
                    <a class="body-medium" href={ac.url} target="_blank"
                        >{ac.name}</a
                    >
                {/each}
            </div>
            <div class="card">
                <h6 class="title-small">Social</h6>
                <div class="socials">
                    {#each infos.social as social}
                        <IconLink
                            href={social.url}
                            target="_blank"
                            name={social.icon}
                            style="width: var(--32px); height: var(--32px); color: var(--color-on-surface);"
                        />
                    {/each}
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

            @include md($screen-medium) {
                width: var(--contacts-width);
                inset: auto var(--spacing-l) var(--spacing-m) auto;
                border-radius: var(--12px);
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
                background: var(--color-surface-container);
                border-radius: var(--12px);
                color: var(--color-secondary);
                gap: var(--8px);
            }

            .socials {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly;
                gap: 0px;
            }
        }
    }
</style>
