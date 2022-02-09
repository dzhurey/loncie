let table = document.getElementById("yourLoncies");
let btnAdd = document.getElementById("createLoncie");
let formAdd = document.getElementById("addForm");

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
