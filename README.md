# s-flatten

A flatten function for Web Streams. Like `Array.prototype.flat()`, but for Web Streams.

## Installation

```bash
npm install s-flatten
```

## Usage

```js
import sFlatten from "s-flatten";

const stream = ReadableStream.from([
  [1, 2],
  [3, 4],
]).pipeThrough(sFlatten());

const result = await Array.fromAsync(stream);

console.log(result); // [1, 2, 3, 4]
```

## API

### `sFlatten()`

Returns a `TransformStream<T[], T>` that flattens the input stream.

## Related

- [s-batch](https://github.com/trevorah/s-batch) - Batch items in a stream
- [s-compose](https://github.com/trevorah/s-compose) - Compose streams together
