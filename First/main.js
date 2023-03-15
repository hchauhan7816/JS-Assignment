const trainForm = document.getElementById("train-form");
const trainTable = document.getElementById("train-table");
const trainTableBody = trainTable.querySelector("tbody");
const formSubmitBtn = trainForm.querySelector(".submitBtn");
const changeFontBtn = document.querySelector(".changeFontBtn");

formSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const trainType = document.getElementById("train-type").value;
  const trainName = document.getElementById("train-name").value;
  const trainFrom = document.getElementById("train-from").value;
  const trainTo = document.getElementById("train-to").value;

  if (!validValues(trainType, trainName, trainForm, trainTo)) {
    alert("Invalid values");
    return;
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML += `
    <tr> 
        <td> ${trainType} </td>
        <td>${trainName}</td>
        <td>${trainFrom}</td>
        <td> ${trainTo} </td>
        <td><button class = "delete-row-btn">Delete</button></td>
    </tr>`;

  trainTableBody.appendChild(newRow);
  putFunctionOnButton();

    document.getElementById("train-type").value = "";
    document.getElementById("train-name").value = "";
    document.getElementById("train-from").value = "";
    document.getElementById("train-to").value = "";
});

function putFunctionOnButton() {
  const deleteButton = document.querySelectorAll(".delete-row-btn");
  Array.from(deleteButton).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.closest("tr").remove();
    });
  });
}

function validValues(trainType, trainName, trainForm, trainTo) {
  if (
    trainType === "" ||
    trainName === "" ||
    trainForm === "" ||
    trainTo === ""
  ) {
    return false;
  }
  return true;
}

changeFontBtn.addEventListener("click", (e) => {
  e.preventDefault();

  document
    .querySelector("body")
    .classList.toggle("secondFont");
});
