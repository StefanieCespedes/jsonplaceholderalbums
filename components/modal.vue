<script setup lang="ts">
import {PropType} from 'vue';
import type { Photo } from '~/lib/types';
import {useAlbumAndUser} from '~/lib/states';

const props = defineProps({
    photo: {
        required: true,
        type: Object as PropType<Photo>,
    },
})

const $albumAndUser = useAlbumAndUser();

const closeModal = (id: number) => {
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
}
</script>

<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-black bg-opacity-50"
    >
        <div class="h-[500px] md:h-[600px] w-[600px] mt-16 border-rounded bg-white p-6 m-6">
            <h2 class="text-2xl mb-4">{{ photo.title }}</h2>
            <img class="h-[300px] md:h-[400px] w-full object-cover object-center mb-2" :src="photo.url" :alt="`photo from ${photo.title}`">
            <p class="text-primary">Owner: {{ $albumAndUser.userData.name }}</p>
            <p class="text-primary">Album: {{ $albumAndUser.albumData.title }}</p>
        </div>
        <div
            class="mt-8"
            @click="closeModal($albumAndUser.albumData.id)"
        >
            <svg
                class="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg" width="40" height="40" x="0px" y="0px" viewBox="0 0 26 26" xml:space="preserve">
                <g>
                    <path style="fill:#7fffd4;" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
                    C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0
                    L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467
                    L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468
                    c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467
                    C19.033,16.725,19.033,17.138,18.78,17.394z"/>
                </g>
            </svg>
            <button
                type="button"
                class="text-primary"
                title="close"
            >
                Close
            </button>
        </div>
    </div>
</template>
