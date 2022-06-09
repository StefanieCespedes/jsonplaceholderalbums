import type { Album, User, Photo } from '~/lib/types';

export const getAlbums = (): Promise<Album[]> =>
    $fetch('/api/albums');

export const getAlbumAndUser = (albumId: number): Promise<Album> =>
    $fetch('/api/album', {
        params: {
            id: albumId,
        },
    });

export const getPhotos = (albumIdFromQuery: number): Promise<Photo[]> =>
    $fetch('/api/photos')
        .then((photos) => photos.filter(p => p.albumId === Number(albumIdFromQuery)));

export const getPhoto = (photoId: number): Promise<Photo> =>
    $fetch('/api/photo', {
        params: {
            photoId,
        },
    });

export const getUsers = (): Promise<User[]> =>
    $fetch('/api/users');
