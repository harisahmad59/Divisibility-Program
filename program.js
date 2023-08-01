let num = prompt("what is your number?");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("your number is divisible by 2 & 3");
} else {
  console.log("your number is not divisible by 2 & 3");
}
