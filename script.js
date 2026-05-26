const WHATSAPP_NUMBER = "5511997480575";
const COUPON = "DESCONTO5";
const DISCOUNT_RATE = 0.05;
const FREE_SHIPPING_THRESHOLD = 199.9;

const products = [
  { id: 1, name: "Marca-páginas", price: 15.9, category: "Marca-páginas", image: "images/01-marca-pagina-01.jpg" },
  { id: 2, name: "Chaveiro Inicial", price: 24.99, category: "Chaveiros", image: "images/02-chaveiro-inicial-01.jpg" },
  { id: 3, name: "Mini Chaveiro Coração", price: 14.99, category: "Chaveiros", image: "images/03-mini-chaveiro-coracao-01.jpg" },
  { id: 4, name: "Mini Chaveiro Festa", price: 14.99, category: "Chaveiros", image: "images/04-mini-chaveiro-festa-01.jpg" },
  { id: 5, name: "Porta-joia", price: 25.9, category: "Decoração", image: "images/05-porta-joia-01.jpg" },
  { id: 6, name: "Kit 4 Presilhas", price: 19.9, category: "Kits", image: "images/06-kit-quatro-presilhas-01.jpg" },
  { id: 7, name: "Kit Escova", price: 29.99, category: "Kits", image: "images/07-kit-escova-01.jpg" },
  { id: 8, name: "Ímã de Geladeira", price: 19.99, category: "Decoração", image: "images/08-ima-geladeira-01.jpg" },
  { id: 9, name: "Quadro Decorativo com Suporte", price: 65.9, category: "Decoração", image: "images/09-quadro-decorativo-com-suporte.jpg" },
  { id: 10, name: "Porta-retrato", price: 25.9, category: "Decoração", image: "images/10-porta-retrato-01.jpg" },
  { id: 11, name: "Decoração de Quarto", price: 25.9, category: "Decoração", image: "images/11-decoracao-quarto-01.jpg" },
  { id: 12, name: "Marca-página Florido", price: 15.9, category: "Marca-páginas", image: "images/12-marca-pagina-florido-01.jpg" },
  { id: 13, name: "Mini Chaveiro Patinha", price: 14.99, category: "Chaveiros", image: "images/13-mini-chaveiro-patinha-01.jpg" },
  { id: 14, name: "Chaveiro Inicial (Modelo 2)", price: 24.99, category: "Chaveiros", image: "images/14-chaveiro-inicial-02.jpg" },
  { id: 15, name: "Porta-joia Toque de Ouro", price: 45.0, category: "Decoração", image: "images/15-porta-joia-toque-de-ouro.jpg" },
  { id: 16, name: "Marca-página Inicial", price: 15.9, category: "Marca-páginas", image: "images/16-marca-pagina-inicial.jpg" },
  { id: 17, name: "Marca-página Pérola", price: 15.9, category: "Marca-páginas", image: "images/17-marca-pagina-perola.jpg" },
  { id: 18, name: "Marca-página Blue Gold", price: 15.9, category: "Marca-páginas", image: "images/18-marca-pagina-blue-gold.jpg" },
  { id: 19, name: "Chaveiro Inicial (Modelo 3)", price: 24.99, category: "Chaveiros", image: "images/19-chaveiro-inicial-03.jpg" },
  { id: 20, name: "Marca-página Dreams", price: 15.9, category: "Marca-páginas", image: "images/20-marca-pagina-dreams.jpg" },
  { id: 21, name: "Mini Chaveiro Coração com Berloque", price: 14.99, category: "Chaveiros", image: "images/21-mini-chaveiro-coracao-com-berloque.jpg" },
  { id: 22, name: "Chaveiro Inicial (Modelo 4)", price: 24.99, category: "Chaveiros", image: "images/22-chaveiro-inicial-04.jpg" },
  { id: 23, name: "Mini Chaveiro Amor Eternizado", price: 25.9, category: "Chaveiros", image: "images/23-mini-chaveiro-amor-eternizado.jpg" },
  { id: 24, name: "Kit 2 Presilhas", price: 9.9, category: "Kits", image: "images/24-kit-duas-presilhas.jpg" },
  { id: 25, name: "Marca-página Encanto Rose", price: 15.9, category: "Marca-páginas", image: "images/25-marca-pagina-encanto-rose.jpg" },
  { id: 26, name: "Chaveiro Inicial (Modelo 5)", price: 24.99, category: "Chaveiros", image: "images/26-chaveiro-inicial-05.jpg" },
  { id: 27, name: "Mini Chaveiro Borboleta (20 un)", price: 89.9, category: "Kits", image: "images/27-mini-chaveiro-borboleta.jpg" },
  { id: 28, name: "Marca-página Gold", price: 15.9, category: "Marca-páginas", image: "images/28-marca-pagina-gold.jpg" },
  { id: 29, name: "Chaveiro Inicial com Pompom", price: 24.99, category: "Chaveiros", image: "images/29-chaveiro-inicial-com-pompom-06.jpg" },
  { id: 30, name: "Kit Marca-página + Chaveiro Lumièr", price: 34.9, category: "Kits", image: "images/30-kit-marca-pagina-e-chaveiro-lumier.jpg" },
  { id: 31, name: "Kit 4 Porta-copos", price: 59.9, category: "Kits", image: "images/31-kit-quatro-porta-copo.jpg" },
  { id: 32, name: "Bandeja", price: 75.9, category: "Decoração", image: "images/32-bandeja.jpg" },
  { id: 33, name: "Kit 4 Porta-copo + Bandeja", price: 125.0, category: "Kits", image: "images/33-kit-quatro-porta-copo-mais-uma-bandeja.jpg" },
  { id: 34, name: "Quadro Eternização (Flor)", price: 69.9, category: "Decoração", image: "images/34-quadro-eternizacao-flor.jpg" },
  { id: 35, name: "Quadro Eternização (Bebê)", price: 59.9, category: "Decoração", image: "images/35-quadro-eternizacao-bebe.jpg" },
  { id: 36, name: "Quadro Eternização (Bebê) com Suporte", price: 65.9, category: "Decoração", image: "images/36-quadro-eternizacao-bebe-com-suporte.jpg" },
  { id: 37, name: "Decoração de Porta Roxa", price: 25.9, category: "Decoração", image: "images/37-decoracao-de-porta-roxa.jpg" },
  { id: 38, name: "Decoração de Porta Rosa", price: 25.9, category: "Decoração", image: "images/38-decoracao-de-porta-rosa.jpg" },
  { id: 39, name: "Presilhas Pérola", price: 19.9, category: "Acessórios", image: "images/39-presilhas-perola.jpg" },
  { id: 40, name: "Quadro Decorativo", price: 59.9, category: "Decoração", image: "images/40-quadro-decorativo.jpg" },
  { id: 41, name: "Quadro Eternização (Flor) com Suporte", price: 75.9, category: "Decoração", image: "images/41-quadro-eternizacao-com-suporte.jpg" }
];

