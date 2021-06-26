import { TSESLint } from '@typescript-eslint/experimental-utils';
import haveTappable from '../../src/rules/click-events-have-tappable';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@angular-eslint/template-parser'),
});

tester.run('haveTappable', haveTappable, {
  valid: [{ code: '<h1>Heading Content!</h1>' }],
  invalid: [
    {
      code: '<h1>Heading Content!</h1>',
      errors: [{ messageId: 'haveTappable' }],
    },
  ],
});
