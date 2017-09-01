module.exports = {
  'verbose': true,
  'transformIgnorePatterns': ['/node_modules/'],
  'globals': {
    '__DEV__': true
  },
  'testMatch': [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    "**/tests/**/*.(ts|tsx|js|jsx)",
    '**/?(*.)(spec|test).(ts|tsx|js|jsx)'
  ]
};