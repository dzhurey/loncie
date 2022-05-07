let table = document.getElementById("yourLoncies");
let btnAdd = document.getElementById("createLoncie");
let formAdd = document.getElementById("addForm");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var hideForm = document.getElementById("hideForm");

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal){
//     modal.style.display = "none"
//   }
// }

// hideForm.onclick = function() {
//   formAdd.classList.add("hide");
// }

function buildTableColumn(text) {
  let col = document.createElement("div");
  col.classList.add("table-col");
  col.innerText = text;
  return col;
}

function buildTableRow(item) {
  const row = document.createElement("div");
  row.classList.add("table");
  const name = buildTableColumn(item["name"]);
  row.appendChild(name);

  return row;
}

function displayLoncies() {
  chrome.storage.sync.get("items", (data) => {
    const { items } = data;
    items.forEach(item => {
      const rec = buildTableRow(item)
      if(table != null)
      table.appendChild(rec)
    });
  });
}

displayLoncies();

function displayForm(isDisplay) {
  if (isDisplay) {
    formAdd.classList.remove("hide");
  } else {
    formAdd.classList.add("hide");
  }
}

btnAdd.addEventListener("click", async () => {
  displayForm(true);
});
