chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ items: [{
    name: "Lagi kerja",
    list: [
      "https://gitlab.com/",
      "https://prakerja.atlassian.net/jira/software/c/projects/WP/boards/19",
    ]
  }] });
});