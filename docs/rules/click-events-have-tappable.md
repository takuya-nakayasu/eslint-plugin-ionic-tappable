# Ensures that the click event is accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>` (`click-events-have-tappable`)

https://ionicframework.com/jp/docs/troubleshooting/runtime#-

> In general, we recommend only adding `(click)` events to elements that are normally clickable. This includes `<button>` and `<a>` elements. This improves accessibility as a screen reader will be able to tell that the element is clickable

> However, you may need to add a `(click)` event to an element that is not normally clickable. When you do this you may experience a 300ms delay from the time you click the element to the event firing. To remove this delay, you can add the tappable attribute to your element.

## Rule Details

This rule ensures that the click event is accompanied by `tappable`, except for `<button>`, `<ion-button>` and `<a>`.

## Examples

In the examples below, we will use the following configuration:

```json
"rules": {
  "ionic-tappable/click-events-have-tappable": "warn"
}
```

Examples of **incorrect** code:

```html
<div (click)="doClick()">I am clickable!</div>
```

Examples of **correct** code:

```html
<div tappable (click)="doClick()">I am clickable!</div>

<button (click)="doClick()">I am clickable!</button>
```
