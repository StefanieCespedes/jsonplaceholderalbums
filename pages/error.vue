<script setup lang="ts">
const $route = useRoute();
const { stack } = $route.query;
</script>

<template>
    <div>
        <Header />
        <h1 class="ml-10 flex items-center gap-2 text-primary mb-10 mt-10">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>

            An error occurred
        </h1>

        <p class="text-primary pb-4 ml-10">
            Contact technical support with this information:
        </p>

        <code class="text-primary break-all ml-10">
            {{ String(stack || 'No stack available') }}
        </code>
    </div>
</template>
