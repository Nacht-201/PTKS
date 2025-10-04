document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart-button");

  function showToast(message) {
    const toast = document.getElementById("cart-toast");
    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
      toast.style.display = "none";
    }, 4000);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");
      const name = product.getAttribute("data-name");
      const price = product.getAttribute("data-price");
      const image = product.getAttribute("data-image");  
      const sizeSelect = product.querySelector("select");
      const size = sizeSelect ? sizeSelect.value : "N/A";

      if (size === "Please select size") {
        showToast("Please select a size before adding to cart.");
        return;
      }

      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({ name, price, size, image });

      localStorage.setItem("cart", JSON.stringify(cart));

      showToast(`${name} (Size: ${size}) added to cart!`);
    });
  });
});
