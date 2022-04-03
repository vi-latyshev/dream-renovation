module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@next/next/recommended',
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
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['next.config.js'],
            },
        ],

        // using @typescript-eslint/...
        'no-duplicate-imports': 'off',
        'no-unused-vars': 'off',
        indent: 'off',
        semi: 'off',

        // extends the base eslint/...
        '@typescript-eslint/no-duplicate-imports': 'error',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/indent': [
            'error',
            4,
        ],
        '@typescript-eslint/semi': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/member-ordering': ['warn', {
            default: [
                'public-static-field',
                'protected-static-field',
                'private-static-field',

                'public-static-method',
                'protected-static-method',
                'private-static-method',

                'public-field',
                'protected-field',
                'private-field',

                'constructor',

                'public-abstract-field',
                'protected-abstract-field',
                'private-abstract-field',

                'public-abstract-method',
                'protected-abstract-method',
                'private-abstract-method',

                'public-method',
                'protected-method',
                'private-method',
            ],
        }],

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
        'react/jsx-max-props-per-line': ['error', {
            maximum: {
                single: 3,
                multi: 1,
            },
        }],
        'react/prop-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-unescaped-entities': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/display-name': 'off',
        'react/function-component-definition': ['error', {
            namedComponents: 'arrow-function',
        }],
        'react-hooks/exhaustive-deps': 'off',

        // jsx-a11y
        'jsx-a11y/anchor-is-valid': 'off',
    },
};
