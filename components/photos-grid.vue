<script setup lang="ts">
import { PropType } from 'vue';
import type { Photo } from '~/lib/types';

const props = defineProps({
    photos: {
        required: true,
        type: Array as PropType<Photo[]>
    }
})

const redirectToModal = (photoid: number) => {
    const $route = useRoute();
    const $router = useRouter();

    $router.push({
        name: 'album-id-photoid',
        params: {
            photoid,
        },
        query: {
            ...$route.query,
        },
    });
};
</script>

<template>
    <section class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 text-primary md:p-10">
        <div v-for="(photo, i) in photos">
            <div
                :key="i"
                class="container lg:px-10 lg:py-8 px-4 py-4 mx-auto"
                @click="redirectToModal(photo.id)"
            >
                <div class="h-full border-2 border-secondary border-opacity-60 rounded-lg overflow-hidden">
                    <img class="h-[150px] h-[150px] w-full object-cover object-center" :src="photo.thumbnailUrl" :alt="`photo from ${photo.title}`">
                    <div class="p-4">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">PHOTO</h2>
                        <h1 class="text-lg font-medium text-gray-900 mb-3">{{ photo.title }}</h1>
                        <div class="flex items-center flex-wrap">
                            <a class="text-primary inline-flex items-center md:mb-2 lg:mb-0 hover:underline cursor-pointer">See more
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
