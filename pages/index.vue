<script setup lang="ts">
import { useAlbums, useUsers } from '~/lib/states';

const albums = useAlbums();
const users = useUsers();
</script>

<template>
    <div>
        <Header />
        <AlbumsGrid
            :albums="albums"
            :users="users"
        />
        <Footer />
    </div>
</template>
