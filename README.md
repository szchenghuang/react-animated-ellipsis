# ReactAnimatedEllipsis #

A React component to animate ellipsis.

![screenshot](https://raw.githubusercontent.com/szchenghuang/animated-ellipsis/master/screenshots/animated-ellipsis.gif)

This is a React wrapper of [animated-ellipsis](https://github.com/szchenghuang/animated-ellipsis).

## Install ##

```sh
npm install react-animated-ellipsis
```

## Usage ##

```js
var ReactAnimatedEllipsis = require( 'react-animated-ellipsis' );

<div>Loading<ReactAnimatedEllipsis/></div>
```
![loading](https://raw.githubusercontent.com/szchenghuang/animated-ellipsis/master/screenshots/loading.gif)

## Configuration ##

There are some settings you can tweak by setting the props.

```js
<ReactAnimatedEllipsis
    fontSize="3rem"
    marginLeft="5px"
    spacing="0.3rem" />
```

* fontSize: The font size of dots. **Default: 2rem**.
* marginLeft: The spacing between the sibling text and the first dot. The value is set to `margin-left` of the first dot. **Default: 0.1rem**.
* spacing: The spacing between dots. The value is set to `margin-left` of the second and third dots. **Default: 0.1rem**.

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-animated-ellipsis/blob/master/LICENSE.md) for details.
