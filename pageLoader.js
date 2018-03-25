"use strict";
var content = {
  404: ["404", "Page not Found"],
  index: ["Home", "Test value"],
  projects: ["Projects", "<a class='project' href='/#project/os-in-browser'>os-in-browser</a>"],
  project: {
    "os-in-browser": ["OS in Browser", "<script>location.href = 'https://os-in-browser.now.sh';</script>"]
  }
};

function page(hash) {
  if (hash == "") {
    return (content['index']);
  }
  hash = hash.slice(1);
  var hashes = hash.split("/");
  var newContent = content;
  for (var i = 0; i < hashes.length; i++) {
    newContent = newContent[hashes[i]]
  }
  return (newContent);
};

function setPage(titleElement, bodyElement) {
  var pageContent = page(location.hash);
  if (pageContent == undefined || pageContent[0] == undefined) {
    pageContent = page("#404");
  }
  titleElement.innerHTML = pageContent[0];
  bodyElement.innerHTML = pageContent[1];
  document.title = "tombl - " + pageContent[0];
};

function setPageFilled() {
  setPage(document.getElementById("page-title"), document.getElementById("page-content"));
};

window.onhashchange = function() {
  setPageFilled()
};

setPageFilled();
