const emojis = [
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
];

const movies = [
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
];

let currentEmojiIndex = 0;
let isStarted = false;

function revealMovie(direction) {
  const emojiDisplay = document.getElementById("emojiDisplay");
  const movieTitle = document.getElementById("movieTitle");

  if (!isStarted) {
    isStarted = true;
    emojiDisplay.textContent = emojis[currentEmojiIndex];
    return;
  }

  if (direction === "forward") {
    if (movieTitle.style.visibility === "hidden") {
      movieTitle.textContent = movies[currentEmojiIndex];
      movieTitle.style.visibility = "visible";
    } else {
      currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
      if (currentEmojiIndex === 0) {
        emojiDisplay.textContent = "The End";
        movieTitle.style.visibility = "hidden";
        isStarted = false;
        return;
      }
      emojiDisplay.textContent = emojis[currentEmojiIndex];
      movieTitle.style.visibility = "hidden";
    }
  } else if (direction === "backward") {
    if (currentEmojiIndex === 0) {
      emojiDisplay.textContent = "Start";
      movieTitle.style.visibility = "hidden";
      isStarted = false;
      return;
    }
    currentEmojiIndex = (currentEmojiIndex - 1 + emojis.length) % emojis.length;
    emojiDisplay.textContent = emojis[currentEmojiIndex];
    movieTitle.style.visibility = "hidden";
  }
}

// Initial display
emojiDisplay.textContent = "Start";
