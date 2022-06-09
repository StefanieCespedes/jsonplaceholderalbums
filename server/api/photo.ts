import type {IncomingMessage} from 'h3';
import type { Photo } from '~/lib/types';

const $config = useRuntimeConfig();

const getIdFromRequest = (req: IncomingMessage) =>  Number(req.originalUrl?.substring(req.originalUrl?.indexOf('=') + 1));

export const loadPhoto = (photoId: number) =>
    $fetch<Photo>(`${$config.public.endpoints.albumsService}/photos/${photoId}`);

export default (req: IncomingMessage) => loadPhoto(getIdFromRequest(req));
