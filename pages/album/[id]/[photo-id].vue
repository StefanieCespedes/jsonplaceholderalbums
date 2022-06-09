<script setup lang="ts">
import { useAlbumAndUser, usePhoto, usePhotos } from '~/lib/states';

const $albumAndUser = useAlbumAndUser();
const $photosFromAlbum = usePhotos();
const $photo = usePhoto()
</script>

<template>
    <div>
        <Modal
            :photo="$photo"
        />
        <Header />
        <UserInfo
            :user="$albumAndUser.userData"
        />
        <PhotosGrid
            :photos="$photosFromAlbum"
        />
        <Footer />
    </div>
</template>
