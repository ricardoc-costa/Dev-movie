import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import importHelpers from 'eslint-plugin-import-helpers'
import prettierPlugin from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': hooksPlugin,
      'import-helpers': importHelpers,
      prettier: prettierPlugin
    },
    rules: {
      'no-unused-vars': 'off',
      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Prettier
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'none',
          arrowParens: 'always',
          semi: false,
          endOfLine: 'auto'
        }
      ],

      // Import Helpers
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/^react/',
            'module',
            '/^@shared/',
            ['parent', 'sibling', 'index']
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true
          }
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
