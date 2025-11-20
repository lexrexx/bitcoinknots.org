import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    // files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'vue/no-parsing-error': ['error', {
        'invalid-first-character-of-tag-name': false,
      }],
    },
  },
)
