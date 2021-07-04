import { TSESLint } from '@typescript-eslint/experimental-utils';
import clickEventsHaveTappable from '../../src/rules/click-events-have-tappable';

const tester = new TSESLint.RuleTester({
  parser: require.resolve('@angular-eslint/template-parser'),
});

tester.run('clickEventsHaveTappable', clickEventsHaveTappable, {
  valid: [
    { code: `<h1>Heading Content!</h1>` },
    {
      code: `<div tappable (click)="doClick()">I am clickable!</div>`,
    },
    {
      code: `<div appHighlight tappable (click)="doClick()">I am clickable!</div>`,
    },
    { code: `<button (click)="doClick()">I am clickable!</button>` },
    { code: `<ion-button (click)="doClick()">I am clickable!</ion-button>` },
    { code: `<a (click)="doClick()">I am clickable!</a>` },
    {
      code: `
    <a
    aria-label="Angular on YouTube"
    target="_blank"
    rel="noopener"
    href="https://youtube.com/angular"
    title="YouTube"
  >
    <svg
      id="youtube-logo"
      height="24"
      width="24"
      fill="#fff"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
    </svg>
  </a>
  `,
    },
    {
      code: `
    <a
    (click)="doClick()"
    target="_blank"
    rel="noopener"
    href="https://youtube.com/angular"
    title="YouTube"
  >
    <svg
      id="youtube-logo"
      height="24"
      width="24"
      fill="#fff"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
    </svg>
  </a>
  `,
    },
  ],
  invalid: [
    {
      code: `<div (click)="doClick()">I am clickable!</div>`,
      errors: [{ messageId: 'clickEventsHaveTappable' }],
    },
    {
      code: `<span appHighlight (click)="doClick()">I am clickable!</span>`,
      errors: [{ messageId: 'clickEventsHaveTappable' }],
    },
  ],
});
