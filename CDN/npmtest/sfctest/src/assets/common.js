export const generator = function* (title) {
  let num = 1;
  while (true) {
    yield `${title}_${num++}`;
  }
};
