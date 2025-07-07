
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".product");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    products.forEach((product) => {
      const name = product.querySelector("h3").innerText.toLowerCase();
      product.style.display = name.includes(query) ? "block" : "none";
    });
  });
});
