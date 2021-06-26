import { TSESLint } from '@typescript-eslint/experimental-utils';

export const haveTappable: TSESLint.RuleModule<'haveTappable', []> = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Possible Errors',
      description:
        'disallow the use of lookbehind assertions((?<= ) and (?<! )) in regular expressions',
      recommended: 'error',
      url: '',
    },
    messages: {
      haveTappable:
        'Unexpected lookbehind assertions((?<= ) and (?<! )) in regular expression: {{stringValue}}.',
    },
    schema: [],
  },
  create: (context) => {
    return {
      Literal(node) {
        context.report({
          node,
          messageId: 'haveTappable',
        });
      },
    };
  },
};

module.exports = haveTappable;
export default haveTappable;
