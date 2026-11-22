console.log("script.js connected!");

// 1. Filter events on event.html by category (All, Academic, Social)
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
