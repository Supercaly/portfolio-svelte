<script module>
    const avatars = import.meta.glob<string>("$lib/assets/avatars/*.png", {
        import: "default",
        eager: true,
        query: "?url",
    });
</script>

<script lang="ts">
    interface Props {
        name: string;
        description: string;
        size: string;
    }

    const { name, description, size }: Props = $props();
</script>

<div class="avatar" style="width: {size}; height: {size}">
    <div></div>
    <img src={avatars["/src/lib/assets/avatars/" + name]} alt={description} />
</div>

<style lang="scss">
    .avatar {
        border-radius: 100%;
        position: relative;
        overflow: hidden;
        
        & > div {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            border-radius: 100%;
            
            &:hover {
                background: var(--color-on-primary-opacity-40);
            }
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
