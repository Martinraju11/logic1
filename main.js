var input = prompt("Enter the sentence");
let out = "";
let output = "";
for (let i = input.length - 1; i >= 0; i--) {
  if (input[i] === " ") {
    break;
  }
  out += input[i];
}
for (let j = out.length - 1; j >= 0; j--) {
  output += out[j];
}
document.write(output);
