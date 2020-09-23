# vue-tooltip-lite
Vue Directive Tooltip : Super lightweight, easy to use and no dependency

## Installation

### Browser

Include the script file

### Module

```js
import tooltip from 'vue-tooltip-lite';
Vue.directive("tooltip", tooltip);
```

## Use

```html
<button v-tooltip="I am your tooltip">Hover me! (show bottom)</button>
<button v-tooltip.left="I am your tooltip">Hover me! (show left)</button>
<button v-tooltip.top="I am your tooltip">Hover me! (show top)</button>
<button v-tooltip.right="I am your tooltip">Hover me! (show right)</button>
```