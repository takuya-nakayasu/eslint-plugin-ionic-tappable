# eslint-plugin-ionic-tappable

An ESLint plugin that click must be accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>`.

[![npm version](https://img.shields.io/npm/v/eslint-plugin-ionic-tappable.svg)](https://www.npmjs.com/package/eslint-plugin-ionic-tappable)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Twitter](https://img.shields.io/twitter/follow/takuya_nakayasu?style=social)](https://twitter.com/takuya_nakayasu)

## What’s `tappable` ?

`tappable` is an Ionic directive.

https://ionicframework.com/docs/troubleshooting/runtime#-

> In general, we recommend only adding `(click)` events to elements that are normally clickable. This includes `<button>` and `<a>` elements. This improves accessibility as a screen reader will be able to tell that the element is clickable

> However, you may need to add a `(click)` event to an element that is not normally clickable. When you do this you may experience a 300ms delay from the time you click the element to the event firing. To remove this delay, you can add the tappable attribute to your element.

```html
<div tappable (click)="doClick()">I am clickable!</div>
```

## Installation

```
npm install --save-dev eslint-plugin-ionic-tappable
```

Or

```
yarn add --dev eslint-plugin-ionic-tappable
```

## Usage

Modify your `.eslintrc`

```js
// .eslintrc.json
module.exports = {
  "overrides": [
    ...,
    {
      "files": ["*.html"],
      "parser": "@angular-eslint/template-parser",
      "plugins": [
        ...,
        "ionic-tappable"
      ],
      "rules": [
        ...,
        "ionic-tappable/click-events-have-tappable": "warn"
      ]
    }
  ]
}
```

## Rules

| Rule ID                                                                  | Description                                                                                                |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [click-events-have-tappable](./docs/rules/click-events-have-tappable.md) | Ensures that the click event is accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>` |

## Examples

Examples of **incorrect** code:

```html
<div (click)="doClick()">I am clickable!</div>
```

Examples of **correct** code:

```html
<div tappable (click)="doClick()">I am clickable!</div>

<button (click)="doClick()">I am clickable!</button>
```

## License

MIT
