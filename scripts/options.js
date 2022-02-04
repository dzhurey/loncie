let table = document.getElementById("yourLoncies");
let btnAdd = document.getElementById("createLoncie");
let formAdd = document.getElementById("addForm");

function buildTableColumn(text) {
  let col = document.createElement("div");
  col.classList.add("record-item");
  col.innerText = text;
  return col;
}

function buildTableRow(item) {
  const row = document.createElement("div");
  row.classList.add("record");

  Object.keys(item).forEach(key => {
    const col = buildTableColumn(item[key]);
    row.appendChild(col);
  })

  return row;
}

function displayLoncies() {
  chrome.storage.sync.get("items", (data) => {
    const { items } = data;

    for (let item of items) {
      const rec = buildTableRow(item)
      table.appendChild(rec)
    }
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
