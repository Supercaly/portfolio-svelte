<footer>
    <div class="copyright">
        <p class="title-medium">Designed and built by me in 2024.</p>
    </div>
    <ul>
        <li class="title-medium">Elsewhere</li>
        <li class="body-medium">
            <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>

        <li class="body-medium">
            <a href="/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li class="body-medium">
            <a href="/" target="_blank" rel="noopener noreferrer">CV</a>
        </li>
        <li class="body-medium">
            <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
    </ul>
</footer>

<style lang="scss">
    @use "../mixins.scss" as *;

    footer {
        display: grid;
        width: 100%;
        max-width: var(--max-width);
        grid-template-columns: repeat(25, minmax(0, 1fr));
        padding: var(--spacing-xl) 0px;

        @include md($screen-large) {
            padding: var(--spacing-xxl) 0px;
        }
    }

    .copyright {
        display: block;
        grid-column-start: 4;
        grid-column-end: 21;

        @include md($screen-medium) {
            grid-column-end: 15;
        }
    }

    ul {
        display: block;
        grid-column-start: 4;
        grid-column-end: 21;
        list-style-type: none;
        padding: 0px;
        margin: var(--spacing-l) 0px 0px;

        @include md($screen-medium) {
            margin: 0px;
            grid-column-start: 21;
            grid-column-end: 23;
        }
    }

    li {
        display: flex;
    }

    a {
        margin-top: var(--24px);
        text-decoration: none;
        color: var(--color-secondary);
        transition: all 0.2s ease-in-out;

        &:hover {
            color: var(--color-primary);
        }
    }
</style>
