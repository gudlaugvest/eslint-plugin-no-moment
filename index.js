module.exports = {
  rules: {
    'no-moment': require('./rules/no-moment'),
  },
  configs: {
    recommended: {
      plugins: ['no-moment'],
      rules: {
        'no-moment/no-moment': 'error',
      },
    },
  },
}; 