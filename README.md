# expand-top-level-dot-paths

> Expand top-level object properties that are dot-paths

## Install

```sh
npm install --save expand-top-level-dot-paths
```

```sh
yarn add expand-top-level-dot-paths
```

## Import

```js
// ES2015
import expand from 'expand-top-level-dot-paths'
```

```sh
// CommonJS
var expand = require('expand-top-level-dot-paths')
```

## Usage

### `expand(obj[, initialValue]) : Object`

Expand top-level object properties that are dot-paths. If no `initialValue` 
given the initial value is a clone of the object. In this case all original dot-path
properties are removed from the clone. 

- __obj__ {Object} (required) The object to expand
- __initialValue__ {Object} (optional) Value to place expanded properties on (default: clone of `obj`)

Returns `initialValue` with all top-level dot-path properties from `obj` expanded on it.

#### Example

```js
const obj = {
  'expand.me': 'please'
}

const expanded = expand(obj)
//=> {
//     expand: {
//       me: 'please'
//     }
//   }

obj === expanded //=> false
````

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](github.com/sdgluck)