const formatMoney = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const state = {
  cart: [],
  couponApplied: false
};

const grid = document.querySelector("#products-grid");
const filter = document.querySelector("#category-filter");
const drawer = document.querySelector("#cart-drawer");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const subtotalEl = document.querySelector("#subtotal");
const discountEl = document.querySelector("#discount");
const shippingEl = document.querySelector("#shipping");
const totalEl = document.querySelector("#total");
const couponInput = document.querySelector("#coupon-input");
const couponMessage = document.querySelector("#coupon-message");
const checkout = document.querySelector("#checkout");
const notes = document.querySelector("#order-notes");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function productTemplate(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="category-tag">${product.category}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="price">${formatMoney(product.price)}</div>
        <p class="custom-note"><i class="fa-solid fa-circle-info"></i> Produto personalizado: informe o modelo e a cor desejada.</p>
        <button type="button" data-add="${product.id}">
          <i class="fa-solid fa-bag-shopping"></i> Adicionar
        </button>
      </div>
    </article>
  `;
}

function renderProducts(category = "Todos") {
  const filtered = category === "Todos" ? products : products.filter(product => product.category === category);
  grid.innerHTML = filtered.map(productTemplate).join("");
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const existing = state.cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }

  renderCart();
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  showToast(`${product.name} adicionado ao carrinho.`);
}

function changeQty(productId, delta) {
  const item = state.cart.find(product => product.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(product => product.id !== productId);
  }
  renderCart();
}

function totals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = state.couponApplied ? subtotal * DISCOUNT_RATE : 0;
  const total = Math.max(subtotal - discount, 0);
  return { subtotal, discount, total };
}

function renderCart() {
  if (state.cart.length === 0) {
    cartItems.innerHTML = `<div class="empty-cart">Seu carrinho está vazio. Escolha uma peça na vitrine para começar.</div>`;
  } else {
    cartItems.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${formatMoney(item.price)}</p>
        </div>
        <div class="qty" aria-label="Quantidade">
          <button type="button" data-qty="${item.id}" data-delta="-1">-</button>
          <strong>${item.qty}</strong>
          <button type="button" data-qty="${item.id}" data-delta="1">+</button>
        </div>
      </div>
    `).join("");
  }

  const { subtotal, discount, total } = totals();
  const itemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = itemCount;
  subtotalEl.textContent = formatMoney(subtotal);
  discountEl.textContent = discount > 0 ? `- ${formatMoney(discount)}` : formatMoney(0);
  shippingEl.textContent = subtotal >= FREE_SHIPPING_THRESHOLD ? "Grátis" : "A combinar";
  totalEl.textContent = formatMoney(total);
  checkout.classList.toggle("disabled", state.cart.length === 0);
  checkout.href = state.cart.length ? buildWhatsAppUrl() : "#";
}

