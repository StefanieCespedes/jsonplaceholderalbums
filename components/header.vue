<script setup lang="ts">
const redirectToHome = () => {
    const $router = useRouter();

    $router.push({
        path: '/',
    });
}
</script>

<template>
    <header
        class="bg-secondary text-primary body-font"
    >
        <div class="container mx-auto p-6 lg:pl-12">
            <span
                class="text-2xl cursor-pointer"
                @click="redirectToHome"
            >
                Albums
            </span>
        </div>
    </header>
</template>
