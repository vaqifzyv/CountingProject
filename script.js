let counter = 0;

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counting = document.querySelector(".counting");
const resetButton = document.querySelector("#reset");

plus.addEventListener("click", () => {
  counter++;
  counting.textContent = counter;
});

minus.addEventListener("click", () => {
  counter--;
  counting.textContent = counter;
});

resetButton.addEventListener("click", () => {
  counter = 0;
  counting.textContent = counter;
});
