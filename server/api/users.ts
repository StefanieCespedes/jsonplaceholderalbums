import type { User } from '~/lib/types';

const $config = useRuntimeConfig();

export const loadUsers = () =>
    $fetch<User[]>(`${$config.public.endpoints.albumsService}/users`);

export default (): Promise<User[]> => loadUsers();
