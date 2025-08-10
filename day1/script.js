one => {
  {
    function sum(numbers) {
      if (numbers.length === 0) { return 0 }
      return totalSum = numbers.reduce((acc, value) => acc + value, 0)
    };
    sum([1, 5.2, 4, 0, -1]);
    sum([]);
  }
}

two => {
  let haystack_1 = [
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ];
function findNeedle(haystack) {
  const index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

  findNeedle(haystack_1);

}

three => {
  function simpleMultiplication(number) {
    if (number % 2 === 0) {return number * 8;} else {return number * 9;}
  }
  simpleMultiplication(2);
}

four => {
  function opposite(number) {
    return 0 - number;
  }
  opposite(1);
}


