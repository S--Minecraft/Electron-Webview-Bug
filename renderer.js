// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const LINKS = [
  "https://electron.atom.io/",
  "https://github.com/electron/electron"
];
var $change = document.getElementById("change");
var $hide = document.getElementById("hide");
var $webview = document.getElementById("webview");
var firstExec = true;

$change.addEventListener("click", function() {
  $webview.classList.remove("hidden");
  if(firstExec) {
    $webview.addEventListener("dom-ready", function ready() {
      $webview.removeEventListener("dom-ready", ready);
      firstExec = false;
      $webview.loadURL(LINKS[0]);
    });
  } else {
    $webview.loadURL(LINKS[1]);
  }
});

$hide.addEventListener("click", function() {
  $webview.classList.add("hidden");
});
