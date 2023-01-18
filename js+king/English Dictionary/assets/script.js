const inputEl = document.getElementById("input");

async function fetchAPI(word) {
  try {
    //   console.log(word);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    //   console.log(result);
  } catch (error) {
    console.log(error);
  }
}

inputEl.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});

// 'await' expressions are only allowed within async functions and at the top levels of modules.ts(1308)
