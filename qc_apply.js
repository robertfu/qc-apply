function qc(value) {
  if (!value) {
    return value;
  }

  const valueWithoutNumber = value.replace(/\d*/g, "");

  const sameCharactersArray = valueWithoutNumber.match(/(\w)\1*/g);

  const result = [];
  if (sameCharactersArray) {
    while (sameCharactersArray.length > 0) {
      const element = sameCharactersArray.shift();
      result.push(element[0]);

      const count = element.length;

      if (count > 1) {
        result.push(count);
      }
    }
  }

  return result.join("");
}
