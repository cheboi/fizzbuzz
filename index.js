function fizzbuzz(num = 100) {
  if (num === 0) return;
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzbuzz");
  } else if (num % 3 === 0) {
    console.log("fizz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(num);
  }
  fizzbuzz(num - 1);
}
fizzbuzz();
