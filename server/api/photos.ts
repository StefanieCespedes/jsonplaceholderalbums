import type { Photo } from '~/lib/types';

const $config = useRuntimeConfig();

export const loadPhotos = () =>
    $fetch<Photo[]>(`${$config.public.endpoints.albumsService}/photos`);

export default () => loadPhotos();
