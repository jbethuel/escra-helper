document.getElementById("button").addEventListener("click", () => {
  function getLink() {
    return document.getElementById("igp-content").getAttribute("src");
  }

  chrome.tabs.executeScript(
    {
      code: "(" + getLink + ")();",
    },
    (results) => {
      const url = results[0];
      if (!url.length) return;
      chrome.tabs.create({ url });
    }
  );
});
