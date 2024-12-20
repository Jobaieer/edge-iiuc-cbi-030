let cart = [];
let totalTaka = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  totalTaka += price;
  updateCart();
}

function applyPromoCode(code) {
  if (code === "SELL20") {
    totalTaka *= 0.8; // 20% discount
  }
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";
  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${item.product} - $${item.price}`;
    cartElement.appendChild(itemElement);
  });
  document.getElementById("total").textContent = `Total: $${totalPrice.toFixed(
    2
  )}`;
}

function purchase() {
  alert("Congratulations on your purchase!");
}
