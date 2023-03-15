const numberBtn = document.querySelectorAll(".numberBtn");
const operationKeys = document.querySelectorAll(".operationKeys");
const screenValue = document.querySelector(".values");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector(".equalBtn");

Array.from(numberBtn).forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    screenValue.innerHTML += btn.innerHTML;
  });
});

Array.from(operationKeys).forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    screenValue.innerHTML += btn.innerHTML;
  });
});

equalBtn.addEventListener("click" , (e) => {
    try {
        ans = eval(screenValue.innerHTML)
        screenValue.innerHTML = ans
    } catch (e) {
        screenValue.innerHTML = "Invalid Input"
    }
})

clearBtn.addEventListener("click" , (e) => {
    screenValue.innerHTML = ""
})