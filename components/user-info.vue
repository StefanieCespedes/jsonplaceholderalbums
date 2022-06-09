<script setup lang="ts">
import { PropType } from 'vue';
import type { User } from '~/lib/types';

const props = defineProps({
    albumName: {
        required: true,
        type: String,
    },
    user: {
        required: true,
        type: Object as PropType<User>,
    }
});

const sendEmail = () => window.open(`mailto:${props.user.email}`);
</script>

<template>
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-12 pt-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg mb-10 md:mb-0">
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/300x300">
            </div>
            <div class="md:pl-16 flex flex-col md:items-start text-left">
                <h1 class="title-font sm:text-3xl text-2xl mb-1 font-medium text-gray-900">
                    {{ albumName }}
                </h1>
                <h2 class="title-font sm:text-2xl text-xl mb-1 font-small text-gray-900">
                    {{ user.name }}
                </h2>
                <p>{{ user.username }}</p>
                <p>Lives in {{ user.address.city }}</p>
                <p>
                    <span class="font-bold">Company: </span>
                    <span>{{ user.company.name }}</span>
                </p>
                <p class="mb-8">
                    <span class="font-bold">Company's catchphrase: </span>
                    <span>{{ user.company.catchPhrase }}</span>
                </p>
                <div class="flex justify-center">
                    <button
                        class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 mb-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        @click="sendEmail"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
