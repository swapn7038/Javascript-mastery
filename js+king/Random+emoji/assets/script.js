const btnEl = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b75ddc177fd1"
  );

  data = await response.json();

  //   console.log(data);
}

getEmoji();

btnEl = addEventListener("click", () => {
  console.log("clicked");
});

// https://rapidapi.com/collection/emoji
