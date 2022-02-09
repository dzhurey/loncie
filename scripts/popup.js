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
  btnLaunch.classList.add("btn-launch");
  row.appendChild(btnLaunch);

  row.addEventListener("click", () => {
    item.list.forEach(url => {
      chrome.tabs.create({ url: url, active: false });
    });
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