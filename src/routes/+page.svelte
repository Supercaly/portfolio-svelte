<script lang="ts">
    import Avatar from "$lib/components/Avatar.svelte";
    import SectionHeader from "$lib/components/SectionHeader.svelte";
    import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";

    const skills = [
        {
            name: "Programming",
            icons: [
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
            ],
        },
        {
            name: "OS",
            icons: [
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
            ],
        },
        {
            name: "Art",
            icons: [
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
                { name: "c_avatar.png", description: "C" },
            ],
        },
    ];

    let screenWidth: number = $state(0);
    let smallScreen: boolean = $derived(screenWidth < 480);
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
        <div class="picture"></div>
        <div class="text-content">
            <p class="headline-small">
                Developer & PhD student based in Italy.
            </p>
            <p class="body-medium">
                Ciao. My name is Lorenzo Calisti and I live in Monte Cerignone
                (PU), a little town in the center of Italy.
            </p>
            <p class="body-medium">
                I’ve got a three-year degree and a master's degree in Applied
                Computer Science from University of Urbino.
            </p>
            <p class="body-medium">
                At the moment I’m a PhD student in <b
                    >Research Methods in Science and Technology (ReMeST)</b
                > at the University of Urbino.
            </p>
            <p class="body-medium">
                My passion for technology goes beyond academics. I love
                <b>tinkering</b> with new technologies and <b>developing</b> small projects of
                all sort.
            </p>
            <p class="body-medium">
                When I’m not working on some project I’m probably watching a movie 🎬, an anime 🇯🇵 or I’m riding my MTB bike 🚴🏼‍♂️.
            </p>
        </div>
    </div>
</section>
<section>
    <SectionHeader title="Skills." description="Some of my skills." />
    {#each skills as skill}
        <SubsectionHeader title={skill.name} />
        <div class="avatars">
            {#each skill.icons as avatar}
                <Avatar size={smallScreen ? "70px" : "100px"} {...avatar} />
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
            aspect-ratio: 4/5;
            max-height: 384px;
            background: gray;
            border-radius: var(--12px);

            @include md($max: $screen-medium) {
                grid-column-end: 24;
                width: 100%;
                margin-top: 0px;
                border-radius: var(--24px) var(--24px) 0px 0px;
            }
        }

        .text-content {
            grid-column-start: 12;
            grid-column-end: 24;
            display: flex;
            flex-direction: column;
            gap: var(--16px);

            @include md($max: $screen-medium) {
                grid-column-start: 3;
                margin-top: var(--spacing-l);
            }
        }
    }

    .avatars {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--48px);
        justify-content: center;
        padding: var(--32px) 0px;

        @include md($max: $screen-medium) {
            gap: var(--24px);
        }
    }
</style>
