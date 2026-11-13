// RestaurantZone - menu data link se aata hai (DummyJSON recipes)
// Menu data is link se aata hai. Apni menu.json ya kisi online link (jaise GitHub Raw) ka address yahan likho.
const MENU_URL = "menu.json";

const MENU_SOURCES = [
  {
    name: "menu.json",
    url: MENU_URL,
    parse: data => {
      if (!Array.isArray(data)) throw new Error("Data array nahi hai");
      return data.map(x => ({
        id: Number(x.id),
        name: String(x.name),
        category: String(x.category || "Other"),
        price: Number(x.price) || 0,
        description: String(x.description || ""),
        image: String(x.image || "")
      }));
    }
  }
];

const productsContainer = document.getElementById("products");
const categoriesContainer = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const productCount = document.getElementById("productCount");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

let menuItems = [];
let cart = [];
let selectedCategory = "all";

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

function formatPrice(value) {
  return value.toLocaleString("en-PK");
}

function displayProducts(items) {
  productCount.textContent = `${items.length} delicious items`;

  if (items.length === 0) {
    productsContainer.innerHTML = '<p class="message">No food items found. Try another search or filter.</p>';
    return;
  }

  productsContainer.innerHTML = items.map(item => `
    <article class="product-card">
      <div class="product-image"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.style.display='none'"></div>
      <div class="product-info">
        <p class="product-category">${escapeHtml(item.category)}</p>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="product-description">${escapeHtml(item.description)}</p>
        <div class="product-bottom">
          <span class="product-price">Rs. ${formatPrice(item.price)}</span>
          <button class="add-cart-btn" data-add="${item.id}">+ Add to Cart</button>
        </div>
      </div>
    </article>`).join("");
}

function displayCategories() {
  const categories = [...new Set(menuItems.map(item => item.category))];
  categoriesContainer.innerHTML =
    '<button class="category-btn active" data-category="all">All Items</button>' +
    categories.map(category =>
      `<button class="category-btn" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`
    ).join("");
}

function filterProducts() {
  const searchValue = searchInput.value.trim().toLowerCase();
  const minValue = minPrice.value === "" ? 0 : Number(minPrice.value);
  const maxValue = maxPrice.value === "" ? Infinity : Number(maxPrice.value);

  errorMessage.textContent = minValue > maxValue
    ? "Min price, Max price se zyada nahi ho sakti."
    : "";

  const filtered = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue) ||
      item.description.toLowerCase().includes(searchValue);
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesPrice = item.price >= minValue && item.price <= maxValue;
    return matchesSearch && matchesCategory && matchesPrice;
  });
  displayProducts(filtered);
}

function addToCart(id) {
  const item = menuItems.find(food => food.id === id);
  if (!item) return;
  const existing = cart.find(food => food.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...item, quantity: 1 });
  updateCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(food => food.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(food => food.id !== id);
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(food => food.id !== id);
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = formatPrice(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
  displayCart();
}

function displayCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Add something tasty!</p>';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}">
      <div>
        <h4>${escapeHtml(item.name)}</h4>
        <p>Rs. ${formatPrice(item.price)} each</p>
        <div class="quantity-controls">
          <button data-minus="${item.id}" aria-label="Decrease quantity">−</button>
          <span>${item.quantity}</span>
          <button data-plus="${item.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="remove-btn" data-remove="${item.id}">Remove</button>
    </div>`).join("");
}

function openCart() {
  cartPanel.classList.add("show");
  cartOverlay.classList.add("show");
  cartPanel.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartPanel.classList.remove("show");
  cartOverlay.classList.remove("show");
  cartPanel.setAttribute("aria-hidden", "true");
}

// Link se menu data load karna
async function fetchWithTimeout(url, ms = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function loadMenu() {
  loading.style.display = "block";
  errorMessage.textContent = "";
  const problems = [];

  for (const source of MENU_SOURCES) {
    try {
      const response = await fetchWithTimeout(source.url);
      if (!response.ok) throw new Error("HTTP " + response.status);
      const items = source.parse(await response.json());
      if (items.length === 0) throw new Error("Koi item nahi mila");

      menuItems = items;
      displayCategories();
      filterProducts();
      loading.style.display = "none";
      return;
    } catch (error) {
      console.error(source.name + " fail:", error);
      problems.push(`${source.name}: ${error.name === "AbortError" ? "bohat der lag gayi (timeout)" : error.message}`);
    }
  }

  loading.style.display = "none";
  productCount.textContent = "";
  errorMessage.textContent = "Menu load nahi ho saka. " + problems.join(" | ") +
    (location.protocol === "file:" ? " | Page ko double-click se mat kholo, VS Code ka Live Server use karo." : "");
}

// Events
categoriesContainer.addEventListener("click", event => {
  const button = event.target.closest(".category-btn");
  if (!button) return;
  selectedCategory = button.dataset.category;
  document.querySelectorAll(".category-btn").forEach(btn => btn.classList.toggle("active", btn === button));
  filterProducts();
});

searchInput.addEventListener("input", filterProducts);
minPrice.addEventListener("input", filterProducts);
maxPrice.addEventListener("input", filterProducts);

document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  minPrice.value = "";
  maxPrice.value = "";
  selectedCategory = "all";
  document.querySelectorAll(".category-btn").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.category === "all")
  );
  filterProducts();
});

productsContainer.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

cartItems.addEventListener("click", event => {
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");
  if (plus) changeQuantity(Number(plus.dataset.plus), 1);
  if (minus) changeQuantity(Number(minus.dataset.minus), -1);
  if (remove) removeFromCart(Number(remove.dataset.remove));
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.addEventListener("keydown", event => { if (event.key === "Escape") closeCart(); });

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add food items first.");
    return;
  }
  const orderSummary = cart.map(item => `${item.name} x ${item.quantity}`).join("\n");
  alert(`Thank you for your order!\n\n${orderSummary}\n\nTotal: Rs. ${cartTotal.textContent}\n\nThis is a demo. Connect WhatsApp or a payment service to receive real orders.`);
});

// Start
updateCart();
loadMenu();
