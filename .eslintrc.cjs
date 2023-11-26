module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:promise/recommended',
        'plugin:jest/recommended',
        'plugin:testing-library/react',
        'standard',
        'standard-react',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false
    },
    plugins: ['import', 'react', 'react-hooks', 'promise', 'jest', 'simple-import-sort', '@typescript-eslint'],
    root: true,
    rules: {
        indent: 'off',
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', 'tsx']
            }
        ],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-fragments': ['error', 'element'],
        'react/require-default-props': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 0,
        'react-hooks/exhaustive-deps': 0,
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'max-len': 'off',
        'func-names': 'off',
        'import/extensions': ['error', 'never', {svg: true, json: true}],
        'import/no-unresolved': ['error', {ignore: ['^@?\\w', '^app/']}],
        'import/no-extraneous-dependencies': ['error'],
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'jest/no-large-snapshots': ['warn', {maxSize: 30}],
        'promise/prefer-await-to-then': 'error',
        'promise/prefer-await-to-callbacks': 'warn',
        'no-restricted-syntax': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'error',
        'require-await': 'error',
        'no-return-await': 'error',
        'linebreak-style': ['error', 'unix'],
        'no-param-reassign': 'off',
        'comma-dangle': ['error', 'never'],
        'space-before-function-paren': 0,
        'react/jsx-handler-names': 0,
        'react/no-unused-prop-types': 0,
        'import/export': 0,
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 4,
                bracketSpacing: true,
                singleQuote: true,
                jsxSingleQuote: true,
                semi: true,
                trailingComma: 'none'
            }
        ]
    },
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            [
                                '^react',
                                '^@?\\w',
                                '^(@|components)(/.*|$)',
                                '^\\u0000',
                                '^\\.\\.(?!/?$)',
                                '^\\.\\./?$',
                                '^\\./(?=.*/)(?!/?$)',
                                '^\\.(?!/?$)',
                                '^\\./?$',
                                '^.+\\.?(css)$'
                            ]
                        ]
                    }
                ]
            }
        }
    ],
    settings: {
        react: {
            version: 'detect'
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        'import/resolver': {
            typescript: {}
        }
    },
    globals: {
        shallow: false
    }
};
