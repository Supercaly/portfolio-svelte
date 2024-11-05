<script lang="ts">
    const currentTime = new Date().getHours();
    const ticks = [...Array(24).keys()];

    function mapToHeight(num: number, time: number) {
        switch (Math.abs(time - num)) {
            case 0:
                return 30;
            case 1:
                return 25;
            case 2:
                return 20;
            case 3:
                return 15;
            default:
                return 10;
        }
    }
</script>

<footer>
    <div>
        <p class="title-medium">Designed and built by me in 2024.</p>
    </div>
    <div class="sundial">
        {#each ticks as t}
            <div class="hour">
                <div
                    class="line"
                    style="opacity: {t + 1 >= 6 && t + 1 <= 20
                        ? '1'
                        : '0.2'}; height: {mapToHeight(t + 1, currentTime)}px"
                ></div>
            </div>
        {/each}
    </div>
</footer>

<style lang="scss">
    @use "../mixins.scss" as *;

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--footer-max-width);
        padding: var(--spacing-l) 0px var(--spacing-xl);
        gap: var(--spacing-l);
    }

    .sundial {
        display: flex;
        flex-direction: row;
        width: 100%;
        box-sizing: border-box;

        padding: 0px var(--32px);

        .hour {
            flex: 1;
            height: 30px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
        }

        .line {
            width: var(--2px);
            background: var(--color-primary);
            border-radius: var(--8px);
        }
    }
</style>
