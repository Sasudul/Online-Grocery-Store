const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const Bannersimages = [
  "promotions/p1.webp",
  "promotions/p2.webp",
  "promotions/p3.jpg",
  "promotions/p5.jpeg",
  "promotions/p6.jpg",
];
const ArrowRight = document.querySelector(".Arrow__right");

let currentIndex = 0;

ArrowRight.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % Bannersimages.length;
  document.getElementById("Banners").src = Bannersimages[currentIndex];
});

const ArrowLeft = document.querySelector(".Arrow__left");

ArrowLeft.addEventListener("click", function () {
  currentIndex = (currentIndex + 4) % Bannersimages.length;
  document.getElementById("Banners").src = Bannersimages[currentIndex];
});

const Slider = document.getElementById("Banners");

function scrollImages() {
  Slider.style.opacity = 1;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % Bannersimages.length;
    Slider.src = Bannersimages[currentIndex];

    Slider.style.opacity = 1;
  }, 1000);
}

setInterval(scrollImages, 3000);

const Slider2 = document.getElementById("Banners2");

function scrollImages() {
  Slider2.style.opacity = 1;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % Bannersimages.length;
    Slider2.src = Bannersimages[currentIndex];

    Slider2.style.opacity = 1;
  }, 1000);
}

setInterval(scrollImages, 3000);

function cart() {
  document.getElementById("navbar__btn_cart").onclick = function () {
    document.getElementById("cart").style.display = "block";
  };
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

window.onclick = function (event) {
  const cartModal = document.getElementById("cart");
  if (
    event.target !== cartModal &&
    !cartModal.contains(event.target) &&
    event.target.id !== "navbar__btn_cart"
  ) {
    cartModal.style.display = "none";
  }
};

function updateTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;
  cartItems.forEach((item) => {
    const price = parseFloat(
      item
        .querySelector(".cart-item-details p:nth-child(2)")
        .textContent.replace("Price: Rs.", "")
    );
    const quantity = parseInt(
      item.querySelector(".quantity-controls span").textContent
    );
    total += price * quantity;
  });
  document.getElementById(
    "totalPrice"
  ).textContent = `Total: Rs.${total.toFixed(2)}`;
}

function updateQuantity(button, increment) {
  const quantityElement = button.parentElement.querySelector("span");
  let quantity = parseInt(quantityElement.textContent);
  quantity += increment;

  if (quantity < 1) {
    quantity = 1;
  }
  quantityElement.textContent = quantity;
}

document.querySelectorAll(".quantity-controls button").forEach((button) => {
  button.addEventListener("click", () => {
    const increment = button.textContent === "+" ? 1 : -1;
    updateQuantity(button, increment);
  });
});

updateTotal();
