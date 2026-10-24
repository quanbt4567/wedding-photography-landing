/**
 * Chuyện Hai Đứa — giao diện tương tác
 */

function setupPackageSelection() {
  const packageField = document.getElementById("package");
  const packageButtons = document.querySelectorAll("[data-package]");

  if (!packageField || packageButtons.length === 0) return;

  packageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      packageField.value = button.dataset.package || "";
    });
  });
}

function setupMobileNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  if (!menuToggle || mobileLinks.length === 0) return;

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupPackageSelection();
  setupMobileNavigation();
});
