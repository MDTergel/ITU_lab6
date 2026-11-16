const filterButtons = document.querySelectorAll(".filter-chip");
const toolCards = document.querySelectorAll(".tool-card");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    toolCards.forEach((card) => {
      const categories = card.dataset.categories.split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
  mainNav.classList.toggle("is-open", !isExpanded);
});
