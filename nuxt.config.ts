import { defineNuxtConfig } from 'nuxt';

const { env } = process;

export default defineNuxtConfig({
    build: {
        postcss: {
            // add Postcss options
            postcssOptions: require('./postcss.config.js'),
        },
    },

    css: ['~/tailwind.css'],

    runtimeConfig: {
        public: {
            endpoints: {
                albumsService: env.SERVICE_ENDPOINT_PLACEHOLDER || 'https://jsonplaceholder.typicode.com'
            }
        }
    }
});
