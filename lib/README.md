### How to use

0. Install AOS following their instructions (https://github.com/michalsnik/aos).

1. Install our package with:

`yarn add aos-animations`

or

`npm i --save aos-animations`

2. Add css and js files to your html file:

``` html

<link rel="stylesheet" href="node_modules/aos-animations/animations.min.css">

...

<script src="node_modules/aos-animations/animations.min.js"></script>

```

3. Start using!


### Animations we support:

1. Text reveal from left to right.

Usage:

``` html

<div data-aos="tr-lr">Your text</div>

```


2. Text reveal from bottom to top.

Usage:

``` html

<div data-aos="tr-bt">Your text</div>

```


3. Text reveal from top to bottom.

Usage:

``` html

<div data-aos="tr-tb">Your text</div>

```