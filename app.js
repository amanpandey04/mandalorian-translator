const inputText = document.querySelector("#txt-input");
const outputText = document.querySelector("#txt-output");
const btnTranslate = document.querySelector("#btn-translate");

const serverURL = "https://api.funtranslations.com/translate/mandalorian.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function clickEventCallback() {
  let inputValue = inputText.value;

  fetch(getTranslationURL(inputValue))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch((error) => alert("Ooops! An error has occured. Please try again later.", error));
}

btnTranslate.addEventListener("click", clickEventCallback);
