let table = document.getElementById("yourLoncies");

function buildTableColumn(text) {
  let col = document.createElement("div");
  col.classList.add("record-item");
  col.innerText = text;
  return col;
}

function buildTableRow(item) {
  const row = document.createElement("div");
  row.classList.add("record");

  row.appendChild(buildTableColumn(item.name));

  const btnLaunch = document.createElement("button");
  btnLaunch.classList.add("btn");
  btnLaunch.innerText = "Launch";
  row.appendChild(btnLaunch);

  btnLaunch.addEventListener("click", () => {
    console.log("item")
    console.log(item)
    for (const url in item.list) {
      chrome.tabs.create({ url: url, active: false });
    }
  });

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