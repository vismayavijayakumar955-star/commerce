/* ============================================
   VENU — Premium E-Commerce | script.js
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // PRODUCT DATA
  // ============================================

  const products = [
    {
      id: 1,
      name: 'Slim Fit Blazer',
      brand: 'VENU Collection',
      category: 'Men\'s Fashion',
      description: 'Premium wool-blend blazer with a modern slim fit. Perfect for business or casual elegance.',
      price: 89.99,
      originalPrice: 149.99,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80',
      bestSeller: true,
      new: false,
      stock: 15,
      popularity: 92
    },
    {
      id: 2,
      name: 'Cashmere Crewneck Sweater',
      brand: 'Luxe Knitwear',
      category: 'Men\'s Fashion',
      description: 'Ultra-soft cashmere sweater with ribbed cuffs and hem. A timeless wardrobe essential.',
      price: 129.99,
      originalPrice: 189.99,
      rating: 4.9,
      reviews: 187,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
      bestSeller: true,
      new: false,
      stock: 8,
      popularity: 88
    },
    {
      id: 3,
      name: 'Floral Maxi Dress',
      brand: 'Elena Designs',
      category: 'Women\'s Fashion',
      description: 'Flowing maxi dress with a vibrant floral print. Features a flattering A-line silhouette.',
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80',
      bestSeller: true,
      new: true,
      stock: 22,
      popularity: 95
    },
    {
      id: 4,
      name: 'Leather Tote Bag',
      brand: 'Artisan Leather',
      category: 'Accessories',
      description: 'Handcrafted full-grain leather tote with gold-tone hardware and spacious interior.',
      price: 199.99,
      originalPrice: 279.99,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
      bestSeller: true,
      new: false,
      stock: 5,
      popularity: 90
    },
    {
      id: 5,
      name: 'Wireless Noise-Canceling Headphones',
      brand: 'SonicPro',
      category: 'Electronics',
      description: 'Premium ANC headphones with 40-hour battery life and Hi-Res audio support.',
      price: 249.99,
      originalPrice: 349.99,
      rating: 4.6,
      reviews: 523,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
      bestSeller: true,
      new: true,
      stock: 18,
      popularity: 97
    },
    {
      id: 6,
      name: 'Running Sneakers Ultra',
      brand: 'Velocity',
      category: 'Shoes',
      description: 'Lightweight performance running shoes with responsive cushioning and breathable mesh.',
      price: 139.99,
      originalPrice: 179.99,
      rating: 4.7,
      reviews: 445,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
      bestSeller: true,
      new: false,
      stock: 12,
      popularity: 91
    },
    {
      id: 7,
      name: 'Hydrating Serum',
      brand: 'Glow Lab',
      category: 'Beauty',
      description: 'Anti-aging hyaluronic acid serum with vitamin C for radiant, youthful skin.',
      price: 54.99,
      originalPrice: 74.99,
      rating: 4.8,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80',
      bestSeller: true,
      new: false,
      stock: 45,
      popularity: 93
    },
    {
      id: 8,
      name: 'Minimalist Watch',
      brand: 'Nordik Time',
      category: 'Watches',
      description: 'Elegant minimalist watch with sapphire crystal, Japanese movement, and Italian leather strap.',
      price: 179.99,
      originalPrice: 259.99,
      rating: 4.8,
      reviews: 289,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80',
      bestSeller: true,
      new: true,
      stock: 10,
      popularity: 86
    },
    {
      id: 9,
      name: 'Denim Jacket',
      brand: 'Urban Edge',
      category: 'Men\'s Fashion',
      description: 'Classic denim jacket with a modern twist. Distressed details and a comfortable fit.',
      price: 94.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80',
      bestSeller: false,
      new: false,
      stock: 20,
      popularity: 78
    },
    {
      id: 10,
      name: 'Silk Evening Gown',
      brand: 'Elena Designs',
      category: 'Women\'s Fashion',
      description: 'Luxurious silk gown with a elegant cowl neck and open back. Red carpet ready.',
      price: 299.99,
      originalPrice: 449.99,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80',
      bestSeller: false,
      new: true,
      stock: 3,
      popularity: 82
    },
    {
      id: 11,
      name: 'Smart Fitness Watch',
      brand: 'TechWear',
      category: 'Electronics',
      description: 'Advanced fitness tracker with heart rate, SpO2, GPS, and 14-day battery life.',
      price: 199.99,
      originalPrice: 279.99,
      rating: 4.4,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
      bestSeller: false,
      new: false,
      stock: 30,
      popularity: 85
    },
    {
      id: 12,
      name: 'Woven Straw Handbag',
      brand: 'Summer Breeze',
      category: 'Accessories',
      description: 'Handwoven natural straw bag with leather trim. Perfect for summer days.',
      price: 64.99,
      originalPrice: 89.99,
      rating: 4.3,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80',
      bestSeller: false,
      new: true,
      stock: 25,
      popularity: 74
    },
    {
      id: 13,
      name: 'Matte Lipstick Set',
      brand: 'Glow Lab',
      category: 'Beauty',
      description: 'Set of 6 long-lasting matte lipsticks in nude and berry tones. Cruelty-free.',
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.6,
      reviews: 445,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80',
      bestSeller: false,
      new: false,
      stock: 60,
      popularity: 80
    },
    {
      id: 14,
      name: 'Ceramic Coffee Maker',
      brand: 'HomeCraft',
      category: 'Home Decor',
      description: 'Artisan ceramic pour-over coffee set with carafe. Brew the perfect cup every time.',
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.5,
      reviews: 223,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&q=80',
      bestSeller: false,
      new: false,
      stock: 35,
      popularity: 72
    },
    {
      id: 15,
      name: 'Sunglasses Aviator',
      brand: 'Vogue Vision',
      category: 'Accessories',
      description: 'Classic aviator sunglasses with polarized UV400 lenses and gold-tone frame.',
      price: 89.99,
      originalPrice: 139.99,
      rating: 4.7,
      reviews: 356,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80',
      bestSeller: false,
      new: true,
      stock: 40,
      popularity: 83
    },
    {
      id: 16,
      name: 'Leather Chelsea Boots',
      brand: 'Artisan Leather',
      category: 'Shoes',
      description: 'Handcrafted Chelsea boots from premium Italian leather with elastic side panels.',
      price: 219.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&q=80',
      bestSeller: false,
      new: false,
      stock: 7,
      popularity: 79
    },
    {
      id: 17,
      name: 'Scented Candle Collection',
      brand: 'HomeCraft',
      category: 'Home Decor',
      description: 'Set of 3 soy wax candles in amber, vanilla, and lavender. 60-hour burn time each.',
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.4,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=400&q=80',
      bestSeller: false,
      new: true,
      stock: 50,
      popularity: 77
    },
    {
      id: 18,
      name: 'Chronograph Diver Watch',
      brand: 'Nordik Time',
      category: 'Watches',
      description: 'Water-resistant chronograph to 200m with ceramic bezel and luminous hands.',
      price: 349.99,
      originalPrice: 499.99,
      rating: 4.7,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80',
      bestSeller: false,
      new: false,
      stock: 6,
      popularity: 71
    },
    {
      id: 19,
      name: 'High-Waisted Yoga Leggings',
      brand: 'Velocity',
      category: 'Women\'s Fashion',
      description: 'Squat-proof high-waisted leggings with moisture-wicking fabric and hidden pocket.',
      price: 64.99,
      originalPrice: 84.99,
      rating: 4.6,
      reviews: 723,
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80',
      bestSeller: false,
      new: false,
      stock: 55,
      popularity: 84
    },
    {
      id: 20,
      name: 'Portable Bluetooth Speaker',
      brand: 'SonicPro',
      category: 'Electronics',
      description: 'Waterproof portable speaker with 360° sound, 20-hour battery, and built-in mic.',
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 934,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
      bestSeller: false,
      new: true,
      stock: 38,
      popularity: 88
    }
  ];

  // ============================================
  // CATEGORIES DATA
  // ============================================

  const categories = [
    { name: "Men's Fashion", image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80' },
    { name: "Women's Fashion", image: 'https://images.unsplash.com/photo-1581044777550-4cfa48907c73?w=400&q=80' },
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&q=80' },
    { name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80' },
    { name: 'Shoes', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80' },
    { name: 'Watches', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80' },
    { name: 'Home Decor', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80' }
  ];

  // ============================================
  // STATE
  // ============================================

  let cart = JSON.parse(localStorage.getItem('venu_cart')) || [];
  let wishlist = JSON.parse(localStorage.getItem('venu_wishlist')) || [];
  let currentCategory = 'all';
  let currentPrice = 'all';
  let currentRating = 'all';
  let currentSort = 'default';
  let searchQuery = '';

  // ============================================
  // DOM REFS
  // ============================================

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const dom = {};

  function cacheDoms() {
    dom.categoriesGrid = $('#categories-grid');
    dom.productsGrid = $('#products-grid');
    dom.newArrivalsGrid = $('#new-arrivals-grid');
    dom.bestSellersGrid = $('#best-sellers-grid');
    dom.cartCount = $('#cart-count');
    dom.wishlistCount = $('#wishlist-count');
    dom.cartSidebar = $('#cart-sidebar');
    dom.cartOverlay = $('#cart-overlay');
    dom.cartItems = $('#cart-items');
    dom.cartEmpty = $('#cart-empty');
    dom.cartFooter = $('#cart-footer');
    dom.cartTotal = $('#cart-total');
    dom.cartToggle = $('#cart-toggle');
    dom.cartClose = $('#cart-close');
    dom.wishlistSidebar = $('#wishlist-sidebar');
    dom.wishlistOverlay = $('#wishlist-overlay');
    dom.wishlistItems = $('#wishlist-items');
    dom.wishlistEmpty = $('#wishlist-empty');
    dom.wishlistToggle = $('#wishlist-toggle');
    dom.wishlistClose = $('#wishlist-close');
    dom.searchInput = $('#search-input');
    dom.searchOverlay = $('#search-overlay');
    dom.searchToggle = $('#search-toggle');
    dom.searchClose = $('#search-close');
    dom.filterCategory = $('#filter-category');
    dom.filterPrice = $('#filter-price');
    dom.filterRating = $('#filter-rating');
    dom.sortBy = $('#sort-by');
    dom.loginModal = $('#login-modal');
    dom.modalOverlay = $('#modal-overlay');
    dom.loginBtn = $('#login-btn');
    dom.modalClose = $('#modal-close');
    dom.hamburger = $('#hamburger-btn');
    dom.navMenu = $('#nav-menu');
    dom.navbar = $('#navbar');
    dom.scrollTopBtn = $('#scroll-top-btn');
    dom.loadingScreen = $('#loading-screen');
    dom.toastContainer = $('#toast-container');
    dom.quickviewModal = $('#quickview-modal');
    dom.quickviewBody = $('#quickview-body');
    dom.quickviewClose = $('#quickview-close');
    dom.countdown = { days: $('#count-days'), hours: $('#count-hours'), minutes: $('#count-minutes'), seconds: $('#count-seconds') };
    dom.newsletterForm = $('#newsletter-form');
    dom.newsletterEmail = $('#newsletter-email');
    dom.newsletterMessage = $('#newsletter-message');
    dom.contactForm = $('#contact-form');
    dom.loginForm = $('#login-form');
  }

  // ============================================
  // UTILITY
  // ============================================

  function formatPrice(n) { return '$' + n.toFixed(2); }

  function saveCart() { localStorage.setItem('venu_cart', JSON.stringify(cart)); }

  function saveWishlist() { localStorage.setItem('venu_wishlist', JSON.stringify(wishlist)); }

  function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = 'toast' + (type ? ' ' + type : '');
    toast.textContent = message;
    dom.toastContainer.appendChild(toast);
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3000);
  }

  function getStockClass(stock) {
    if (stock <= 0) return 'out';
    if (stock <= 10) return 'low';
    return '';
  }

  function getStockText(stock) {
    if (stock <= 0) return 'Out of Stock';
    if (stock <= 5) return 'Only ' + stock + ' left';
    if (stock <= 10) return 'Low Stock';
    return 'In Stock';
  }

  function getStarsHTML(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      const fill = i <= Math.round(rating) ? 'currentColor' : 'var(--color-border)';
      html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="' + fill + '" stroke="' + fill + '" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    }
    return html;
  }

  function getProductCardHTML(p) {
    const discount = Math.round((1 - p.price / p.originalPrice) * 100);
    const inWishlist = wishlist.includes(p.id);
    return `
      <div class="product-card" data-id="${p.id}" data-category="${p.category}" data-price="${p.price}" data-rating="${p.rating}" data-popularity="${p.popularity}">
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <div class="product-badges">
            ${discount > 0 ? '<span class="badge-discount">-' + discount + '%</span>' : ''}
            ${p.bestSeller ? '<span class="badge-bestseller">Best Seller</span>' : ''}
          </div>
          <button class="product-wishlist-btn${inWishlist ? ' active' : ''}" data-id="${p.id}" aria-label="Toggle wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <div class="product-actions">
            <button class="btn btn-add-cart" data-id="${p.id}">Add to Cart</button>
            <button class="btn btn-quick-view" data-id="${p.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-category">${p.category}</div>
          <div class="product-rating">
            <span class="stars">${getStarsHTML(p.rating)}</span>
            <span class="review-count">(${p.reviews})</span>
          </div>
          <div class="product-price">
            <span class="discounted-price">${formatPrice(p.price)}</span>
            ${p.originalPrice > p.price ? '<span class="original-price">' + formatPrice(p.originalPrice) + '</span>' : ''}
          </div>
          <div class="product-stock ${getStockClass(p.stock)}">${getStockText(p.stock)}</div>
        </div>
      </div>
    `;
  }

  // ============================================
  // RENDER
  // ============================================

  function renderCategories() {
    dom.categoriesGrid.innerHTML = categories.map(c => `
      <div class="category-card">
        <img src="${c.image}" alt="${c.name}" loading="lazy">
        <div class="category-overlay">
          <h3>${c.name}</h3>
          <span>Explore &rarr;</span>
        </div>
      </div>
    `).join('');
  }

  function getFilteredProducts() {
    let filtered = [...products];

    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }
    if (currentPrice !== 'all') {
      const [min, max] = currentPrice.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }
    if (currentRating !== 'all') {
      const minRating = parseInt(currentRating);
      filtered = filtered.filter(p => p.rating >= minRating);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }

    switch (currentSort) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'latest': filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0)); break;
      case 'popularity': filtered.sort((a, b) => b.popularity - a.popularity); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    }

    return filtered;
  }

  function renderProducts() {
    const filtered = getFilteredProducts();
    dom.productsGrid.innerHTML = filtered.length
      ? filtered.map(getProductCardHTML).join('')
      : '<p style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--color-text-light);font-size:1.1rem">No products found matching your criteria.</p>';

    if (searchQuery) {
      dom.productsGrid.querySelectorAll('.product-card').forEach(card => {
        const name = card.querySelector('.product-name').textContent.toLowerCase();
        if (name.includes(searchQuery.toLowerCase())) {
          card.classList.add('highlight');
        }
      });
    }
  }

  function renderNewArrivals() {
    const items = products.filter(p => p.new).slice(0, 4);
    dom.newArrivalsGrid.innerHTML = items.map(getProductCardHTML).join('');
  }

  function renderBestSellers() {
    const items = products.filter(p => p.bestSeller).slice(0, 4);
    dom.bestSellersGrid.innerHTML = items.map(getProductCardHTML).join('');
  }

  function renderCart() {
    dom.cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

    if (!cart.length) {
      dom.cartItems.style.display = 'none';
      dom.cartEmpty.style.display = 'flex';
      dom.cartFooter.style.display = 'none';
      return;
    }

    dom.cartItems.style.display = 'block';
    dom.cartEmpty.style.display = 'none';
    dom.cartFooter.style.display = 'flex';

    dom.cartItems.innerHTML = cart.map((item, index) => {
      const p = products.find(pr => pr.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name}" class="cart-item-img" loading="lazy">
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${formatPrice(p.price)}</div>
            <div class="cart-item-actions">
              <button class="qty-btn dec-qty" data-index="${index}">−</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn inc-qty" data-index="${index}">+</button>
              <button class="cart-item-remove" data-index="${index}">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const total = cart.reduce((sum, item) => {
      const p = products.find(pr => pr.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
    dom.cartTotal.textContent = formatPrice(total);
  }

  function renderWishlist() {
    dom.wishlistCount.textContent = wishlist.length;

    if (!wishlist.length) {
      dom.wishlistItems.style.display = 'none';
      dom.wishlistEmpty.style.display = 'flex';
      return;
    }

    dom.wishlistItems.style.display = 'block';
    dom.wishlistEmpty.style.display = 'none';

    dom.wishlistItems.innerHTML = wishlist.map(id => {
      const p = products.find(pr => pr.id === id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${p.name}" class="cart-item-img" loading="lazy">
          <div class="cart-item-info">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${formatPrice(p.price)}</div>
            <div class="cart-item-actions">
              <button class="btn btn-add-cart" data-id="${p.id}" style="flex:1;padding:8px 12px;font-size:0.8rem">Add to Cart</button>
              <button class="cart-item-remove remove-wishlist" data-id="${p.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderAll() {
    renderProducts();
    renderCart();
    renderWishlist();
  }

  function populateFilterCategories() {
    const cats = [...new Set(products.map(p => p.category))];
    dom.filterCategory.innerHTML = '<option value="all">All Categories</option>' +
      cats.map(c => '<option value="' + c + '">' + c + '</option>').join('');
  }

  // ============================================
  // QUICK VIEW
  // ============================================

  function openQuickView(id) {
    const p = products.find(pr => pr.id === id);
    if (!p) return;
    dom.quickviewBody.innerHTML = `
      <div class="qv-image">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="qv-info">
        <div class="qv-brand">${p.brand}</div>
        <div class="qv-name">${p.name}</div>
        <div class="qv-price">
          <span class="discounted-price">${formatPrice(p.price)}</span>
          ${p.originalPrice > p.price ? '<span class="original-price">' + formatPrice(p.originalPrice) + '</span>' : ''}
        </div>
        <div class="product-rating">
          <span class="stars">${getStarsHTML(p.rating)}</span>
          <span class="review-count">(${p.reviews} reviews)</span>
        </div>
        <div class="qv-desc">${p.description}</div>
        <div class="product-stock ${getStockClass(p.stock)}" style="margin-top:auto">${getStockText(p.stock)}</div>
        <div class="qv-actions">
          <button class="btn btn-primary" style="flex:1" data-id="${p.id}" id="qv-add-cart">Add to Cart</button>
          <button class="btn btn-secondary" data-id="${p.id}" id="qv-wishlist">${wishlist.includes(p.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</button>
        </div>
      </div>
    `;
    dom.quickviewModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    dom.quickviewBody.querySelector('#qv-add-cart').addEventListener('click', function () {
      addToCart(p.id);
      showToast(p.name + ' added to cart!', 'success');
    });
    dom.quickviewBody.querySelector('#qv-wishlist').addEventListener('click', function () {
      toggleWishlist(p.id);
      this.textContent = wishlist.includes(p.id) ? 'Remove from Wishlist' : 'Add to Wishlist';
    });
  }

  // ============================================
  // CART
  // ============================================

  function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, qty: 1 });
    }
    saveCart();
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  }

  function updateQty(index, delta) {
    if (cart[index]) {
      cart[index].qty = Math.max(1, cart[index].qty + delta);
      saveCart();
      renderCart();
    }
  }

  // ============================================
  // WISHLIST
  // ============================================

  function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
      wishlist.splice(idx, 1);
    } else {
      wishlist.push(id);
    }
    saveWishlist();
    renderAll();
  }

  // ============================================
  // EVENT HANDLING (Delegation)
  // ============================================

  function setupDelegatedEvents() {
    // Add to Cart (global)
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-add-cart');
      if (btn && btn.dataset.id) {
        const id = parseInt(btn.dataset.id);
        addToCart(id);
        showToast(products.find(p => p.id === id).name + ' added to cart!', 'success');
      }
    });

    // Wishlist toggle
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.product-wishlist-btn');
      if (btn && btn.dataset.id) {
        const id = parseInt(btn.dataset.id);
        toggleWishlist(id);
        const inWishlist = wishlist.includes(id);
        btn.classList.toggle('active', inWishlist);
        btn.querySelector('svg').setAttribute('fill', inWishlist ? 'currentColor' : 'none');
        showToast(inWishlist ? 'Added to wishlist!' : 'Removed from wishlist');
      }
    });

    // Quick View
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn-quick-view');
      if (btn && btn.dataset.id) {
        const id = parseInt(btn.dataset.id);
        openQuickView(id);
      }
    });

    // Cart qty
    dom.cartItems.addEventListener('click', function (e) {
      const dec = e.target.closest('.dec-qty');
      const inc = e.target.closest('.inc-qty');
      const remove = e.target.closest('.cart-item-remove');
      if (dec && dec.dataset.index !== undefined) updateQty(parseInt(dec.dataset.index), -1);
      if (inc && inc.dataset.index !== undefined) updateQty(parseInt(inc.dataset.index), 1);
      if (remove && !remove.classList.contains('remove-wishlist') && remove.dataset.index !== undefined) {
        removeFromCart(parseInt(remove.dataset.index));
      }
    });

    // Wishlist remove
    dom.wishlistItems.addEventListener('click', function (e) {
      const remove = e.target.closest('.remove-wishlist');
      if (remove && remove.dataset.id) {
        const id = parseInt(remove.dataset.id);
        toggleWishlist(id);
        renderAll();
      }
    });
  }

  // ============================================
  // UI CONTROLS
  // ============================================

  function setupUI() {
    // Cart toggle
    dom.cartToggle.addEventListener('click', function () {
      dom.cartSidebar.classList.add('active');
      dom.cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    function closeCart() {
      dom.cartSidebar.classList.remove('active');
      dom.cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    dom.cartClose.addEventListener('click', closeCart);
    dom.cartOverlay.addEventListener('click', closeCart);

    // Wishlist toggle
    dom.wishlistToggle.addEventListener('click', function () {
      dom.wishlistSidebar.classList.add('active');
      dom.wishlistOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    function closeWishlist() {
      dom.wishlistSidebar.classList.remove('active');
      dom.wishlistOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    dom.wishlistClose.addEventListener('click', closeWishlist);
    dom.wishlistOverlay.addEventListener('click', closeWishlist);

    // Search overlay
    dom.searchToggle.addEventListener('click', function () {
      dom.searchOverlay.classList.add('active');
      dom.searchInput.focus();
      document.body.style.overflow = 'hidden';
    });
    function closeSearch() {
      dom.searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
      dom.searchInput.value = '';
      searchQuery = '';
      renderProducts();
    }
    dom.searchClose.addEventListener('click', closeSearch);
    dom.searchOverlay.addEventListener('click', function (e) {
      if (e.target === dom.searchOverlay) closeSearch();
    });

    // Search input
    dom.searchInput.addEventListener('input', function () {
      searchQuery = this.value.trim();
      renderProducts();
    });

    // Filters
    dom.filterCategory.addEventListener('change', function () {
      currentCategory = this.value;
      renderProducts();
    });
    dom.filterPrice.addEventListener('change', function () {
      currentPrice = this.value;
      renderProducts();
    });
    dom.filterRating.addEventListener('change', function () {
      currentRating = this.value;
      renderProducts();
    });
    dom.sortBy.addEventListener('change', function () {
      currentSort = this.value;
      renderProducts();
    });

    // Login modal
    dom.loginBtn.addEventListener('click', function () {
      dom.loginModal.classList.add('active');
      dom.modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    function closeLogin() {
      dom.loginModal.classList.remove('active');
      dom.modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    dom.modalClose.addEventListener('click', closeLogin);
    dom.modalOverlay.addEventListener('click', closeLogin);

    // Login form
    dom.loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Welcome back! You are now signed in.', 'success');
      closeLogin();
    });

    // Hamburger menu
    dom.hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      dom.navMenu.classList.toggle('active');
      document.body.style.overflow = dom.navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    dom.navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function () {
        dom.hamburger.classList.remove('active');
        dom.navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Navbar scroll
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY > 50;
      dom.navbar.classList.toggle('scrolled', scrolled);
      dom.scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });

    // Scroll to top
    dom.scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Newsletter
    dom.newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = dom.newsletterEmail.value.trim();
      if (!email || !email.includes('@') || !email.includes('.')) {
        dom.newsletterMessage.textContent = 'Please enter a valid email address.';
        dom.newsletterMessage.className = 'newsletter-message error';
        return;
      }
      dom.newsletterMessage.textContent = 'Thank you for subscribing! Check your inbox.';
      dom.newsletterMessage.className = 'newsletter-message success';
      dom.newsletterEmail.value = '';
    });

    // Contact form
    dom.contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Message sent! We will get back to you soon.', 'success');
      this.reset();
    });

    // Quick view close
    dom.quickviewClose.addEventListener('click', function () {
      dom.quickviewModal.classList.remove('active');
      document.body.style.overflow = '';
    });
    dom.quickviewModal.addEventListener('click', function (e) {
      if (e.target === dom.quickviewModal) {
        dom.quickviewModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ============================================
  // COUNTDOWN TIMER
  // ============================================

  function startCountdown() {
    const end = new Date();
    end.setDate(end.getDate() + 14);
    end.setHours(23, 59, 59, 0);

    function update() {
      const diff = end - new Date();
      if (diff <= 0) return;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      dom.countdown.days.textContent = String(d).padStart(2, '0');
      dom.countdown.hours.textContent = String(h).padStart(2, '0');
      dom.countdown.minutes.textContent = String(m).padStart(2, '0');
      dom.countdown.seconds.textContent = String(s).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
  }

  // ============================================
  // SCROLL REVEAL
  // ============================================

  function setupReveal() {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // ============================================
  // BUTTON RIPPLE
  // ============================================

  function setupRipple() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  }

  // ============================================
  // NAVBAR ACTIVE LINK
  // ============================================

  function setupActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
      });
    });
  }

  // ============================================
  // INIT
  // ============================================

  function init() {
    cacheDoms();
    renderCategories();
    populateFilterCategories();
    renderProducts();
    renderNewArrivals();
    renderBestSellers();
    renderCart();
    renderWishlist();
    setupDelegatedEvents();
    setupUI();
    startCountdown();
    setupReveal();
    setupRipple();
    setupActiveLink();

    // Hide loading screen
    setTimeout(function () {
      dom.loadingScreen.classList.add('hidden');
    }, 600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
