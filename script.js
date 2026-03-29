const memeImg = document.getElementById("meme-img");
const btn = document.getElementById("btn-generate");

// Function to fetch a random meme
async function fetchMeme() {
  try {
    btn.disabled = true;
    btn.textContent = "Loading...";

    // Using a popular meme API
    const res = await fetch("https://meme-api.com/gimme");
    const data = await res.json();

    // Set the meme image
    memeImg.src = data.url;
    memeImg.alt = data.title || "Random Meme";

    // Optional: log metadata (comment out in production)
    // console.log("Meme title:", data.title);
    // console.log("Subreddit:", data.subreddit);

  } catch (err) {
    console.error("Failed to fetch meme:", err);
    alert("Failed to load meme. Please try again.");
  } finally {
    btn.disabled = false;
    btn.textContent = "Generate Meme";
  }
}

// Fetch meme on page load
fetchMeme();

// Hook up button
btn.addEventListener("click", fetchMeme);