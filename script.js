const videos = [
  {
    title: "Build a YouTube Clone Homepage",
    channel: "Zaio Lessons",
    views: "48K views",
    age: "2 days ago",
    time: "14:22",
    category: "Coding",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Chill Beats for Studying",
    channel: "LoFi Room",
    views: "1.2M views",
    age: "1 month ago",
    time: "2:01:44",
    category: "Music",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "I Tried a New Gaming Setup",
    channel: "Pixel Plays",
    views: "302K views",
    age: "5 days ago",
    time: "11:08",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Easy Pasta Recipe for Beginners",
    channel: "Kitchen Quick",
    views: "89K views",
    age: "3 weeks ago",
    time: "8:31",
    category: "Food",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Cape Town Weekend Travel Guide",
    channel: "Map Moments",
    views: "64K views",
    age: "6 days ago",
    time: "17:45",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1585149789983-057f81cf6a5e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "JavaScript Search Bar Tutorial",
    channel: "Code With Kago",
    views: "23K views",
    age: "1 day ago",
    time: "9:15",
    category: "Coding",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
  }
];

const grid = document.querySelector("#videoGrid");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const menuBtn = document.querySelector("#menuBtn");
const sidebar = document.querySelector("#sidebar");
const themeBtn = document.querySelector("#themeBtn");
const playlistBtn = document.querySelector("#playlistBtn");
const chips = document.querySelectorAll(".chip");

let activeCategory = "All";
let searchTerm = "";

function renderVideos() {
  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === "All" || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filteredVideos.map(video => `
    <article class="video-card">
      <div class="thumbnail">
        <img src="${video.image}" alt="${video.title}">
        <div class="preview">Preview playing...</div>
        <span class="time">${video.time}</span>
      </div>
      <div class="video-info">
        <div class="avatar">${video.channel.charAt(0)}</div>
        <div>
          <h3>${video.title}</h3>
          <p>${video.channel}</p>
          <p>${video.views} - ${video.age}</p>
        </div>
      </div>
    </article>
  `).join("");

  if (filteredVideos.length === 0) {
    grid.innerHTML = "<p>No videos found. Try another search.</p>";
  }
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  searchTerm = searchInput.value.trim().toLowerCase();
  renderVideos();
});

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(item => item.classList.remove("active"));
    chip.classList.add("active");
    activeCategory = chip.dataset.category;
    renderVideos();
  });
});

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.setAttribute("aria-label", document.body.classList.contains("dark") ? "Switch to light mode" : "Switch to dark mode");
});

playlistBtn.addEventListener("click", () => {
  playlistBtn.textContent = "Saved";
});

renderVideos();

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  renderVideos();
});



