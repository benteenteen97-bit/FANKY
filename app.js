/**
 * ====================================================================
 * OMEGA ICE CREAM - CORE APP & ADMIN CONTROLLER
 * Full interactive storefront, custom scoop crafter, spin wheel,
 * cart & checkout, live order tracker, and complete admin panel.
 * ====================================================================
 */

// --- DEFAULT INITIAL STATE DATA ---
const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    name: "Omega Neon Red Velvet Pop",
    category: "Specials",
    price: 5.99,
    emoji: "🍨",
    badge: "SIGNATURE FLAVOR",
    description: "Deep red velvet sponge swirl churned into vanilla cream, spiked with bursting neon popping candy!",
    inStock: true
  },
  {
    id: "prod-2",
    name: "Cosmic Rainbow Swirl Cone",
    category: "Cones",
    price: 4.75,
    emoji: "🍦",
    badge: "BESTSELLER",
    description: "Seven psychedelic fruit cream layers stacked inside a fresh crispy vanilla waffle cone.",
    inStock: true
  },
  {
    id: "prod-3",
    name: "Galactic Ube Midnight Fudge",
    category: "Cones",
    price: 5.25,
    emoji: "💜",
    badge: "STAFF PICK",
    description: "Rich Filipino purple yam ice cream folded with black cocoa fudge and roasted coconut flakes.",
    inStock: true
  },
  {
    id: "prod-4",
    name: "Black Charcoal Vanilla Monster",
    category: "Cones",
    price: 4.95,
    emoji: "🖤",
    badge: "PUNK PURE",
    description: "Activated coconut charcoal jet-black vanilla cream that turns your tongue funky purple!",
    inStock: true
  },
  {
    id: "prod-5",
    name: "Hot Red Lava Sundae",
    category: "Sundaes",
    price: 7.50,
    emoji: "🍧",
    badge: "HOT RED",
    description: "Double scoops of fiery cinnamon-chili strawberry ice cream drenched in warm dark chocolate fudge.",
    inStock: true
  },
  {
    id: "prod-6",
    name: "Electric Rainbow Volcano",
    category: "Sundaes",
    price: 8.25,
    emoji: "🌋",
    badge: "EXPLOSIVE",
    description: "Triple scoops topped with sour rainbow belts, popping boba, edible glitter, and whipped marshmallow.",
    inStock: true
  },
  {
    id: "prod-7",
    name: "Funky Freakshake Mega-Overload",
    category: "Freakshakes",
    price: 9.50,
    emoji: "🥤",
    badge: "WILD OVERLOAD",
    description: "Thick cookies & cream shake rimmed with Nutella, crowned with a whole frosted donut and cotton candy!",
    inStock: true
  },
  {
    id: "prod-8",
    name: "Matcha Neon Kiwi Freakshake",
    category: "Freakshakes",
    price: 8.95,
    emoji: "🥝",
    badge: "REFRESHING",
    description: "Ceremonial Japanese matcha blended with sweet kiwi pulp and crowned with matcha pocky sticks.",
    inStock: true
  },
  {
    id: "prod-9",
    name: "Cosmic Passionfruit Dragon Sorbet",
    category: "Vegan",
    price: 5.00,
    emoji: "🌱",
    badge: "100% VEGAN",
    description: "Vibrant hot pink dragonfruit and zesty passionfruit sorbet churned with pure organic coconut water.",
    inStock: true
  },
  {
    id: "prod-10",
    name: "Dark Chocolate Avocado Silk",
    category: "Vegan",
    price: 5.50,
    emoji: "🥑",
    badge: "DAIRY FREE",
    description: "Ultra-velvety Belgian 72% dark chocolate churned with organic Hass avocado. Super rich, zero dairy.",
    inStock: true
  },
  {
    id: "prod-11",
    name: "Psychedelic Mango Boba Bliss",
    category: "Specials",
    price: 6.25,
    emoji: "🥭",
    badge: "SUMMER HIT",
    description: "Alphonso mango cream layered with lychee popping pearls and hot lime drizzle.",
    inStock: true
  },
  {
    id: "prod-12",
    name: "Birthday Confetti Cookie Blast",
    category: "Cones",
    price: 5.25,
    emoji: "🎂",
    badge: "KIDS LOVED",
    description: "Sweet cream infused with blue birthday cake batter, chewy cookie dough chunks, and rainbow sprinkles.",
    inStock: true
  }
];

const DEFAULT_COUPONS = [
  { code: "FUNKY25", percent: 25, desc: "25% Off Grand Opening Funky Discount", active: true },
  { code: "OMEGA20", percent: 20, desc: "20% Off Wheel of Fortune Lucky Winner", active: true },
  { code: "JACKPOT30", percent: 30, desc: "30% Off Omega Cosmic Jackpot", active: true },
  { code: "SWEET10", percent: 10, desc: "10% Off Any Delicious Treat", active: true }
];

const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    name: "Roxy Thunder",
    flavor: "Omega Neon Red Velvet Pop",
    rating: 5,
    date: "Yesterday",
    comment: "This is hands-down the coolest ice cream joint ever! The popping candy in the red velvet scoop blew my mind."
  },
  {
    id: "rev-2",
    name: "Damian Frost",
    flavor: "Black Charcoal Vanilla Monster",
    rating: 5,
    date: "2 days ago",
    comment: "The jet-black cone looks super punk and tastes like heavenly Tahitian vanilla. Fast delivery in under 20 mins!"
  },
  {
    id: "rev-3",
    name: "Chloe Sunshine",
    flavor: "Cosmic Passionfruit Dragon Sorbet",
    rating: 5,
    date: "3 days ago",
    comment: "Finally an ice cream shop that takes vegan seriously! The neon pink dragonfruit sorbet is unreal."
  }
];

