import type { TmplAstElement } from '@angular/compiler';

import { TSESLint } from '@typescript-eslint/experimental-utils';

export const haveTappable: TSESLint.RuleModule<'haveTappable', []> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Best Practices',
      description:
        'Ensures that the click event is accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>`.',
      recommended: 'warn',
      url: '',
    },
    messages: {
      haveTappable:
        'click must be accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>`.',
    },
    schema: [],
  },
  create: (context) => {
    return {
      Element(node: TmplAstElement) {
        console.log(node);
        // context.report({
        //   nod,
        //   messageId: 'haveTappable',
        // });
      },
    };
  },
};

module.exports = haveTappable;
export default haveTappable;
