const text = document.getElementById("text");
const result = document.getElementById("result");
const check = document.getElementById("check");
text.addEventListener("input", () => {
  test(text.value);
});
function test(text) {
  if (text.split("").reverse().join("") !== text) {
    result.innerText = "Not A Valid Palindrome Word";
  } else {
    result.innerText = "A Valid Palindrome Word";
  }
}
