export default function sFlatten() {
  return new TransformStream({
    transform(chunk, controller) {
      chunk.forEach((item) => controller.enqueue(item));
    },
  });
}
