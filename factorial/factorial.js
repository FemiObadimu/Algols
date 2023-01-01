export default function factorial(number) {
  let final = 1;
  for (let index = 2; index <= number; index++) {
    final = final * index;
  }

  return final;
}

factorial(5);
