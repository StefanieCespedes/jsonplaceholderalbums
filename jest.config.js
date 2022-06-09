module.exports = {
    moduleFileExtensions: [
        'ts',
        'js',
        'json',
        'vue',
    ],
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
    },
    modulePaths: [
        'src',
        '<rootDir>',
    ],
    notify: false,
    notifyMode: 'success-change',
    testEnvironment: 'jsdom',
    testMatch: [
        '**/*.spec.ts',
    ],
    transform: {
        '.*\\.(vue)$': 'vue3-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
};
