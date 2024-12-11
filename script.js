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
