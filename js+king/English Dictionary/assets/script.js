const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";

    //   console.log(word);
    infoTextEl.innerText = `
      Searching the meaning of "${word}"
    `;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainerEl.style.display = "block";
      infoTextEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "Not available";
      audioEl.style.display = "none";
    } else {
      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
    //   console.log(result);

    infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";
    titleEl.innerText = result[0].word;
    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `
    an error occured, try again!!!
  `;
  }
}

inputEl.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});

// 'await' expressions are only allowed within async functions and at the top levels of modules.ts(1308)

// 3:15:00
