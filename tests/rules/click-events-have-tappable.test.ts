import { TSESLint } from '@typescript-eslint/experimental-utils';
import haveTappable from '../../src/rules/click-events-have-tappable';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@angular-eslint/template-parser'),
});

tester.run('haveTappable', haveTappable, {
  valid: [{ code: 'const RE_AS_BS = /aa(?=bb)/' }],
  invalid: [
    {
      code: 'const RE_DOLLAR_PREFIX = /(?<=$)foo/g',
      errors: [{ messageId: 'haveTappable' }],
    },
    {
      code: `const re = new RegExp('(?<=ripe )orange')`,
      errors: [{ messageId: 'haveTappable' }],
    },
    {
      code: `const str = '(?<!ripe )orange'`,
      errors: [{ messageId: 'haveTappable' }],
    },
    {
      code: 'const RE_DOLLAR_PREFIX = /(?<!$)foo/g',
      errors: [{ messageId: 'haveTappable' }],
    },
  ],
});
