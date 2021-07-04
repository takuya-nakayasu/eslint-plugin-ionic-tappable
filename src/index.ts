import clickEventsHaveTappable from './rules/click-events-have-tappable';

export = {
  rules: {
    'click-events-have-tappable': clickEventsHaveTappable,
  },
  configs: {
    all: {
      parser: '@angular-eslint/template-parser',
      plugins: ['ionic-tappable'],
      rules: {
        'ionic-tappable/click-events-have-tappable': 'warn',
      },
    },
    recommended: {
      parser: '@angular-eslint/template-parser',
      plugins: ['ionic-tappable'],
      rules: {
        'ionic-tappable/click-events-have-tappable': 'warn',
      },
    },
  },
};
