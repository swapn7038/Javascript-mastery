const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Getting quote...";
    authorEl.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;

    btnEl.innerText = "Get Quote";
    btnEl.disabled = false;

    quoteEl.innerText = quoteContent;
    authorEl.innerText = quoteAuthor;
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error occured!!! Try again later";
    authorEl.innerText = "Error occured!";
    btnEl.innerText = "Sorry please try later";
  }

  console.log("clicked");
}

getQuote();

btnEl.addEventListener("click", getQuote);
