import sFlatten from "./index.js";
import { test } from "node:test";
import assert from "node:assert";

test("sFlatten", async () => {
  const result = await Array.fromAsync(
    ReadableStream.from([
      [1, 2],
      [3, 4],
    ]).pipeThrough(sFlatten())
  );

  assert.deepEqual(result, [1, 2, 3, 4]);
});
