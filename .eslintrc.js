module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'eslint-plugin-react',
    ],
    extends: [
        'airbnb-typescript',
        'plugin:import/typescript',
    ],
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'max-len': [
            'error',
            {
                code: 120,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'linebreak-style': 'off',
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        radix: [
            'error',
            'as-needed',
        ],
        'newline-before-return': 'error',

        // import/...
        'import/prefer-default-export': 'off',
        // not supported 'import type'
        'import/order': 'off',

        // using @typescript-eslint/...
        'no-duplicate-imports': 'off',
        'no-unused-vars': 'off',
        indent: 'off',
        semi: 'off',

        // extends the base eslint/...
        '@typescript-eslint/no-duplicate-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/indent': [
            'error',
            4,
        ],
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-explicit-any': 'error',

        // react/
        'react/jsx-indent': [
            'error',
            4,
        ],
        'react/jsx-indent-props': [
            'error',
            4,
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-unescaped-entities': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
    },
};