function applyCoupon() {
  const value = couponInput.value.trim().toUpperCase();
  state.couponApplied = value === COUPON;
  couponMessage.textContent = state.couponApplied
    ? "Cupom DESCONTO5 aplicado: 5% de desconto no pedido."
    : "Cupom inválido. Use DESCONTO5 para ganhar 5% de desconto.";
  renderCart();
}

function buildWhatsAppUrl() {
  const { subtotal, discount, total } = totals();
  const items = state.cart.map(item => `- ${item.qty}x ${item.name} (${formatMoney(item.price)} cada)`).join("\n");
  const message = [
    "Olá, Opaline Ateliê! Quero finalizar meu pedido:",
    "",
    items,
    "",
    `Subtotal: ${formatMoney(subtotal)}`,
    state.couponApplied ? `Cupom: ${COUPON} (-${formatMoney(discount)})` : "Cupom: não aplicado",
    `Frete: ${subtotal >= FREE_SHIPPING_THRESHOLD ? "grátis" : "a combinar"}`,
    `Total: ${formatMoney(total)}`,
    "",
    notes.value.trim() ? `Personalização: ${notes.value.trim()}` : "Personalização: vou informar modelo e cor desejada."
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-qty]");
  if (button) changeQty(Number(button.dataset.qty), Number(button.dataset.delta));
});

filter.addEventListener("change", event => renderProducts(event.target.value));

document.querySelector("[data-open-cart]").addEventListener("click", () => {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
});

document.querySelector("[data-close-cart]").addEventListener("click", () => {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
});

drawer.addEventListener("click", event => {
  if (event.target === drawer) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }
});

document.querySelector("#apply-coupon").addEventListener("click", applyCoupon);
couponInput.addEventListener("keydown", event => {
  if (event.key === "Enter") applyCoupon();
});

notes.addEventListener("input", () => {
  checkout.href = state.cart.length ? buildWhatsAppUrl() : "#";
});

document.querySelector("[data-copy-coupon]").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(COUPON);
    showToast("Cupom DESCONTO5 copiado.");
  } catch {
    showToast("Cupom: DESCONTO5");
  }
});

checkout.addEventListener("click", () => {
  checkout.href = state.cart.length ? buildWhatsAppUrl() : "#";
});

renderProducts();
applyCoupon();