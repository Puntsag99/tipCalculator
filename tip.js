const billInput = document.getElementById("bill-input");
const tips = document.getElementById("tips");
const total = document.getElementById("total");
const reset = document.getElementById("reset-button");

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

  const amount = parseFloat(billInput.value);

  if (!amount) return alert("Bilee oruul");

  const percentage = parseFloat(event.target.textContent.replace("%", ""));

  const tipAmount = amount + (amount * percentage) / 100;

  total.textContent = `Total:${tipAmount}`;
});

reset.addEventListener("click", () => {
  billInput.value = "";
  total.textContent = "0.00";
});
