import { mount } from '@vue/test-utils';
import AlbumsGrid from './albums-grid.vue';
import albums from '../samples/albums.json';
import users from '../samples/users.json';

describe('AlbumsGrid', () => {
    const makeWrapper = (additionalProps = {}) => mount(AlbumsGrid, {
        props: {
            albums,
            users,
        }
    });

    it('passes the smoke test', () => {
        expect(() => makeWrapper()).not.toThrow();
    });
});
