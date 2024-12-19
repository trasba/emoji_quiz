const emojis = [
  "🎬",
  "🍕🐀", // Ratatouille
  "🦁🐗🐒", // The Lion King
  "🧊🚢", // Titanic
  "🐠🐟🦈", // Finding Nemo
  "🤖🤠🚀", // Toy Story
  "🌎🐒🦧🦍", // Planet of the Apes
  "🥊💪", // Rocky
  "💃🏼🕺🏼👺👹", // The Evil Dead
  "👮‍♂️🚓📚", // Police Academy
  "🐍✈️", // Snakes on a Plane
  "🍽️🍔🍕🥞🍰", // La Grande Bouffe
  "👿👠👗", // The Devil Wears Prada
  "🚌💨", // Speed
  "✉️🚪🛎️🛎️", // The Postman Always Rings Twice
  "🥧🇺🇸", // American Pie
  "🎈🤡🎈", // IT
  "🦸‍♀️💫", // Wonder Woman
  "🐱‍👤👩", // Catwoman
  "👩🏼👱🏼‍♂️📹👻", // Paranormal Activity
  "🤵🔫🍸", // James Bond
  "🕰️◀️⚡️🚗", // Back to the Future
  "🏃‍♂️🍤🍫", // Forrest Gump
  "🐺📈💰👯", // The Wolf of Wall Street
  "🚀👩‍🚀🌎", // Gravity
  "🔪🙎🏻‍♀️🚿", // Psycho
  "🏨🤪🪓🩸🩸", // The Shining
  "🧠💀", // Braindead
  "🏁",
];

const movies = [
  "START",
  "Ratatouille",
  "The Lion King",
  "Titanic",
  "Finding Nemo",
  "Toy Story",
  "Planet of the Apes",
  "Rocky",
  "The Evil Dead",
  "Police Academy",
  "Snakes on a Plane",
  "La Grande Bouffe",
  "The Devil Wears Prada",
  "Speed",
  "The Postman Always Rings Twice",
  "American Pie",
  "IT",
  "Wonder Woman",
  "Catwoman",
  "Paranormal Activity",
  "James Bond",
  "Back to the Future",
  "Forrest Gump",
  "The Wolf of Wall Street",
  "Gravity",
  "Psycho",
  "The Shining",
  "Braindead",
  "THE END",
];

let currentEmojiIndex = 0;

function revealMovie(direction) {
  const emojiDisplay = document.getElementById("emojiDisplay");
  const movieTitle = document.getElementById("movieTitle");

  if (direction === "forward") {
    if (
      movieTitle.style.visibility == "hidden" &&
      movies[currentEmojiIndex] !== ""
    ) {
      movieTitle.textContent = movies[currentEmojiIndex];
      movieTitle.style.visibility = "visible";
    } else {
      movieTitle.style.visibility = "hidden";
      currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
      emojiDisplay.textContent = emojis[currentEmojiIndex];
    }
  } else if (direction === "backward") {
    currentEmojiIndex = (currentEmojiIndex - 1 + emojis.length) % emojis.length;
    emojiDisplay.textContent = emojis[currentEmojiIndex];
    movieTitle.style.visibility = "hidden";
  }
}

// Event listener for clicks on the card
const card = document.querySelector(".card");
card.addEventListener("click", (event) => {
  if (event.shiftKey) {
    revealMovie("backward");
  } else {
    revealMovie("forward");
  }
});

// Initial display
const emojiDisplay = document.getElementById("emojiDisplay");
const movieTitle = document.getElementById("movieTitle");
emojiDisplay.textContent = emojis[currentEmojiIndex];
movieTitle.style.visibility = "hidden";

function toggleExplanation() {
  const explanation = document.getElementById("explanation");
  explanation.style.display =
    explanation.style.display === "none" ? "block" : "none";
}

// Add an event listener to close the explanation when clicking outside
document.addEventListener("click", (event) => {
  const explanation = document.getElementById("explanation");
  const infoIcon = document.querySelector(".info-icon");

  if (!explanation.contains(event.target) && !infoIcon.contains(event.target)) {
    explanation.style.display = "none";
  }
});
