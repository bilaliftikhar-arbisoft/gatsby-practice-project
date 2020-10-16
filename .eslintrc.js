module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'plugin:react/recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'react/no-find-dom-node': ['warn'],
        'react/prop-types': ['off'],
        'eol-last': ['error', 'always']
    }
};
