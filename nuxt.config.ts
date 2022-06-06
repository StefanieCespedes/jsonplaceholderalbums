import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    build: {
        postcss: {
            // add Postcss options
            postcssOptions: require('./postcss.config.js'),
        },
    },

    css: ['~/tailwind.css']
});
