<script setup lang="ts">

</script>

<template>
    <header
        class="bg-primary text-secondary body-font"
    >
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                <a class="cursor-pointer mr-5">About</a>
            </nav>
            <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                <span class="ml-3 text-2xl text-secondary">Albums</span>
            </a>
            <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                <button
                    class="inline-flex items-center bg-secondary border-0 py-1 px-3 focus:outline-none rounded text-primary mt-4 md:mt-0"
                >
                    Button
                </button>
            </div>
        </div>
    </header>
</template>
