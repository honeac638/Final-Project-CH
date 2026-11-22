console.log("script.js connected!");

//Filter events on event.html by category (All, Academic, Social)
const filterButtons = document.querySelectorAll("[data-filter]");
const eventItems = document.querySelectorAll(".event-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    // Highlight the active filter button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Show or hide event items based on selected category
    eventItems.forEach((item) => {
      const itemCategory = item.dataset.category;
      const matchesCategory =
        selectedCategory === "All" || itemCategory === selectedCategory;
      item.classList.toggle("d-none", !matchesCategory);
    });
  });
});
//api call to get dining spots in Lynchburg, VA
const DINING_API_URL = "https://nominatim.openstreetmap.org/search";

async function fetchDiningSpots(query = "food") {
  const container = document.getElementById("dining-api-list");

  try {
    const url = `${DINING_API_URL}?format=json&limit=3&q=${encodeURIComponent(query + " Lynchburg VA")}`;
    const res = await fetch(url);
    const data = await res.json();

    if (container) {
      container.innerHTML = "";
      data.forEach((place) => {
        const item = document.createElement("p");
        item.className = "small mb-1";
        item.textContent = place.display_name;
        container.appendChild(item);
      });
    }
  } catch (err) {
    console.log("API placeholder fallback:", err);
    if (container) {
      container.innerHTML = `<p class="text-secondary small mb-0">Placeholder: Burton Dining Hall, The Westover Room (Lynchburg, VA)</p>`;
    }
  }
}

fetchDiningSpots();
