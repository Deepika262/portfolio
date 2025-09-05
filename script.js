document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop page refresh

  // Show success message
  document.getElementById("successMessage").classList.remove("hidden");

  // Reset form
  document.getElementById("contactForm").reset();
});
