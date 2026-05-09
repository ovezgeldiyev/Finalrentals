(function () {
  const spinBoxWrapper = document.getElementById("spinBoxWrapper");
  if (spinBoxWrapper) {
    const spinBoxes = document.querySelectorAll(".spin");
    spinBoxes.forEach((quantityContainer) => {
      const minusBtn = quantityContainer.querySelector(".spin__minus");
      const plusBtn = quantityContainer.querySelector(".spin__plus");
      const inputBox = quantityContainer.querySelector("input");

      updateButtonStates();

      quantityContainer.addEventListener("click", handleButtonClick);
      inputBox.addEventListener("input", handleQuantityChange);

      function updateButtonStates() {
        const value = parseInt(inputBox.value);
        minusBtn.disabled = value <= 0;
        plusBtn.disabled = value >= parseInt(inputBox.max);
      }

      function handleButtonClick(event) {
        if (event.target.classList.contains("spin__minus")) {
          decreaseValue();
        } else if (event.target.classList.contains("spin__plus")) {
          increaseValue();
        }
      }

      function decreaseValue() {
        let value = parseInt(inputBox.value);
        value = isNaN(value) ? 0 : Math.max(value - 1, 0);
        inputBox.value = value;
        updateButtonStates();
        handleQuantityChange();
      }

      function increaseValue() {
        let value = parseInt(inputBox.value);
        value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
        inputBox.value = value;
        updateButtonStates();
        handleQuantityChange();
      }

      function handleQuantityChange() {
        let value = parseInt(inputBox.value);
        value = isNaN(value) ? 1 : value;
      }
    });
  }
})();
