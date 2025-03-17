const billInput = document.getElementById("bill-input");
const tips = document.getElementById("tips");

const sanitizeBillInput = (input) => {
  input = input.replace(/[^\d.]/g, "");

  if ((input.match(/\./g) || []).length > 1) {
    input = input.slice(0, -1);
  }
  return input;
};

billInput.addEventListener("input", (event) => {
  billInput.value = sanitizeBillInput(event.target.value);
});

tips.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;
  const percentage = event.target.textContent.replace("%", "");
  console.log(parseFloat("4.5"));
  console.log(typeof percentage);
});
