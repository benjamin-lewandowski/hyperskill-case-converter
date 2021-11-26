const textToConvert = document.getElementById("converter");

document.getElementById("upper-case").addEventListener("click", function () {
  textToConvert.value = textToConvert.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function () {
  textToConvert.value = textToConvert.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", () => {
  textToConvert.value = textToConvert.value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
});

document.getElementById("sentence-case").addEventListener("click", () => {
  textToConvert.value = textToConvert.value.toLowerCase();
  textToConvert.value = textToConvert.value.replace(
    /(^\w{1}|\.\s*\w{1})/gi,
    function (toReplace) {
      return toReplace.toUpperCase();
    }
  );
});

document.getElementById("save-text-file").addEventListener("click", function () {
  download('text.txt',textToConvert.value);
});

function download(filename, text) {
  let downloadbtn = document.createElement('a');
  downloadbtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  downloadbtn.setAttribute('download', filename);
  downloadbtn.style.display = 'none';
  document.body.appendChild(downloadbtn);
  downloadbtn.click();
  document.body.removeChild(downloadbtn);
}
