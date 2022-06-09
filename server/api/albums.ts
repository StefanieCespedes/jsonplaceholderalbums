import type { Album } from '~/lib/types';

const $config = useRuntimeConfig();

export const loadAlbums = () =>
    $fetch<Album[]>(`${$config.public.endpoints.albumsService}/albums`);

export default (): Promise<Album[]> => loadAlbums();
