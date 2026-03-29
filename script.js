const memeImg = document.getElementById("meme-img");
const btn = document.getElementById("btn-generate");

// Function to fetch meme
async function fetchMeme() {
  try {
    // Button loading state
    btn.disabled = true;
    btn.textContent = "Loading...";

    // Fetch memes from API
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();

    // Get random meme
    const memes = data.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];

    // Set meme image
    memeImg.src = randomMeme.url;
    memeImg.alt = randomMeme.name;

  } catch (error) {
    console.error("Error fetching meme:", error);
    alert("Failed to load meme 😢");
  } finally {
    // Reset button
    btn.disabled = false;
    btn.textContent = "Generate Meme";
  }
}

// Load meme on page load
window.onload = fetchMeme;

// Button click event
btn.addEventListener("click", fetchMeme);
