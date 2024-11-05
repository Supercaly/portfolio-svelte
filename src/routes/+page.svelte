<script lang="ts">
    import Avatar from "$lib/components/Avatar.svelte";
    import SectionHeader from "$lib/components/SectionHeader.svelte";
    import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";
    import skills from "$lib/config/skills.json";

    let screenWidth: number = $state(0);
    let mediumScreen: boolean = $derived(screenWidth < 768);
</script>

<svelte:head>
    <title>About</title>
    <meta
        name="description"
        content="Here I tell you something about myself."
    />
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />

<section>
    <SectionHeader title="I'm Lorenzo." description="" />
    <div class="content">
        <div class="picture">
            <figure>
                <img src="/me.JPG" alt="Me" width="384" height="384" />
            </figure>
        </div>
        <div class="text-content">
            <p class="headline-large">
                Developer & PhD student based in Italy.
            </p>
            <p class="body-medium">
                <b>Ciao.</b> I'm <b>Lorenzo Calisti</b>, a developer and PhD
                student based in Monte Cerignone (PU), a charming town nestled
                in central Italy.
            </p>
            <p class="body-medium">
                I hold both a bachelor's and a master’s degree in Applied
                Computer Science from the University of Urbino, where I’m
                currently pursuing a PhD in <b
                    >Research Methods in Science and Technology (ReMeST)</b
                >.
            </p>
            <p class="body-medium">
                My passion for technology extends well beyond academics; I love <b
                    >experimenting</b
                >
                with new tech and
                <b>developing</b> small projects of all kinds.
            </p>
            <p class="body-medium">
                When I'm not working on a project, you’ll find me watching a
                movie 🎬, exploring anime 🇯🇵, or riding my mountain bike 🚴🏼‍♂️.
            </p>
        </div>
    </div>
</section>
<section>
    <SectionHeader
        title="Skills."
        description="Tools and technologies that I work with to bring ideas to life."
    />
    {#each skills as skill}
        <SubsectionHeader title={skill.name} />
        <div class="avatars">
            {#each skill.icons as avatar}
                <Avatar size={mediumScreen ? "70px" : "90px"} {...avatar} />
            {/each}
        </div>
    {/each}
</section>

<style lang="scss">
    @use "../mixins.scss" as *;

    .content {
        display: grid;
        grid-template-columns: repeat(25, minmax(0, 1fr));

        .picture {
            grid-column-start: 3;
            grid-column-end: 10;
            margin-top: var(--24px);
            max-height: 384px;
            border-radius: var(--12px);
            overflow: hidden;

            @include md($max: $screen-medium) {
                grid-column-start: 2;
                grid-column-end: 25;
                width: 100%;
                margin-top: 0px;
                border-radius: var(--24px) var(--24px) 0px 0px;
            }

            figure {
                margin: 0px;
                padding: 0px;
            }

            img {
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        .text-content {
            grid-column-start: 12;
            grid-column-end: 24;
            display: flex;
            flex-direction: column;
            gap: var(--16px);

            @include md($max: $screen-medium) {
                grid-column-start: 2;
                grid-column-end: 25;
                margin-top: var(--spacing-l);
            }
        }
    }

    .avatars {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--32px);
        justify-content: center;
        padding: var(--32px) var(--32px);

        @include md($max: $screen-medium) {
            gap: var(--24px);
            padding: var(--32px) 0px;
        }
    }
</style>
