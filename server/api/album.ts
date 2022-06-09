import type {IncomingMessage} from 'h3';
import type {Album} from '~/lib/types';

const $config = useRuntimeConfig();

const getIdFromRequest = (req: IncomingMessage) => Number(req.originalUrl?.substring(req.originalUrl?.indexOf('=') + 1));

export const loadAlbum = (albumId: number) =>
    $fetch<Album>(`${$config.public.endpoints.albumsService}/albums/${albumId}`)
        .then((albumData) => $fetch(`${$config.public.endpoints.albumsService}/users/${albumData.userId}`)
                .then((userData) => {
                    return {
                        albumData,
                        userData
                    };
                })
        )
        .catch(err => console.error('Request failed', err));

export default (req: IncomingMessage) => loadAlbum(getIdFromRequest(req));
