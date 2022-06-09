import { mount } from '@vue/test-utils';
import UserInfo from './user-info.vue';
import users from '../samples/users.json';

describe('UserInfo', () => {
    const makeWrapper = (additionalProps = {}) => mount(UserInfo, {
        props: {
            user: users[0],
        }
    });

    it('passes the smoke test', () => {
        expect(() => makeWrapper()).not.toThrow();
    });
});
