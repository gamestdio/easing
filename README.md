# @gamestdio/easing

This is a grab-bag of [Robert Penner's easing equations](http://www.robertpenner.com/easing/), most of the code from [glsl-easings](https://www.npmjs.org/package/glsl-easings). Pull requests for optimizations are welcome.

## Usage

[![NPM](https://nodei.co/npm/@gamestdio/easing.png)](https://nodei.co/npm/@gamestdio/easing/)

Full list of eases:

```js
import { backInOut } from './back-in-out';
import { backIn } from './back-in';
import { backOut } from './back-out';
import { bounceInOut } from './bounce-in-out';
import { bounceIn } from './bounce-in';
import { bounceOut } from './bounce-out';
import { circInOut } from './circ-in-out';
import { circIn } from './circ-in';
import { circOut } from './circ-out';
import { cubicInOut } from './cubic-in-out';
import { cubicIn } from './cubic-in';
import { cubicOut } from './cubic-out';
import { elasticInOut } from './elastic-in-out';
import { elasticIn } from './elastic-in';
import { elasticOut } from './elastic-out';
import { expoInOut } from './expo-in-out';
import { expoIn } from './expo-in';
import { expoOut } from './expo-out';
import { linear } from './linear';
import { quadInOut } from './quad-in-out';
import { quadIn } from './quad-in';
import { quadOut } from './quad-out';
import { quartInOut } from './quart-in-out';
import { quartIn } from './quart-in';
import { quartOut } from './quart-out';
import { quintInOut } from './quint-in-out';
import { quintIn } from './quint-in';
import { quintOut } from './quint-out';
import { sineInOut } from './sine-in-out';
import { sineIn } from './sine-in';
import { sineOut } from './sine-out';
```

All easing functions only remap a time value, and all have the same signature.

#### ```v = ease(t)```

Where `t` is typically a value between 0 and 1, and it returns a new float that has been eased.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/eases/blob/master/LICENSE.md) for details.
