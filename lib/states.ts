import type { Album, User, Photo } from '~/lib/types';

export const useAlbums = () => useState<Album[] | null>('albums-data', () => null);

export const useAlbumAndUser = () => useState<Album | User | null>('album-data', () => null);

export const usePhotos = () => useState<Photo[] | null>('photos-data', () => null);

export const usePhoto = () => useState<Photo | null>('photo-data', () => null);

export const useUsers = () => useState<User[] | null>('user-data', () => null);

export const useUser = () => useState<User | null>('user-data', () => null);
