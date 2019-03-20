# AOS-Animations 🦄


Some nice animations to use with [AOS](https://github.com/michalsnik/aos).


## How to use

0. Install AOS following their instructions (https://github.com/michalsnik/aos).

1. Install our package with:


`yarn add aos-animations` or `npm i --save aos-animations`



2. Add css and js files to your html file:

``` html

<link rel="stylesheet" href="node_modules/aos-animations/animations.min.css">

...

<script src="node_modules/aos-animations/animations.min.js"></script>

```

or import to your js file:


``` js

import 'aos-animations/animations.min.css';
import 'aos-animations/animations.min.js';

```

3. Start using!


## Animations we support:

#### Text reveal from left to right.

Usage:

``` html

<div data-aos="tr-lr">Your text</div>

```



#### Text reveal from bottom to top.

Usage:

``` html

<div data-aos="tr-bt">Your text</div>

```



#### Text reveal from top to bottom.

Usage:

``` html

<div data-aos="tr-tb">Your text</div>

```
