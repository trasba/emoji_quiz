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
  "🏃‍♂️🪶🍫", // Forrest Gump
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
let showTitle = false;

function revealMovie(direction) {
  const emojiDisplay = document.getElementById("emojiDisplay");
  const movieTitle = document.getElementById("movieTitle");

  if (direction === "forward") {
    if (showTitle && movies[currentEmojiIndex] !== "") {
      movieTitle.textContent = movies[currentEmojiIndex];
      movieTitle.style.visibility = "visible";
    } else {
      movieTitle.style.visibility = "hidden";
      currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
      emojiDisplay.textContent = emojis[currentEmojiIndex];
    }

    showTitle = !showTitle;
  } else if (direction === "backward") {
    currentEmojiIndex = (currentEmojiIndex - 1 + emojis.length) % emojis.length;
    emojiDisplay.textContent = emojis[currentEmojiIndex];
    movieTitle.style.visibility = "hidden";

    showTitle = !showTitle;
  }
}

// Initial display
document.getElementById("emojiDisplay").textContent = emojis[currentEmojiIndex];
