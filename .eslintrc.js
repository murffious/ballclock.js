module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'mocha': true,
    },
    'extends': [
        'eslint:recommended',
    ],
    'parserOptions': {
        'ecmaVersion': 8,
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true
        },
        'sourceType': 'module',
    },
    'rules': {
        'quotes': 0,
        'no-console': 0,
        'indent': [
            'error',
            2,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'semi': [
            'error',
            'always',
        ],
    },
};