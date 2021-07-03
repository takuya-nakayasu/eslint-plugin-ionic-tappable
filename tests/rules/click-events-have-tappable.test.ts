import { TSESLint } from '@typescript-eslint/experimental-utils';
import haveTappable from '../../src/rules/click-events-have-tappable';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@angular-eslint/template-parser'),
});

tester.run('haveTappable', haveTappable, {
  valid: [
    { code: `<h1>Heading Content!</h1>` },
    { code: `<div tappable (click)="doClick()">I am clickable!</div>` },
    { code: `<button (click)="doClick()">I am clickable!</button>` },
    { code: `<ion-button (click)="doClick()">I am clickable!</ion-button>` },
    { code: `<a (click)="doClick()">I am clickable!</a>` },
  ],
  invalid: [
    {
      code: `<div (click)="doClick()">I am clickable!</div>`,
      errors: [{ messageId: 'haveTappable' }],
    },
    {
      code: `<span (click)="doClick()">I am clickable!</span>`,
      errors: [{ messageId: 'haveTappable' }],
    },
  ],
});
