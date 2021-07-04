import type { TmplAstElement, ParseSourceSpan } from '@angular/compiler';

import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils';

function convertNodeSourceSpanToLoc(
  sourceSpan: ParseSourceSpan
): TSESTree.SourceLocation {
  return {
    start: {
      line: sourceSpan.start.line + 1,
      column: sourceSpan.start.col,
    },
    end: {
      line: sourceSpan.end.line + 1,
      column: sourceSpan.end.col,
    },
  };
}

export const clickEventsHaveTappable: TSESLint.RuleModule<
  'clickEventsHaveTappable',
  []
> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Best Practices',
      description:
        'Ensures that the click event is accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>`.',
      recommended: 'warn',
      url: 'https://github.com/l08084/eslint-plugin-ionic-tappable/blob/main/docs/rules/click-events-have-tappable.md',
    },
    messages: {
      clickEventsHaveTappable:
        'click must be accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>`.',
    },
    schema: [],
  },
  create: (context) => {
    return {
      Element(node: TmplAstElement) {
        const name = node.name;
        if (name === 'ion-button' || name === 'button' || name === 'a') {
          return;
        }

        const haveClickEvent = node.outputs.find(
          (output) => output.name === 'click'
        );
        if (!haveClickEvent) {
          return;
        }

        const haveTappable = node.attributes.find(
          (attribute) => attribute.name === 'tappable'
        );
        if (!haveTappable) {
          const loc = convertNodeSourceSpanToLoc(node.sourceSpan);
          context.report({ loc, messageId: 'clickEventsHaveTappable' });
        }
      },
    };
  },
};

module.exports = clickEventsHaveTappable;
export default clickEventsHaveTappable;
