# Vue Directive for Two-way Binding Shoelace Components

A custom Vue directive that makes two-way binding [Shoelace components](https://shoelace.style) easier.

## Usage

Install the directive with this command.

```sh
npm install @shoelace-style/vue-sl-model
```

Next, import the directive into your app and enable it like this.

```js
import ShoelaceModelDirective from 'shoelace-model-directive.js';

Vue.use(ShoelaceModelDirective);
Vue.config.ignoredElements = [/^sl-/];

// Your init here
new Vue({ ... });
```

Now you can use the `v-sl-model` directive to keep your data in sync!

```html
<sl-input v-sl-model="name"></sl-input>
```

## Why is this necessary?

Currently, there's [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830) in Vue. You can handle two-way binding manually, but's it rather verbose.

```html
<!-- This doesn't work -->
<sl-input v-model="name"></sl-input>

<!-- This works, but it's a bit longer -->
<sl-input :value="name" @input="name = $event.target.value"></sl-input>
```

This utility solves this problem by creating a custom directive that works just like `v-model` but for Shoelace components.
