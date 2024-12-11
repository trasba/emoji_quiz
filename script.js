const emojis = [
  "🍕🐀", // Ratatouille
  "🦁🐗🐒", // The Lion King
  "🧊🚢", // Titanic
  "🐠🐟🦈", // Finding Nemo
  "🤖🤠🚀", // Toy Story
  "🌎🐒", // Planet der Affen (Planet of the Apes)
  "🥊💪", // Rocky
  "🕺👿", // Tanz der Teufel (The Evil Dead)
  "👮‍♂️🚓📚", // Police Academy
  "🐍✈️", // Snakes on a Plane
  "🍽️🐷", // Das große Fressen (La Grande Bouffe)
  "👿👠", // Der Teufel trägt Prada (The Devil Wears Prada)
  "🚌💨", // Speed
  "✉️🚪 x 2", // Wenn der Postmann zweimal klingelt (The Postman Always Rings Twice)
  "🥧🇺🇸", // American Pie
  "🎈🤡🎈", // ES (IT)
  "🦸‍♀️💫", // Wonder Woman
  "🐱‍👤👩", // Catwoman
  "👻🏠", // Paranormal Activity
  "🤵🔫🍸", // James Bond
  "🚗⚡️🕰️", // Zurück in die Zukunft (Back to the Future)
  "🏃‍♂️🪶🍫", // Forrest Gump
  "🐺📈💰", // The Wolf of Wall Street
  "🚀👩‍🚀🌎", // Gravity
  "🔪🚿", // Psycho
  "🪓🏨 twins", // Shining
  "좀비🧠" // Braindead
];

const movies = [
  "Ratatouille",
  "The Lion King",
  "Titanic",
  "Finding Nemo",
  "Toy Story",
  "Planet der Affen", 
  "Rocky",
  "Tanz der Teufel", 
  "Police Academy",
  "Snakes on a Plane",
  "Das große Fressen", 
  "Der Teufel trägt Prada", 
  "Speed",
  "Wenn der Postmann zweimal klingelt", 
  "American Pie",
  "ES", 
  "Wonder Woman",
  "Catwoman",
  "Paranormal Activity",
  "James Bond",
  "Zurück in die Zukunft", 
  "Forrest Gump",
  "The Wolf of Wall Street",
  "Gravity",
  "Psycho",
  "Shining",
  "Braindead" 
];

let currentEmojiIndex = 0;

function revealMovie() {
  const emojiDisplay = document.getElementById("emojiDisplay");
  const movieTitle = document.getElementById("movieTitle");

  // Show movie title
  movieTitle.textContent = movies[currentEmojiIndex];
  movieTitle.style.visibility = "visible";

  // Hide emojis after 1 second and show the next set
  setTimeout(() => {
    currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length; 
    emojiDisplay.textContent = emojis[currentEmojiIndex];
    movieTitle.style.visibility = "hidden"; 
  }, 1000);
}

// Initial display
document.getElementById("emojiDisplay").textContent = emojis[currentEmojiIndex];
