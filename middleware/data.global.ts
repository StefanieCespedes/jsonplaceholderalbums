import { getAlbums, getAlbumAndUser, getPhoto, getPhotos, getUsers } from '~/lib/async-data';
import { useAlbums, useAlbumAndUser, usePhoto, usePhotos, useUsers } from '~/lib/states';

export default defineNuxtRouteMiddleware(async (to, _from) => {
    if (to.name === 'error') {
        return;
    }

    const $albums = useAlbums();
    const $users = useUsers();
    const $album = useAlbumAndUser();
    const $photos = usePhotos();
    const $photo = usePhoto();

    try {
        if (!$albums.value) {
            $albums.value = await getAlbums();
        }
    } catch (reason) {
        return console.error(reason);
    }

    try {
        if (!$users.value) {
            $users.value = await getUsers();
        }
    } catch (reason) {
        return console.error(reason);
    }

    if (!to.params.id) {
        return;
    } else {
        const { id: albumId } = to.params;

        try {
            if (!$album.value || $album.value.id !== Number(albumId)) {
                $album.value = await getAlbumAndUser(Number(albumId));
            }
            if (!$photos.value || $album.value?.id !== Number(albumId)) {
                $photos.value = await getPhotos(Number(albumId));
            }
        } catch (reason) {
            return console.error(reason);
        }

        const { photoid: photoId } = to.params;

        if (String(to.name).startsWith('album-id-') && photoId) {
            try {
                if (!$photo.value || $photo.value.id !== Number(photoId)) {
                    $photo.value = await getPhoto(Number(photoId));
                    console.log($photo.value);
                }
            } catch (reason) {
                return console.error(reason);
            }

            if (to.name === 'album-id-error') {
                return;
            }
        }
    }
});
