# @gamestdio/easing

This is a grab-bag of [Robert Penner's easing equations](http://www.robertpenner.com/easing/), most of the code from [glsl-easings](https://www.npmjs.org/package/glsl-easings). Pull requests for optimizations are welcome.

## Usage

[![NPM](https://nodei.co/npm/@gamestdio/easing.png)](https://nodei.co/npm/@gamestdio/easing/)

Full list of eases:

```js
import { backInOut } from '@gamestdio/easing';
import { backIn } from '@gamestdio/easing';
import { backOut } from '@gamestdio/easing';
import { bounceInOut } from '@gamestdio/easing';
import { bounceIn } from '@gamestdio/easing';
import { bounceOut } from '@gamestdio/easing';
import { circInOut } from '@gamestdio/easing';
import { circIn } from '@gamestdio/easing';
import { circOut } from '@gamestdio/easing';
import { cubicInOut } from '@gamestdio/easing';
import { cubicIn } from '@gamestdio/easing';
import { cubicOut } from '@gamestdio/easing';
import { elasticInOut } from '@gamestdio/easing';
import { elasticIn } from '@gamestdio/easing';
import { elasticOut } from '@gamestdio/easing';
import { expoInOut } from '@gamestdio/easing';
import { expoIn } from '@gamestdio/easing';
import { expoOut } from '@gamestdio/easing';
import { linear } from '@gamestdio/easing';
import { quadInOut } from '@gamestdio/easing';
import { quadIn } from '@gamestdio/easing';
import { quadOut } from '@gamestdio/easing';
import { quartInOut } from '@gamestdio/easing';
import { quartIn } from '@gamestdio/easing';
import { quartOut } from '@gamestdio/easing';
import { quintInOut } from '@gamestdio/easing';
import { quintIn } from '@gamestdio/easing';
import { quintOut } from '@gamestdio/easing';
import { sineInOut } from '@gamestdio/easing';
import { sineIn } from '@gamestdio/easing';
import { sineOut } from '@gamestdio/easing';
```

All easing functions only remap a time value, and all have the same signature.

#### ```v = ease(t)```

Where `t` is typically a value between 0 and 1, and it returns a new float that has been eased.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/eases/blob/master/LICENSE.md) for details.
