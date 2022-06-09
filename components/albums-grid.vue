<script setup lang="ts">
import { PropType } from 'vue';
import type { Album, User } from '~/lib/types';
import { getCoverPicture } from '~/lib/colors';

const props = defineProps({
    albums: {
        required: true,
        type: Array as PropType<Album[]>,
    },
    users: {
        required: true,
        type: Array as PropType<User[]>
    }
})

const findUserName = (id: number) => props.users.find(u => u.id === id)?.name;

const redirectToAlbumPage = (id: number) => {
    const $route = useRoute();
    const $router = useRouter();

    $router.push({
        name: 'album-id',
        params: {
            id,
        },
        query: {
            ...$route.query,
        },
    });
};

</script>

<template>
    <section class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 text-primary md:p-10">
        <div v-for="(album, index) in albums">
            <div
                class="container lg:px-10 lg:py-8 px-4 py-4 mx-auto"
                @click="redirectToAlbumPage(album.id)"
            >
                <div class="h-full border-2 border-secondary border-opacity-60 rounded-lg overflow-hidden">
                    <img class="h-[150px] h-[150px] w-full object-cover object-center" :src="getCoverPicture(album.userId)" :alt="`album image for album ${index + 1}`">
                    <div class="p-4">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">ALBUM</h2>
                        <h1 class="text-lg font-medium text-gray-900 mb-3">{{ album.title }}</h1>
                        <p class="leading-relaxed mb-3">Owner: {{ findUserName(album.userId) }}</p>
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