const DEFAULT_ORDERS = [
  {
    id: "OMG-7821",
    customer: "Zane Maverick",
    phone: "+1 (555) 321-9876",
    address: "88 Electric Ave, Apt 3",
    type: "Delivery",
    items: [
      { name: "Omega Neon Red Velvet Pop", qty: 2, price: 5.99 },
      { name: "Custom Funky Cone (Waffle + 2 Scoops)", qty: 1, price: 6.50 }
    ],
    total: 18.48,
    status: "Out for Delivery",
    timestamp: new Date(Date.now() - 25 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    notes: "Leave by front gate please!"
  },
  {
    id: "OMG-9244",
    customer: "Maya Lin",
    phone: "+1 (555) 774-1290",
    address: "Pickup in Store",
    type: "Pickup",
    items: [
      { name: "Funky Freakshake Mega-Overload", qty: 1, price: 9.50 }
    ],
    total: 9.50,
    status: "Scooping",
    timestamp: new Date(Date.now() - 10 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    notes: "Extra napkins please"
  },
  {
    id: "OMG-6110",
    customer: "Lucas Vance",
    phone: "+1 (555) 432-8811",
    address: "14 Neon Boulevard",
    type: "Delivery",
    items: [
      { name: "Cosmic Rainbow Swirl Cone", qty: 3, price: 4.75 },
      { name: "Hot Red Lava Sundae", qty: 1, price: 7.50 }
    ],
    total: 21.75,
    status: "Delivered",
    timestamp: new Date(Date.now() - 95 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    notes: ""
  }
];

const DEFAULT_SETTINGS = {
  storeName: "Omega Ice Cream",
  tickerText: "⚡ OMEGA ICE CREAM: CRAZY FUNK. ZERO BORING SCOOPS! ⚡ USE CODE 'FUNKY25' FOR 25% OFF! ⚡ FREE DELIVERY ON $20+ ⚡",
  storePhone: "+1 (800) OMEGA-ICE",
  storeAddress: "404 Neon Boulevard, Cosmic Alley, Funktown, NY 10001",
  storeHours: "Mon - Sun: 11:00 AM – 2:00 AM (Late Night Funk!)",
  adminPin: "1234",
  freeDeliveryThreshold: 20,
  isStoreOpen: true
};

// --- CRAFTER OPTIONS DATA ---
const CRAFTER_AVAILABLE_SCOOPS = [
  { id: "cs-1", name: "Neon Strawberry", color: "#ff0055", icon: "🍓" },
  { id: "cs-2", name: "Galactic Ube", color: "#9c27b0", icon: "💜" },
  { id: "cs-3", name: "Rainbow Burst", color: "#00e5ff", icon: "🌈" },
  { id: "cs-4", name: "Electric Mango", color: "#ffd600", icon: "🥭" },
  { id: "cs-5", name: "Black Charcoal Choc", color: "#212121", icon: "🖤" },
  { id: "cs-6", name: "Matcha Neon Kiwi", color: "#00e676", icon: "🍵" },
  { id: "cs-7", name: "Hot Red Velvet Lava", color: "#d50000", icon: "🔥" }
];

const CRAFTER_AVAILABLE_TOPPINGS = [
  { id: "ct-1", name: "Popping Boba", icon: "🫧", price: 0.50 },
  { id: "ct-2", name: "Edible Rainbow Glitter", icon: "✨", price: 0.50 },
  { id: "ct-3", name: "Gummy Bears", icon: "🧸", price: 0.50 },
  { id: "ct-4", name: "Crushed Oreos", icon: "🍪", price: 0.50 },
  { id: "ct-5", name: "Rainbow Sprinkles", icon: "🎉", price: 0.50 },
  { id: "ct-6", name: "Toasted Marshmallow", icon: "🍥", price: 0.50 }
];

// --- APP STATE ---
class AppStore {
  constructor() {
    this.loadState();
  }

  loadState() {
    this.products = JSON.parse(localStorage.getItem("omega_products")) || DEFAULT_PRODUCTS;
    this.coupons = JSON.parse(localStorage.getItem("omega_coupons")) || DEFAULT_COUPONS;
    this.reviews = JSON.parse(localStorage.getItem("omega_reviews")) || DEFAULT_REVIEWS;
    this.orders = JSON.parse(localStorage.getItem("omega_orders")) || DEFAULT_ORDERS;
    this.settings = JSON.parse(localStorage.getItem("omega_settings")) || DEFAULT_SETTINGS;
    this.cart = JSON.parse(localStorage.getItem("omega_cart")) || [];
    this.appliedCoupon = JSON.parse(localStorage.getItem("omega_active_coupon")) || null;
    this.soundEnabled = JSON.parse(localStorage.getItem("omega_sound")) ?? true;
  }

  save() {
    localStorage.setItem("omega_products", JSON.stringify(this.products));
    localStorage.setItem("omega_coupons", JSON.stringify(this.coupons));
    localStorage.setItem("omega_reviews", JSON.stringify(this.reviews));
    localStorage.setItem("omega_orders", JSON.stringify(this.orders));
    localStorage.setItem("omega_settings", JSON.stringify(this.settings));
    localStorage.setItem("omega_cart", JSON.stringify(this.cart));
    localStorage.setItem("omega_active_coupon", JSON.stringify(this.appliedCoupon));
    localStorage.setItem("omega_sound", JSON.stringify(this.soundEnabled));
  }
}

const store = new AppStore();

// --- WEB AUDIO API FUNKY SOUND ENGINE ---
class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playPop() {
    if (!store.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(350, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {}
  }

  playChime() {
    if (!store.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.08);
        osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
      });
    } catch (e) {}
  }

  playTick() {
    if (!store.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(1000, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {}
  }
}

const sounds = new SoundEngine();

// --- CRAFTER STATE ---
let crafterState = {
  base: "Waffle Cone",
  baseEmoji: "🧇",
  scoops: [CRAFTER_AVAILABLE_SCOOPS[0]], // Start with 1 scoop
  drizzle: "Hot Red Lava Fudge",
  drizzleEmoji: "🔥",
  toppings: []
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderProducts();
  initCategoryFilters();
  initSearch();
  initCrafter();
  initSpinWheel();
  renderCart();
  renderTracker();
  renderReviews();
  applySettingsToUI();
  initSoundButton();
});

// --- SOUND TOGGLE ---
function initSoundButton() {
  const btn = document.getElementById("sound-toggle-btn");
  if (!btn) return;
  const updateIcon = () => {
    btn.innerHTML = store.soundEnabled
      ? '<i class="fa-solid fa-volume-high text-[#00e676]"></i>'
      : '<i class="fa-solid fa-volume-xmark text-gray-500"></i>';
  };
  updateIcon();
  btn.addEventListener("click", () => {
    store.soundEnabled = !store.soundEnabled;
    store.save();
    updateIcon();
    showToast(store.soundEnabled ? "Funky Sounds: ON 🔊" : "Funky Sounds: Muted 🔇", "🎵");
    if (store.soundEnabled) sounds.playPop();
  });
}

// --- NAVBAR & MOBILE MENU ---
function initNavbar() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Cart Drawer Trigger
  const cartTrigger = document.getElementById("cart-drawer-trigger");
  const closeCartBtn = document.getElementById("close-cart-btn");
  const cartBackdrop = document.getElementById("cart-drawer-backdrop");
  const cartDrawer = document.getElementById("cart-drawer");

  if (cartTrigger) {
    cartTrigger.addEventListener("click", () => openCartDrawer());
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", () => closeCartDrawer());
  }
  if (cartBackdrop) {
    cartBackdrop.addEventListener("click", (e) => {
      if (e.target === cartBackdrop) closeCartDrawer();
    });
  }

  // Admin Portal Trigger
  const adminBtn = document.getElementById("admin-trigger-btn");
  if (adminBtn) {
    adminBtn.addEventListener("click", openAdminModal);
  }
}

function openCartDrawer() {
  const backdrop = document.getElementById("cart-drawer-backdrop");
  const drawer = document.getElementById("cart-drawer");
  if (!backdrop || !drawer) return;
  backdrop.classList.remove("hidden");
  setTimeout(() => {
    drawer.classList.remove("translate-x-full");
  }, 10);
  sounds.playPop();
}

function closeCartDrawer() {
  const backdrop = document.getElementById("cart-drawer-backdrop");
  const drawer = document.getElementById("cart-drawer");
  if (!backdrop || !drawer) return;
  drawer.classList.add("translate-x-full");
  setTimeout(() => {
    backdrop.classList.add("hidden");
  }, 300);
}

// --- PRODUCT CATALOG & MENU ---
let currentCategory = "all";
let currentSearch = "";

function renderProducts() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;

  const filtered = store.products.filter(item => {
    const matchesCat = currentCategory === "all" || item.category.toLowerCase() === currentCategory.toLowerCase();
    const matchesQuery = item.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                         item.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                         (item.badge && item.badge.toLowerCase().includes(currentSearch.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="text-5xl mb-3">🍧</div>
        <h4 class="font-funky text-xl text-gray-300">No funky flavors match that vibe!</h4>
        <p class="text-sm text-gray-500 mt-1">Try another category or search term.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const isOut = !item.inStock;
    return `
      <div class="product-card rounded-3xl p-5 flex flex-col justify-between group ${isOut ? 'opacity-50 grayscale' : ''}">
        <div>
          <!-- Top Badges -->
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 font-bubble">
              ${item.category}
            </span>
            ${item.badge ? `
              <span class="text-[10px] font-funky px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#ff0055] to-[#ff6d00] text-white shadow-sm uppercase tracking-wider">
                ${item.badge}
              </span>
            ` : ''}
          </div>

          <!-- Item Graphic / Emoji Showcase -->
          <div class="h-32 flex items-center justify-center relative my-2">
            <div class="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-6xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-[0_0_20px_rgba(255,0,85,0.2)]">
              ${item.emoji}
            </div>
            ${isOut ? '<span class="absolute px-3 py-1 bg-red-600 text-white font-funky text-xs rounded-full uppercase">Sold Out</span>' : ''}
          </div>

          <!-- Title & Description -->
          <h3 class="font-funky text-lg text-white group-hover:text-[#00e5ff] transition-colors leading-snug">
            ${item.name}
          </h3>
          <p class="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed font-sans">
            ${item.description}
          </p>
        </div>

        <!-- Price & Add Button -->
        <div class="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-gray-500 uppercase font-bubble block">Scoop Price</span>
            <span class="font-funky text-xl text-[#ffd600]">$${item.price.toFixed(2)}</span>
          </div>

          <button 
            onclick="addToCart('${item.id}')" 
            ${isOut ? 'disabled' : ''}
            class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ff0055] to-[#ff6d00] hover:brightness-110 text-white font-funky text-xs tracking-wider uppercase transition shadow-md flex items-center gap-1.5 active:scale-95 disabled:pointer-events-none">
            <i class="fa-solid fa-plus text-xs"></i> Scoop
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function initCategoryFilters() {
  const container = document.getElementById("category-filters");
  if (!container) return;
  const pills = container.querySelectorAll(".cat-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-cat");
      sounds.playPop();
      renderProducts();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById("menu-search-input");
  if (!searchInput) return;
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProducts();
  });
}

function quickAddSpecial(name, price, emoji) {
  const existing = store.cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    store.cart.push({
      id: "special-" + Date.now(),
      name: name,
      price: price,
      qty: 1,
      emoji: emoji,
      customDetails: "Signature Special Item"
    });
  }
  store.save();
  renderCart();
  openCartDrawer();
  fireConfetti();
  sounds.playChime();
  showToast(`Added ${name} to cart!`, "🍧");
}

// --- INTERACTIVE DIY SCOOP CRAFTER ---
function initCrafter() {
  renderCrafterScoopsList();
  renderCrafterToppingsList();
  updateCrafterPreview();
}

function renderCrafterScoopsList() {
  const container = document.getElementById("crafter-scoops-list");
  if (!container) return;

  container.innerHTML = CRAFTER_AVAILABLE_SCOOPS.map(sc => {
    const isSelected = crafterState.scoops.some(s => s.id === sc.id);
    return `
      <button onclick="toggleCrafterScoop('${sc.id}')" 
        class="crafter-scoop-btn p-2.5 rounded-2xl bg-white/5 border border-white/10 text-left transition flex items-center gap-2.5 ${isSelected ? 'active' : ''}">
        <span class="text-xl">${sc.icon}</span>
        <div class="overflow-hidden">
          <span class="block text-xs font-bold text-white truncate">${sc.name}</span>
          <span class="text-[10px] ${isSelected ? 'text-[#ff0055] font-bold' : 'text-gray-400'}">
            ${isSelected ? '✓ Selected' : 'Tap to add'}
          </span>
        </div>
      </button>
    `;
  }).join("");
}

function renderCrafterToppingsList() {
  const container = document.getElementById("crafter-toppings-list");
  if (!container) return;

  container.innerHTML = CRAFTER_AVAILABLE_TOPPINGS.map(top => {
    const isSelected = crafterState.toppings.some(t => t.id === top.id);
    return `
      <button onclick="toggleCrafterTopping('${top.id}')" 
        class="crafter-topping-btn p-2 rounded-2xl bg-white/5 border border-white/10 text-left transition flex items-center gap-2 ${isSelected ? 'active' : ''}">
        <span class="text-lg">${top.icon}</span>
        <div>
          <span class="block text-xs font-bold text-white">${top.name}</span>
          <span class="text-[10px] text-yellow-400">+$0.50</span>
        </div>
      </button>
    `;
  }).join("");
}

function selectCrafterBase(baseName, emoji) {
  crafterState.base = baseName;
  crafterState.baseEmoji = emoji;
  document.querySelectorAll(".crafter-base-btn").forEach(btn => {
    if (btn.innerText.includes(baseName)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  sounds.playPop();
  updateCrafterPreview();
}

function toggleCrafterScoop(scoopId) {
  const scoop = CRAFTER_AVAILABLE_SCOOPS.find(s => s.id === scoopId);
  if (!scoop) return;

  const existingIndex = crafterState.scoops.findIndex(s => s.id === scoopId);
  if (existingIndex > -1) {
    if (crafterState.scoops.length === 1) {
      showToast("You need at least 1 scoop for your ice cream!", "⚠️");
      return;
    }
    crafterState.scoops.splice(existingIndex, 1);
  } else {
    if (crafterState.scoops.length >= 3) {
      showToast("Maximum 3 scoops! Remove one first.", "🍧");
      return;
    }
    crafterState.scoops.push(scoop);
  }

  sounds.playPop();
  renderCrafterScoopsList();
  updateCrafterPreview();
}

function selectCrafterDrizzle(drizzleName, emoji) {
  crafterState.drizzle = drizzleName;
  crafterState.drizzleEmoji = emoji;
  document.querySelectorAll(".crafter-drizzle-btn").forEach(btn => {
    if (btn.innerText.includes(drizzleName)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  sounds.playPop();
  updateCrafterPreview();
}

function toggleCrafterTopping(toppingId) {
  const topping = CRAFTER_AVAILABLE_TOPPINGS.find(t => t.id === toppingId);
  if (!topping) return;

  const index = crafterState.toppings.findIndex(t => t.id === toppingId);
  if (index > -1) {
    crafterState.toppings.splice(index, 1);
  } else {
    crafterState.toppings.push(topping);
  }

  sounds.playPop();
  renderCrafterToppingsList();
  updateCrafterPreview();
}

function updateCrafterPreview() {
  // Base preview
  const previewBase = document.getElementById("preview-base");
  if (previewBase) {
    previewBase.innerHTML = `
      <span class="text-5xl block animate-bounce">${crafterState.baseEmoji}</span>
      <span class="text-xs font-bold text-gray-300 mt-1 block">${crafterState.base}</span>
    `;
  }

  // Drizzle preview
  const previewDrizzle = document.getElementById("preview-drizzle");
  if (previewDrizzle) {
    if (crafterState.drizzle.includes("None")) {
      previewDrizzle.classList.add("hidden");
    } else {
      previewDrizzle.classList.remove("hidden");
      previewDrizzle.innerHTML = `${crafterState.drizzleEmoji} ${crafterState.drizzle}`;
    }
  }

  // Toppings preview
  const previewToppings = document.getElementById("preview-toppings");
  if (previewToppings) {
    if (crafterState.toppings.length === 0) {
      previewToppings.innerHTML = '<span class="text-xs text-gray-500 italic">No extra crunch yet</span>';
    } else {
      previewToppings.innerHTML = crafterState.toppings.map(t => `
        <span class="px-2 py-0.5 bg-black/60 border border-white/10 rounded-full text-xs text-yellow-300 animate-pulse">
          ${t.icon} ${t.name}
        </span>
      `).join("");
    }
  }

  // Scoops stack preview
  const previewStack = document.getElementById("preview-scoops-stack");
  if (previewStack) {
    previewStack.innerHTML = crafterState.scoops.map((sc, index) => {
      return `
        <div class="w-20 h-14 sm:w-24 sm:h-16 rounded-full flex items-center justify-center text-white font-funky text-xs shadow-lg transform transition-all -mb-3"
          style="background: radial-gradient(circle at 30% 30%, ${sc.color}, #000); border: 2px solid ${sc.color}; box-shadow: 0 0 15px ${sc.color}88;">
          <span class="drop-shadow-md text-sm">${sc.icon}</span>
        </div>
      `;
    }).join("");
  }

  // Counter text
  const counterText = document.getElementById("scoops-counter-text");
  if (counterText) {
    counterText.innerText = `${crafterState.scoops.length} / 3 Selected`;
  }

  // Calculate price
  // 1 scoop base = $4.50, each extra scoop +$1.50
  const basePrice = 4.50 + (crafterState.scoops.length - 1) * 1.50;
  const toppingsPrice = crafterState.toppings.length * 0.50;
  const totalPrice = basePrice + toppingsPrice;

  document.getElementById("crafter-base-price").innerText = `$${basePrice.toFixed(2)}`;
  document.getElementById("crafter-toppings-price").innerText = `$${toppingsPrice.toFixed(2)}`;
  document.getElementById("crafter-total-price").innerText = `$${totalPrice.toFixed(2)}`;
}

function addCustomConeToCart() {
  const customNameInput = document.getElementById("crafter-custom-name");
  const customName = customNameInput && customNameInput.value.trim() 
    ? customNameInput.value.trim() 
    : "The Omega Funky Masterpiece";

  const basePrice = 4.50 + (crafterState.scoops.length - 1) * 1.50;
  const toppingsPrice = crafterState.toppings.length * 0.50;
  const totalPrice = basePrice + toppingsPrice;

  const scoopNames = crafterState.scoops.map(s => s.name).join(" + ");
  const toppingNames = crafterState.toppings.length > 0 
    ? crafterState.toppings.map(t => t.name).join(", ") 
    : "No toppings";
  
  const customItem = {
    id: "custom-" + Date.now(),
    name: customName,
    price: totalPrice,
    qty: 1,
    emoji: "🍧",
    customDetails: `${crafterState.base} &bull; Scoops: ${scoopNames} &bull; Drizzle: ${crafterState.drizzle} &bull; Toppings: ${toppingNames}`
  };

  store.cart.push(customItem);
  store.save();
  renderCart();
  openCartDrawer();
  fireConfetti();
  sounds.playChime();
  showToast(`Custom Cone "${customName}" added to cart!`, "🎉");

  if (customNameInput) customNameInput.value = "";
}

// --- SPIN TO WIN WHEEL ---
const WHEEL_SEGMENTS = [
  { label: "20% OFF", code: "OMEGA20", color: "#ff0055", text: "#ffffff" },
  { label: "FREE TOPPING", code: "FREESPRINKLE", color: "#ffd600", text: "#000000" },
  { label: "10% OFF", code: "SWEET10", color: "#00e5ff", text: "#000000" },
  { label: "25% OFF", code: "FUNKY25", color: "#d500f9", text: "#ffffff" },
  { label: "OMEGA 30%", code: "JACKPOT30", color: "#ff1744", text: "#ffffff" },
  { label: "FREE SPRINKLE", code: "FREESPRINKLE", color: "#00e676", text: "#000000" }
];

let wheelCanvas, wheelCtx;
let currentWheelAngle = 0;
let isSpinning = false;

function initSpinWheel() {
  wheelCanvas = document.getElementById("wheelCanvas");
  if (!wheelCanvas) return;
  wheelCtx = wheelCanvas.getContext("2d");
  drawWheel(0);
}

function drawWheel(angleOffset) {
  if (!wheelCtx) return;
  const width = wheelCanvas.width;
  const height = wheelCanvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = width / 2 - 10;
  const numSegments = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSegments;

  wheelCtx.clearRect(0, 0, width, height);

  for (let i = 0; i < numSegments; i++) {
    const seg = WHEEL_SEGMENTS[i];
    const startAngle = angleOffset + i * arcSize;
    const endAngle = startAngle + arcSize;

    // Segment background
    wheelCtx.beginPath();
    wheelCtx.moveTo(centerX, centerY);
    wheelCtx.arc(centerX, centerY, radius, startAngle, endAngle);
    wheelCtx.closePath();
    wheelCtx.fillStyle = seg.color;
    wheelCtx.fill();
    wheelCtx.lineWidth = 3;
    wheelCtx.strokeStyle = "#0d0d14";
    wheelCtx.stroke();

    // Text Label
    wheelCtx.save();
    wheelCtx.translate(centerX, centerY);
    wheelCtx.rotate(startAngle + arcSize / 2);
    wheelCtx.textAlign = "right";
    wheelCtx.fillStyle = seg.text;
    wheelCtx.font = "bold 15px 'Righteous', sans-serif";
    wheelCtx.shadowColor = "rgba(0,0,0,0.8)";
    wheelCtx.shadowBlur = 4;
    wheelCtx.fillText(seg.label, radius - 20, 5);
    wheelCtx.restore();
  }
}

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  const spinBtn = document.getElementById("spin-btn");
  if (spinBtn) spinBtn.disabled = true;

  const resultBox = document.getElementById("wheel-result-box");
  if (resultBox) resultBox.classList.add("hidden");

  // Spin physics parameters
  const extraRotations = 5 + Math.floor(Math.random() * 5); // 5 to 9 full spins
  const randomStopAngle = Math.random() * (2 * Math.PI);
  const targetAngle = currentWheelAngle + (extraRotations * 2 * Math.PI) + randomStopAngle;
  const spinDuration = 4500; // ms
  const startTime = performance.now();
  const startAngle = currentWheelAngle;

  let lastTickAngle = startAngle;

  function animateSpin(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / spinDuration, 1);
    // Ease-out cubic formula
    const easeOut = 1 - Math.pow(1 - progress, 3);

    currentWheelAngle = startAngle + (targetAngle - startAngle) * easeOut;
    drawWheel(currentWheelAngle);

    // Audio tick trigger
    if (Math.abs(currentWheelAngle - lastTickAngle) > 0.4) {
      sounds.playTick();
      lastTickAngle = currentWheelAngle;
    }

    if (progress < 1) {
      requestAnimationFrame(animateSpin);
    } else {
      isSpinning = false;
      if (spinBtn) spinBtn.disabled = false;
      finishWheelSpin();
    }
  }

  requestAnimationFrame(animateSpin);
}

function finishWheelSpin() {
  const numSegments = WHEEL_SEGMENTS.length;
  const arcSize = (2 * Math.PI) / numSegments;
  
  // The indicator points at the top (angle = 3 * Math.PI / 2 or -Math.PI / 2)
  const normalizedAngle = (currentWheelAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  // Pointer is at 270 deg (3*PI/2)
  const pointerAngle = (3 * Math.PI / 2 - normalizedAngle + 2 * Math.PI) % (2 * Math.PI);
  const winningIndex = Math.floor(pointerAngle / arcSize) % numSegments;
  const winner = WHEEL_SEGMENTS[winningIndex];

  sounds.playChime();
  fireConfetti();

  const resultBox = document.getElementById("wheel-result-box");
  const prizeTitle = document.getElementById("wheel-prize-title");
  const prizeDesc = document.getElementById("wheel-prize-desc");
  const prizeCode = document.getElementById("wheel-prize-code");

  if (resultBox && prizeTitle && prizeCode) {
    prizeTitle.innerText = `YOU WON: ${winner.label}!`;
    prizeDesc.innerText = `Congratulations! Use promo code '${winner.code}' at checkout to unlock your reward.`;
    prizeCode.innerText = winner.code;
    resultBox.classList.remove("hidden");
    resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  window.lastWheelCoupon = winner.code;
}

function applyWheelCoupon() {
  if (!window.lastWheelCoupon) return;
  applyCouponCode(window.lastWheelCoupon);
  openCartDrawer();
}

// --- CART & CHECKOUT ---
function addToCart(productId) {
  const product = store.products.find(p => p.id === productId);
  if (!product || !product.inStock) return;

  const existing = store.cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    store.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
      emoji: product.emoji,
      customDetails: product.category
    });
  }

  store.save();
  renderCart();
  sounds.playPop();
  showToast(`Added ${product.name} to cart!`, "🍦");
}

function updateCartQty(index, delta) {
  if (!store.cart[index]) return;
  store.cart[index].qty += delta;
  if (store.cart[index].qty <= 0) {
    store.cart.splice(index, 1);
  }
  store.save();
  renderCart();
  sounds.playPop();
}

function removeCartItem(index) {
  if (!store.cart[index]) return;
  store.cart.splice(index, 1);
  store.save();
  renderCart();
  sounds.playPop();
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const countBadge = document.getElementById("cart-counter-badge");
  const drawerCount = document.getElementById("drawer-item-count");
  const subtotalEl = document.getElementById("cart-subtotal");
  const discountEl = document.getElementById("cart-discount");
  const deliveryEl = document.getElementById("cart-delivery");
  const grandtotalEl = document.getElementById("cart-grandtotal");
  const couponTag = document.getElementById("coupon-applied-tag");
  const couponLabel = document.getElementById("coupon-applied-label");

  const totalItems = store.cart.reduce((sum, item) => sum + item.qty, 0);
  if (countBadge) countBadge.innerText = totalItems;
  const mobileBadge = document.getElementById("mobile-cart-badge");
  if (mobileBadge) mobileBadge.innerText = totalItems;
  if (drawerCount) drawerCount.innerText = `${totalItems} items waiting`;

  if (!container) return;

  if (store.cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center py-16 text-gray-500">
        <span class="text-6xl mb-3">🛒</span>
        <h4 class="font-funky text-lg text-white">Your cart is cold and lonely!</h4>
        <p class="text-xs text-gray-400 mt-1 max-w-[200px]">Scoop some wild flavors or craft your own cone to get the party started.</p>
        <button onclick="closeCartDrawer(); document.getElementById('menu').scrollIntoView({behavior:'smooth'});"
          class="mt-4 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#ffd600] font-funky text-xs uppercase hover:bg-white/10 transition">
          Browse Flavors &rarr;
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = "$0.00";
    if (discountEl) discountEl.innerText = "-$0.00";
    if (grandtotalEl) grandtotalEl.innerText = "$0.00";
    if (couponTag) couponTag.classList.add("hidden");
    return;
  }

  // Render items
  container.innerHTML = store.cart.map((item, index) => {
    return `
      <div class="bg-black/40 border border-white/10 rounded-2xl p-3 flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0">
            ${item.emoji || '🍦'}
          </div>
          <div class="overflow-hidden">
            <h5 class="text-xs font-bold text-white truncate max-w-[150px] sm:max-w-[180px]">${item.name}</h5>
            <span class="text-[10px] text-gray-400 block truncate max-w-[150px] sm:max-w-[180px]">${item.customDetails || ''}</span>
            <span class="text-xs font-funky text-[#ffd600]">$${(item.price * item.qty).toFixed(2)}</span>
          </div>
        </div>

        <div class="flex items-center gap-1.5 shrink-0">
          <button onclick="updateCartQty(${index}, -1)" class="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center text-xs font-bold transition">
            -
          </button>
          <span class="w-6 text-center font-funky text-xs text-white">${item.qty}</span>
          <button onclick="updateCartQty(${index}, 1)" class="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center text-xs font-bold transition">
            +
          </button>
          <button onclick="removeCartItem(${index})" class="ml-1 text-gray-500 hover:text-red-400 p-1 text-xs">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Subtotal Calculation
  const subtotal = store.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = 0;

  if (store.appliedCoupon) {
    discount = (subtotal * store.appliedCoupon.percent) / 100;
    if (couponTag && couponLabel) {
      couponTag.classList.remove("hidden");
      couponLabel.innerText = `🎉 ${store.appliedCoupon.code} (-${store.appliedCoupon.percent}%) Applied!`;
    }
  } else {
    if (couponTag) couponTag.classList.add("hidden");
  }

  const freeThreshold = store.settings.freeDeliveryThreshold || 20;
  const isFreeDelivery = subtotal >= freeThreshold;
  const deliveryFee = isFreeDelivery ? 0 : 2.99;

  if (deliveryEl) {
    deliveryEl.innerText = isFreeDelivery ? "FREE" : "$2.99";
    deliveryEl.className = isFreeDelivery ? "text-green-400 font-bold" : "text-gray-400 font-bold";
  }

  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (discountEl) discountEl.innerText = `-$${discount.toFixed(2)}`;
  if (grandtotalEl) grandtotalEl.innerText = `$${grandTotal.toFixed(2)}`;
}

function applyCouponFromInput() {
  const input = document.getElementById("cart-coupon-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  applyCouponCode(code);
  input.value = "";
}

function applyCouponCode(code) {
  const found = store.coupons.find(c => c.code.toUpperCase() === code && c.active);
  if (!found) {
    showToast("Invalid or expired coupon code!", "❌");
    return;
  }
  store.appliedCoupon = found;
  store.save();
  renderCart();
  sounds.playChime();
  fireConfetti();
  showToast(`Coupon ${found.code} applied (${found.percent}% off)!`, "🎉");
}

function removeCoupon() {
  store.appliedCoupon = null;
  store.save();
  renderCart();
  sounds.playPop();
  showToast("Coupon removed", "ℹ️");
}

// --- CHECKOUT & ORDER CREATION ---
function openCheckoutModal() {
  if (store.cart.length === 0) {
    showToast("Your cart is empty! Add scoops first.", "⚠️");
    return;
  }
  if (!store.settings.isStoreOpen) {
    showToast("Omega Ice Cream is closed for the night! Check back tomorrow.", "🌙");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById("checkout-modal");
  if (!modal) return;

  const totalItems = store.cart.reduce((sum, item) => sum + item.qty, 0);
  const grandTotal = document.getElementById("cart-grandtotal").innerText;

  document.getElementById("checkout-summary-items").innerText = `${totalItems} items`;
  document.getElementById("checkout-summary-total").innerText = grandTotal;

  modal.classList.remove("hidden");
  sounds.playPop();
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.add("hidden");
}

function toggleOrderType(val) {
  const addrBox = document.getElementById("delivery-address-container");
  if (!addrBox) return;
  if (val === "Pickup") {
    addrBox.classList.add("hidden");
  } else {
    addrBox.classList.remove("hidden");
  }
}

function handlePlaceOrder(e) {
  e.preventDefault();

  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  const address = orderType === "Delivery" 
    ? (document.getElementById("customer-address").value.trim() || "Delivery Address Provided")
    : "Store Pickup Counter";
  const notes = document.getElementById("customer-notes").value.trim();

  const subtotal = store.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = store.appliedCoupon ? (subtotal * store.appliedCoupon.percent) / 100 : 0;
  const freeThreshold = store.settings.freeDeliveryThreshold || 20;
  const deliveryFee = subtotal >= freeThreshold ? 0 : 2.99;
  const grandTotal = Math.max(0, subtotal - discount + deliveryFee);

  const orderId = "OMG-" + Math.floor(1000 + Math.random() * 9000);

  const newOrder = {
    id: orderId,
    customer: name,
    phone: phone,
    address: address,
    type: orderType,
    items: [...store.cart],
    total: grandTotal,
    status: "Pending",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    notes: notes
  };

  // Prepend to orders list
  store.orders.unshift(newOrder);

  // Clear cart & coupon
  store.cart = [];
  store.appliedCoupon = null;
  store.save();

  // Reset form
  document.getElementById("order-checkout-form").reset();
  closeCheckoutModal();
  renderCart();

  // Show success modal
  const successModal = document.getElementById("order-success-modal");
  document.getElementById("success-order-id").innerText = `#${orderId}`;
  if (successModal) successModal.classList.remove("hidden");

  // Save as last placed order for quick tracker view
  window.lastPlacedOrderId = orderId;

  fireConfetti();
  sounds.playChime();
}

function closeSuccessModal() {
  const successModal = document.getElementById("order-success-modal");
  if (successModal) successModal.classList.add("hidden");
}

function viewPlacedOrderInTracker() {
  closeSuccessModal();
  const trackInput = document.getElementById("track-order-input");
  if (trackInput && window.lastPlacedOrderId) {
    trackInput.value = window.lastPlacedOrderId;
  }
  trackOrder();
  document.getElementById("track-section").scrollIntoView({ behavior: "smooth" });
}

// --- ORDER TRACKER ---
function trackOrder() {
  const input = document.getElementById("track-order-input");
  const query = input ? input.value.trim().toUpperCase() : "";
  renderTracker(query);
}

function renderTracker(orderIdQuery) {
  const card = document.getElementById("tracker-display-card");
  if (!card) return;

  let order = null;
  if (orderIdQuery) {
    const cleanQuery = orderIdQuery.replace("#", "");
    order = store.orders.find(o => o.id.toUpperCase() === cleanQuery);
    if (!order) {
      card.innerHTML = `
        <div class="text-center py-8">
          <div class="text-4xl mb-2">🔍</div>
          <h4 class="font-funky text-lg text-white">Order #${orderIdQuery} not found!</h4>
          <p class="text-xs text-gray-400 mt-1">Please double check your Order ID from your receipt.</p>
        </div>
      `;
      return;
    }
  } else {
    // Show most recent active order by default
    order = store.orders[0];
  }

  if (!order) {
    card.innerHTML = `
      <div class="text-center py-8">
        <div class="text-4xl mb-2">🍦</div>
        <h4 class="font-funky text-lg text-white">No active orders yet!</h4>
        <p class="text-xs text-gray-400 mt-1">Place an order to watch the live freezing and delivery radar.</p>
      </div>
    `;
    return;
  }

  const statuses = ["Pending", "Scooping", "Out for Delivery", "Delivered"];
  let stepIndex = statuses.indexOf(order.status);
  if (order.status === "Cancelled") stepIndex = -1;

  card.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
      <div>
        <div class="flex items-center gap-2">
          <span class="font-funky text-xl text-white">ORDER #${order.id}</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold font-bubble ${getStatusBadgeClass(order.status)}">
            ${order.status}
          </span>
        </div>
        <p class="text-xs text-gray-400 mt-1">Customer: <strong class="text-white">${order.customer}</strong> &bull; Ordered at ${order.timestamp}</p>
      </div>

      <div class="text-right">
        <span class="text-xs text-gray-400 uppercase font-bubble block">Total Amount</span>
        <span class="text-xl font-funky text-[#ffd600]">$${order.total.toFixed(2)}</span>
      </div>
    </div>

    <!-- Progress Timeline Radar -->
    <div class="py-8">
      <div class="relative">
        <div class="h-2 bg-black/60 rounded-full border border-white/10 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-[#ff0055] via-[#ffd600] to-[#00e676] transition-all duration-700"
            style="width: ${stepIndex >= 0 ? ((stepIndex + 1) / statuses.length) * 100 : 0}%;"></div>
        </div>

        <div class="grid grid-cols-4 mt-4 text-center">
          <div class="${stepIndex >= 0 ? 'text-[#ff0055] font-bold' : 'text-gray-500'}">
            <span class="text-2xl block mb-1">📝</span>
            <span class="text-[11px] font-funky uppercase">Received</span>
          </div>
          <div class="${stepIndex >= 1 ? 'text-[#ffd600] font-bold' : 'text-gray-500'}">
            <span class="text-2xl block mb-1">🍧</span>
            <span class="text-[11px] font-funky uppercase">Scooping</span>
          </div>
          <div class="${stepIndex >= 2 ? 'text-[#00e5ff] font-bold' : 'text-gray-500'}">
            <span class="text-2xl block mb-1">🛵</span>
            <span class="text-[11px] font-funky uppercase">Out</span>
          </div>
          <div class="${stepIndex >= 3 ? 'text-green-400 font-bold' : 'text-gray-500'}">
            <span class="text-2xl block mb-1">🎉</span>
            <span class="text-[11px] font-funky uppercase">Delivered</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Items Mini Breakdown -->
    <div class="bg-black/50 p-4 rounded-2xl border border-white/10">
      <h5 class="text-xs font-funky text-gray-300 uppercase mb-2">Items in this scoop box:</h5>
      <ul class="divide-y divide-white/5 text-xs text-gray-300 space-y-1">
        ${order.items.map(it => `
          <li class="flex justify-between py-1.5">
            <span>${it.qty}x ${it.name}</span>
            <span class="text-[#ffd600] font-bold">$${(it.price * it.qty).toFixed(2)}</span>
          </li>
        `).join("")}
      </ul>
      ${order.address ? `<div class="mt-3 pt-2 border-t border-white/10 text-[11px] text-gray-400">📍 Destination: <span class="text-white">${order.address}</span></div>` : ''}
    </div>
  `;
}

function getStatusBadgeClass(status) {
  switch (status) {
    case "Pending": return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
    case "Scooping": return "bg-blue-500/20 text-[#00e5ff] border border-blue-500/30";
    case "Out for Delivery": return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
    case "Delivered": return "bg-green-500/20 text-green-400 border border-green-500/30";
    case "Cancelled": return "bg-red-500/20 text-red-400 border border-red-500/30";
    default: return "bg-white/10 text-white";
  }
}

// --- REVIEWS / LOVE WALL ---
let currentReviewRating = 5;

function renderReviews() {
  const grid = document.getElementById("reviews-grid");
  if (!grid) return;

  grid.innerHTML = store.reviews.map(rev => {
    const stars = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);
    return `
      <div class="bg-[#141420] border border-white/10 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between">
        <div class="absolute -top-3 -right-3 w-16 h-16 bg-[#ff0055]/10 rounded-full blur-xl pointer-events-none"></div>
        <div>
          <div class="text-[#ffd600] text-base mb-2 tracking-widest">${stars}</div>
          <p class="text-xs text-gray-300 italic font-sans leading-relaxed">"${rev.comment}"</p>
        </div>
        <div class="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <div>
            <h4 class="font-bold text-white">${rev.name}</h4>
            <span class="text-[10px] text-[#00e5ff] block">${rev.flavor}</span>
          </div>
          <span class="text-[10px] text-gray-500 font-bubble">${rev.date}</span>
        </div>
      </div>
    `;
  }).join("");
}

function openReviewModal() {
  const modal = document.getElementById("review-modal");
  if (modal) modal.classList.remove("hidden");
  setReviewRating(5);
  sounds.playPop();
}

function closeReviewModal() {
  const modal = document.getElementById("review-modal");
  if (modal) modal.classList.add("hidden");
}

function setReviewRating(rating) {
  currentReviewRating = rating;
  const buttons = document.querySelectorAll("#star-rating-selector .star-btn");
  buttons.forEach((btn, idx) => {
    if (idx < rating) {
      btn.classList.add("text-yellow-400");
      btn.classList.remove("text-gray-600");
    } else {
      btn.classList.remove("text-yellow-400");
      btn.classList.add("text-gray-600");
    }
  });
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("review-name").value.trim();
  const flavor = document.getElementById("review-flavor").value.trim();
  const comment = document.getElementById("review-comment").value.trim();

  const newReview = {
    id: "rev-" + Date.now(),
    name: name,
    flavor: flavor,
    rating: currentReviewRating,
    date: "Just now",
    comment: comment
  };

  store.reviews.unshift(newReview);
  store.save();
  renderReviews();
  closeReviewModal();
  document.getElementById("add-review-form").reset();

  fireConfetti();
  sounds.playChime();
  showToast("Thank you for your funky review!", "⭐");
}

// --- CONTACT FORM ---
function handleContactSubmit(e) {
  e.preventDefault();
  sounds.playChime();
  fireConfetti();
  showToast("Message beamed to Omega HQ! We'll reply soon.", "🚀");
  e.target.reset();
}

// ====================================================================
// ADMIN CONTROL CENTER
// ====================================================================

function openAdminModal() {
  const pinModal = document.getElementById("admin-pin-modal");
  const pinInput = document.getElementById("admin-pin-input");
  if (pinModal) {
    pinModal.classList.remove("hidden");
    if (pinInput) {
      pinInput.value = "";
      setTimeout(() => pinInput.focus(), 100);
    }
    sounds.playPop();
  }
}

function closeAdminPinModal() {
  const pinModal = document.getElementById("admin-pin-modal");
  if (pinModal) pinModal.classList.add("hidden");
}

function verifyAdminPin() {
  const pinInput = document.getElementById("admin-pin-input");
  const enteredPin = pinInput ? pinInput.value.trim() : "";
  const expectedPin = store.settings.adminPin || "1234";

  if (enteredPin === expectedPin) {
    closeAdminPinModal();
    const adminPanel = document.getElementById("admin-panel-modal");
    if (adminPanel) adminPanel.classList.remove("hidden");
    sounds.playChime();
    refreshAdminViews();
    showToast("Admin access granted! Welcome boss.", "⚡");
  } else {
    sounds.playPop();
    showToast("Incorrect PIN code! (Hint: 1234)", "❌");
    if (pinInput) {
      pinInput.value = "";
      pinInput.focus();
    }
  }
}

function closeAdminPanel() {
  const adminPanel = document.getElementById("admin-panel-modal");
  if (adminPanel) adminPanel.classList.add("hidden");
}

function switchAdminTab(tabName) {
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".admin-view").forEach(view => {
    view.classList.add("hidden");
  });

  const activeBtn = document.getElementById(`tab-btn-${tabName}`);
  const activeView = document.getElementById(`admin-view-${tabName}`);

  if (activeBtn) activeBtn.classList.add("active");
  if (activeView) activeView.classList.remove("hidden");

  sounds.playPop();
  refreshAdminViews();
}

function refreshAdminViews() {
  updateAdminBadges();
  renderAdminDashboard();
  renderAdminProductsTable();
  renderAdminOrdersList();
  renderAdminCouponsTable();
  renderAdminReviewsList();
  populateSettingsForm();
}

function updateAdminBadges() {
  const pBadge = document.getElementById("admin-badge-products");
  const oBadge = document.getElementById("admin-badge-orders");
  const cBadge = document.getElementById("admin-badge-coupons");
  const rBadge = document.getElementById("admin-badge-reviews");

  if (pBadge) pBadge.innerText = store.products.length;
  if (oBadge) {
    const pendingCount = store.orders.filter(o => o.status !== "Delivered" && o.status !== "Cancelled").length;
    oBadge.innerText = pendingCount;
  }
  if (cBadge) cBadge.innerText = store.coupons.length;
  if (rBadge) rBadge.innerText = store.reviews.length;
}

// Admin Tab 1: Dashboard
function renderAdminDashboard() {
  const totalRevenue = store.orders
    .filter(o => o.status !== "Cancelled")
    .reduce((sum, o) => sum + o.total, 0);

  const pendingOrders = store.orders.filter(o => o.status === "Pending" || o.status === "Scooping").length;
  const avgRating = (store.reviews.reduce((s, r) => s + r.rating, 0) / (store.reviews.length || 1)).toFixed(1);

  document.getElementById("dash-stat-revenue").innerText = `$${totalRevenue.toFixed(2)}`;
  document.getElementById("dash-stat-orders").innerText = store.orders.length;
  document.getElementById("dash-stat-pending-orders").innerText = `${pendingOrders} pending active fulfillment`;
  document.getElementById("dash-stat-flavors").innerText = store.products.length;
  document.getElementById("dash-stat-rating").innerText = `${avgRating} ★`;
  document.getElementById("dash-stat-review-count").innerText = `Based on ${store.reviews.length} customer reviews`;

  const statusText = document.getElementById("dash-store-status-text");
  if (statusText) {
    statusText.innerText = store.settings.isStoreOpen ? "OPEN & SCOOPING" : "CLOSED FOR THE NIGHT";
    statusText.className = store.settings.isStoreOpen ? "text-green-400" : "text-red-400";
  }

  // Recent 5 orders table
  const tbody = document.getElementById("dash-recent-orders-tbody");
  if (tbody) {
    tbody.innerHTML = store.orders.slice(0, 5).map(o => `
      <tr class="hover:bg-white/5 transition">
        <td class="py-3 px-4 font-funky text-white">#${o.id}</td>
        <td class="py-3 px-4 font-bold text-gray-200">${o.customer}</td>
        <td class="py-3 px-4">${o.type === 'Delivery' ? '🛵 Delivery' : '🏪 Pickup'}</td>
        <td class="py-3 px-4 text-gray-400">${o.items.length} items</td>
        <td class="py-3 px-4 font-funky text-[#ffd600]">$${o.total.toFixed(2)}</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${getStatusBadgeClass(o.status)}">
            ${o.status}
          </span>
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="advanceOrderStatus('${o.id}')" class="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] font-funky transition">
            Next Status &rarr;
          </button>
        </td>
      </tr>
    `).join("");
  }
}

function toggleStoreOpenStatus() {
  store.settings.isStoreOpen = !store.settings.isStoreOpen;
  store.save();
  applySettingsToUI();
  renderAdminDashboard();
  sounds.playPop();
  showToast(store.settings.isStoreOpen ? "Store is now OPEN!" : "Store is now CLOSED!", "🏪");
}

// Admin Tab 2: Products CRUD
function renderAdminProductsTable() {
  const tbody = document.getElementById("admin-products-tbody");
  if (!tbody) return;

  tbody.innerHTML = store.products.map(p => `
    <tr class="hover:bg-white/5 transition">
      <td class="py-3.5 px-4 flex items-center gap-3">
        <span class="text-2xl">${p.emoji}</span>
        <div>
          <span class="font-bold text-white block">${p.name}</span>
          <span class="text-[11px] text-gray-400 line-clamp-1">${p.description}</span>
        </div>
      </td>
      <td class="py-3.5 px-4 text-gray-300">${p.category}</td>
      <td class="py-3.5 px-4 font-funky text-[#ffd600] text-sm">$${p.price.toFixed(2)}</td>
      <td class="py-3.5 px-4">
        ${p.badge ? `<span class="px-2 py-0.5 rounded bg-[#ff0055]/20 text-[#ff0055] font-bold text-[10px] border border-[#ff0055]/30">${p.badge}</span>` : '<span class="text-gray-600">-</span>'}
      </td>
      <td class="py-3.5 px-4">
        <button onclick="toggleProductStock('${p.id}')" class="px-2.5 py-1 rounded-full text-[10px] font-bold transition ${p.inStock ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}">
          ${p.inStock ? '● In Stock' : '✕ Out of Stock'}
        </button>
      </td>
      <td class="py-3.5 px-4 text-right space-x-2">
        <button onclick="openEditProductModal('${p.id}')" class="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#00e5ff] text-xs">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onclick="deleteProduct('${p.id}')" class="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-red-400 text-xs">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

function openAddProductModal() {
  document.getElementById("product-modal-title").innerText = "ADD NEW MENU ITEM";
  document.getElementById("product-form").reset();
  document.getElementById("prod-id").value = "";
  document.getElementById("prod-instock").checked = true;
  document.getElementById("product-edit-modal").classList.remove("hidden");
  sounds.playPop();
}

function openEditProductModal(productId) {
  const p = store.products.find(item => item.id === productId);
  if (!p) return;

  document.getElementById("product-modal-title").innerText = "EDIT MENU ITEM";
  document.getElementById("prod-id").value = p.id;
  document.getElementById("prod-name").value = p.name;
  document.getElementById("prod-emoji").value = p.emoji;
  document.getElementById("prod-category").value = p.category;
  document.getElementById("prod-price").value = p.price;
  document.getElementById("prod-badge").value = p.badge || "";
  document.getElementById("prod-desc").value = p.description;
  document.getElementById("prod-instock").checked = p.inStock;

  document.getElementById("product-edit-modal").classList.remove("hidden");
  sounds.playPop();
}

function closeProductEditModal() {
  document.getElementById("product-edit-modal").classList.add("hidden");
}

function handleSaveProduct(e) {
  e.preventDefault();
  const id = document.getElementById("prod-id").value;
  const name = document.getElementById("prod-name").value.trim();
  const emoji = document.getElementById("prod-emoji").value.trim() || "🍧";
  const category = document.getElementById("prod-category").value;
  const price = parseFloat(document.getElementById("prod-price").value);
  const badge = document.getElementById("prod-badge").value.trim();
  const desc = document.getElementById("prod-desc").value.trim();
  const inStock = document.getElementById("prod-instock").checked;

  if (id) {
    // Edit
    const index = store.products.findIndex(p => p.id === id);
    if (index > -1) {
      store.products[index] = { ...store.products[index], name, emoji, category, price, badge, description: desc, inStock };
    }
  } else {
    // Add
    const newProd = {
      id: "prod-" + Date.now(),
      name, emoji, category, price, badge, description: desc, inStock
    };
    store.products.unshift(newProd);
  }

  store.save();
  renderProducts();
  renderAdminProductsTable();
  updateAdminBadges();
  closeProductEditModal();
  sounds.playChime();
  showToast("Product saved successfully!", "✅");
}

function toggleProductStock(productId) {
  const prod = store.products.find(p => p.id === productId);
  if (!prod) return;
  prod.inStock = !prod.inStock;
  store.save();
  renderProducts();
  renderAdminProductsTable();
  sounds.playPop();
  showToast(`${prod.name} is now ${prod.inStock ? 'In Stock' : 'Out of Stock'}`, "ℹ️");
}

function deleteProduct(productId) {
  if (!confirm("Are you sure you want to delete this flavor?")) return;
  store.products = store.products.filter(p => p.id !== productId);
  store.save();
  renderProducts();
  renderAdminProductsTable();
  updateAdminBadges();
  sounds.playPop();
  showToast("Flavor removed from catalog", "🗑️");
}

// Admin Tab 3: Orders Management
let currentAdminOrderFilter = "All";

function filterAdminOrders(val) {
  currentAdminOrderFilter = val;
  renderAdminOrdersList();
}

function renderAdminOrdersList() {
  const container = document.getElementById("admin-orders-list");
  if (!container) return;

  const filtered = store.orders.filter(o => {
    if (currentAdminOrderFilter === "All") return true;
    return o.status === currentAdminOrderFilter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-[#141420] border border-white/10 rounded-2xl p-12 text-center text-gray-500">
        <span class="text-4xl mb-2 block">📦</span>
        <h4 class="font-funky text-base text-white">No orders matching "${currentAdminOrderFilter}"</h4>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(order => `
    <div class="bg-[#141420] border border-white/10 rounded-2xl p-5 space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
        <div class="flex items-center gap-3">
          <span class="font-funky text-lg text-white">#${order.id}</span>
          <span class="px-2.5 py-0.5 rounded text-xs font-bold ${getStatusBadgeClass(order.status)}">
            ${order.status}
          </span>
          <span class="text-xs text-gray-400">&bull; ${order.timestamp}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400">Update Status:</span>
          <select onchange="updateOrderStatus('${order.id}', this.value)" class="bg-black/60 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none">
            <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Scooping" ${order.status === 'Scooping' ? 'selected' : ''}>Scooping</option>
            <option value="Out for Delivery" ${order.status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
            <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
            <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div>
          <span class="text-gray-400 block font-bubble">Customer Details</span>
          <strong class="text-white text-sm block mt-0.5">${order.customer}</strong>
          <span class="text-gray-300 block">${order.phone}</span>
          <span class="text-gray-400 block mt-1">📍 ${order.address}</span>
        </div>

        <div>
          <span class="text-gray-400 block font-bubble">Ordered Items (${order.items.length})</span>
          <ul class="mt-1 space-y-1 text-gray-300">
            ${order.items.map(it => `
              <li>${it.qty}x <strong>${it.name}</strong> ($${(it.price * it.qty).toFixed(2)})</li>
            `).join("")}
          </ul>
          ${order.notes ? `<p class="text-yellow-300 text-[11px] mt-2">Note: "${order.notes}"</p>` : ''}
        </div>

        <div class="text-left md:text-right flex flex-col justify-between">
          <div>
            <span class="text-gray-400 block font-bubble">Total Amount</span>
            <span class="text-2xl font-funky text-[#ffd600]">$${order.total.toFixed(2)}</span>
            <span class="text-[11px] text-gray-400 block mt-0.5">Method: Cash / Card</span>
          </div>
          <div>
            <button onclick="advanceOrderStatus('${order.id}')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#ff0055] to-purple-600 text-white font-funky text-[11px] uppercase tracking-wider hover:brightness-110 transition">
              Next Step &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function updateOrderStatus(orderId, newStatus) {
  const order = store.orders.find(o => o.id === orderId);
  if (!order) return;
  order.status = newStatus;
  store.save();
  renderAdminOrdersList();
  renderAdminDashboard();
  renderTracker();
  sounds.playPop();
  showToast(`Order #${orderId} set to ${newStatus}`, "📦");
}

function advanceOrderStatus(orderId) {
  const order = store.orders.find(o => o.id === orderId);
  if (!order) return;
  const flow = ["Pending", "Scooping", "Out for Delivery", "Delivered"];
  const currIdx = flow.indexOf(order.status);
  if (currIdx < flow.length - 1) {
    order.status = flow[currIdx + 1];
    store.save();
    renderAdminOrdersList();
    renderAdminDashboard();
    renderTracker();
    sounds.playChime();
    showToast(`Order #${orderId} progressed to ${order.status}!`, "🚀");
  }
}

// Admin Tab 4: Coupons CRUD
function renderAdminCouponsTable() {
  const tbody = document.getElementById("admin-coupons-tbody");
  if (!tbody) return;

  tbody.innerHTML = store.coupons.map(c => `
    <tr class="hover:bg-white/5 transition">
      <td class="py-3.5 px-4 font-funky text-[#00e5ff] text-sm">${c.code}</td>
      <td class="py-3.5 px-4 font-funky text-[#ffd600]">${c.percent}% OFF</td>
      <td class="py-3.5 px-4 text-gray-300 text-xs">${c.desc}</td>
      <td class="py-3.5 px-4">
        <button onclick="toggleCouponActive('${c.code}')" class="px-2.5 py-1 rounded-full text-[10px] font-bold ${c.active ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}">
          ${c.active ? 'Active' : 'Disabled'}
        </button>
      </td>
      <td class="py-3.5 px-4 text-right">
        <button onclick="deleteCoupon('${c.code}')" class="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-red-400 text-xs">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

function openAddCouponModal() {
  document.getElementById("coupon-form").reset();
  document.getElementById("coupon-add-modal").classList.remove("hidden");
  sounds.playPop();
}

function closeCouponAddModal() {
  document.getElementById("coupon-add-modal").classList.add("hidden");
}

function handleSaveCoupon(e) {
  e.preventDefault();
  const code = document.getElementById("new-coupon-code").value.trim().toUpperCase();
  const percent = parseInt(document.getElementById("new-coupon-percent").value);
  const desc = document.getElementById("new-coupon-desc").value.trim();

  if (store.coupons.some(c => c.code.toUpperCase() === code)) {
    showToast("A coupon with this code already exists!", "⚠️");
    return;
  }

  store.coupons.unshift({ code, percent, desc, active: true });
  store.save();
  renderAdminCouponsTable();
  updateAdminBadges();
  closeCouponAddModal();
  sounds.playChime();
  showToast(`Promo code ${code} activated!`, "🎟️");
}

function toggleCouponActive(code) {
  const coup = store.coupons.find(c => c.code === code);
  if (!coup) return;
  coup.active = !coup.active;
  store.save();
  renderAdminCouponsTable();
  sounds.playPop();
}

function deleteCoupon(code) {
  if (!confirm(`Delete coupon code ${code}?`)) return;
  store.coupons = store.coupons.filter(c => c.code !== code);
  store.save();
  renderAdminCouponsTable();
  updateAdminBadges();
  sounds.playPop();
  showToast("Coupon deleted", "🗑️");
}

// Admin Tab 5: Reviews Moderation
function renderAdminReviewsList() {
  const container = document.getElementById("admin-reviews-list");
  if (!container) return;

  container.innerHTML = store.reviews.map(r => `
    <div class="bg-[#141420] border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="font-bold text-white text-xs">${r.name}</span>
          <span class="text-yellow-400 text-xs">★ ${r.rating}/5</span>
        </div>
        <span class="text-[11px] text-[#00e5ff] block mb-2 font-funky">${r.flavor}</span>
        <p class="text-xs text-gray-300 italic font-sans leading-relaxed">"${r.comment}"</p>
      </div>

      <div class="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500">
        <span>${r.date}</span>
        <button onclick="deleteReview('${r.id}')" class="text-red-400 hover:text-red-300 flex items-center gap-1">
          <i class="fa-solid fa-trash-can"></i> Remove
        </button>
      </div>
    </div>
  `).join("");
}

function deleteReview(reviewId) {
  if (!confirm("Remove this review from Love Wall?")) return;
  store.reviews = store.reviews.filter(r => r.id !== reviewId);
  store.save();
  renderReviews();
  renderAdminReviewsList();
  updateAdminBadges();
  sounds.playPop();
  showToast("Review deleted", "🗑️");
}

// Admin Tab 6: Settings
function populateSettingsForm() {
  document.getElementById("setting-ticker-text").value = store.settings.tickerText || "";
  document.getElementById("setting-store-phone").value = store.settings.storePhone || "";
  document.getElementById("setting-free-delivery").value = store.settings.freeDeliveryThreshold || 20;
  document.getElementById("setting-store-address").value = store.settings.storeAddress || "";
  document.getElementById("setting-store-hours").value = store.settings.storeHours || "";
  document.getElementById("setting-admin-pin").value = store.settings.adminPin || "1234";
}

function handleSaveSettings(e) {
  e.preventDefault();
  store.settings.tickerText = document.getElementById("setting-ticker-text").value.trim();
  store.settings.storePhone = document.getElementById("setting-store-phone").value.trim();
  store.settings.freeDeliveryThreshold = parseFloat(document.getElementById("setting-free-delivery").value) || 20;
  store.settings.storeAddress = document.getElementById("setting-store-address").value.trim();
  store.settings.storeHours = document.getElementById("setting-store-hours").value.trim();
  store.settings.adminPin = document.getElementById("setting-admin-pin").value.trim() || "1234";

  store.save();
  applySettingsToUI();
  sounds.playChime();
  showToast("Store settings updated successfully!", "💾");
}

function applySettingsToUI() {
  // Ticker
  const tickerEl = document.getElementById("announcement-text");
  if (tickerEl && store.settings.tickerText) {
    tickerEl.innerHTML = `<span>${store.settings.tickerText}</span>`;
  }

  // Store address & hours
  const addrEl = document.getElementById("store-address-display");
  const hoursEl = document.getElementById("store-hours-display");
  const phoneEl = document.getElementById("store-phone-display");

  if (addrEl) addrEl.innerText = store.settings.storeAddress;
  if (hoursEl) hoursEl.innerText = store.settings.storeHours;
  if (phoneEl) phoneEl.innerText = `${store.settings.storePhone} • hello@omegaicecream.fun`;

  // Status badge
  const statusBadge = document.getElementById("store-status-badge");
  if (statusBadge) {
    if (store.settings.isStoreOpen) {
      statusBadge.innerText = "Scooping Live • Fast Delivery In 20 Mins";
      statusBadge.className = "text-xs uppercase font-bubble font-bold tracking-wider text-green-400";
    } else {
      statusBadge.innerText = "Store Closed for Tonight • Reopening at 11 AM";
      statusBadge.className = "text-xs uppercase font-bubble font-bold tracking-wider text-red-400";
    }
  }
}

// Backup & Reset Helpers
function exportShopDataJSON() {
  const data = {
    products: store.products,
    coupons: store.coupons,
    reviews: store.reviews,
    orders: store.orders,
    settings: store.settings,
    exportDate: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `omega_ice_cream_backup_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  sounds.playPop();
  showToast("Backup JSON file exported!", "💾");
}

function resetShopDataToDefaults() {
  if (!confirm("Are you sure you want to reset all shop data back to factory defaults?")) return;
  localStorage.clear();
  store.loadState();
  store.save();
  renderProducts();
  renderReviews();
  renderCart();
  renderTracker();
  refreshAdminViews();
  applySettingsToUI();
  sounds.playPop();
  showToast("Shop data reset to default demo state!", "🔄");
}

// --- UTILITIES: TOAST & CONFETTI ---
let toastTimeout;
function showToast(message, icon = "🍦") {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");
  if (!toast || !toastMsg) return;

  toastMsg.innerText = message;
  if (toastIcon) toastIcon.innerText = icon;

  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-24", "opacity-0");
  }, 2800);
}

function fireConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0055', '#ffd600', '#00e5ff', '#00e676', '#d500f9', '#ffffff']
    });
  }
}
