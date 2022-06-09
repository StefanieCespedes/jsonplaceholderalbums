<script setup lang="ts">
import { usePhotos, useAlbumAndUser } from '~/lib/states';

const $route = useRoute();
const albumId = $route.params.id;

const $albumAndUser = useAlbumAndUser();
const $photosFromAlbum = usePhotos();
</script>

<template>
    <div>
        <Header />
        <UserInfo
            :album-name="$albumAndUser.albumData.title"
            :user="$albumAndUser.userData"
        />
        <PhotosGrid
            :photos="$photosFromAlbum"
        />
        <Footer />
    </div>
</template>
