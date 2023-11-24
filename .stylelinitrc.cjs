module.exports = {
    extends: [
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    'stylelint-config-standard-css',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
    ],
    overrides: [
      {
        files: ["**/*".(scss|css|vue|html)],
        customerSyntax: 'postcss-scss'
      },
      {
        files: ['**/*'.(html|vue)],
        customerSyntax: 'postcss-html'
      }
    ],
    ignoreFiles: [
      '**/*.js',
      '**/*.jsx',
      '**/*.tsx',
      '**/*.ts',
      '**/*.json',
      '**/*.md',
      '**/*.yaml'
    ],
    rules: {
      'value-keyword-case': null,
      'no-desending-specificity': null,
      'function-url-quotes': 'always',
      'property-no-unknown': null,
      'block-opening-brace-space-before': 'always',
      'value-no-vendor-prefix': null,
      'property-no-vendor-prefix': null,
      'selector-pseudo-class-no-unkown': [
        true,
        {
          'ignorePseudoClasses': ['global', 'v-deep', 'deep']
        }
      ]
    }
  }