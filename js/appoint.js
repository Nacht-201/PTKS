function showToast(message) {
  const toast = document.getElementById("cart-toast");
  if (!toast) return;

  toast.textContent = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  showToast("Thank You For Booking an Appointment With Us!");

  setTimeout(() => {
    window.location.href = "ty2.html"; 
  }, 2500);
});
