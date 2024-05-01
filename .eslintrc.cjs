// module.exports = {
//   rules: {
//     // Désactiver la règle qui empêche l'utilisation de 'interface'
//     'no-restricted-syntax': [
//       'error',
//       {
//         selector: "TSDeclareFunction",
//         message: "Do not use 'interface', use 'type' instead."
//       }
//     ],
//   },
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     'react/jsx-no-target-blank': 'off',
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//     'no-unused-vars':0,
//   },
// }




// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     // Désactiver la règle qui empêche l'utilisation de 'interface'
//     'no-restricted-syntax': [
//       'error',
//       {
//         selector: "TSDeclareFunction",
//         message: "Do not use 'interface', use 'type' instead."
//       }
//     ],
//     'react/jsx-no-target-blank': 'off',
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//     'no-unused-vars': 0, // Vous avez déjà défini cette règle dans le bloc 'rules' précédent
//   },
// };




// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//     'plugin:@typescript-eslint/recommended', // Ajout de cette ligne pour prendre en charge TypeScript
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser', // Ajout de cette ligne pour prendre en charge TypeScript
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh', '@typescript-eslint'], // Ajout de '@typescript-eslint' pour prendre en charge TypeScript
//   rules: {
//     // Désactiver la règle qui empêche l'utilisation de 'interface'
//     'no-restricted-syntax': [
//       'error',
//       {
//         selector: "TSDeclareFunction",
//         message: "Do not use 'interface', use 'type' instead.",
//       },
//     ],
//     'react/jsx-no-target-blank': 'off',
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//     '@typescript-eslint/no-unused-vars': 0, // Vous avez déjà défini cette règle dans le bloc 'rules' précédent
//   },
// };




module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    // Désactiver la règle qui empêche l'utilisation de 'interface'
    'no-restricted-syntax': [
      'error',
      {
        selector: "TSDeclareFunction",
        message: "Do not use 'interface', use 'type' instead.",
      },
    ],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': 0, // Vous avez déjà défini cette règle dans le bloc 'rules' précédent
  },
};