module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Forbid the use of moment.js',
      category: 'Best Practices',
      recommended: true,
    },
  },
  
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'moment') {
          context.report({
            node,
            message: 'moment.js is forbidden.',
          });
        }
      },
      CallExpression(node) {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'require' &&
          node.arguments[0] &&
          node.arguments[0].value === 'moment'
        ) {
          context.report({
            node,
            message: 'moment.js is forbidden.',
          });
        }
      },
    };
  },
}; 