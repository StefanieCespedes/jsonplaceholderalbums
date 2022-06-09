import { mount } from '@vue/test-utils';
import PhotosGrid from './photos-grid.vue';
import photos from '../samples/photos.json';

describe('PhotosGrid', () => {
    const makeWrapper = (additionalProps = {}) => mount(PhotosGrid, {
        props: {
            photos,
        }
    });

    it('passes the smoke test', () => {
        expect(() => makeWrapper()).not.toThrow();
    });
});
