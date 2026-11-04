/**
 * BUNORA – Product Details & Menu Item Interactivity
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- Thumbnail Switcher ---
  var mainProductImg = document.getElementById('mainProductImage');
  var thumbs = document.querySelectorAll('.product-thumb-item');

  if (mainProductImg && thumbs.length > 0) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        var newSrc = this.getAttribute('data-img');
        if (newSrc) {
          mainProductImg.src = newSrc;
        }
      });
    });
  }

  // --- Quantity & Addon Price Calculation ---
  var qtyInput = document.getElementById('productQty');
  var qtyMinus = document.getElementById('qtyMinus');
  var qtyPlus = document.getElementById('qtyPlus');
  var priceDisplay = document.getElementById('productTotalPrice');
  var addonCheckboxes = document.querySelectorAll('.addon-checkbox');
  var basePriceEl = document.getElementById('productBasePrice');

  function calculateTotal() {
    if (!priceDisplay || !basePriceEl) return;
    var basePrice = parseFloat(basePriceEl.getAttribute('data-price') || '14.90');
    var qty = parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;

    var addonsTotal = 0;
    addonCheckboxes.forEach(function (cb) {
      if (cb.checked) {
        addonsTotal += parseFloat(cb.getAttribute('data-price') || '0');
      }
    });

    var total = (basePrice + addonsTotal) * qty;
    priceDisplay.textContent = '$' + total.toFixed(2);
  }

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', function () {
      var current = parseInt(qtyInput.value, 10) || 1;
      if (current > 1) {
        qtyInput.value = current - 1;
        calculateTotal();
      }
    });

    qtyPlus.addEventListener('click', function () {
      var current = parseInt(qtyInput.value, 10) || 1;
      if (current < 99) {
        qtyInput.value = current + 1;
        calculateTotal();
      }
    });

    qtyInput.addEventListener('change', function () {
      var val = parseInt(qtyInput.value, 10);
      if (isNaN(val) || val < 1) qtyInput.value = 1;
      calculateTotal();
    });
  }

  if (addonCheckboxes.length > 0) {
    addonCheckboxes.forEach(function (cb) {
      cb.addEventListener('change', calculateTotal);
    });
  }

  // Initial calculation
  calculateTotal();

  // --- Add to Cart / Order Toast Simulation ---
  var addToOrderBtn = document.getElementById('addToOrderBtn');
  var orderToast = document.getElementById('orderToast');

  if (addToOrderBtn) {
    addToOrderBtn.addEventListener('click', function () {
      var originalText = addToOrderBtn.innerHTML;
      addToOrderBtn.disabled = true;
      addToOrderBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added to Order!';

      if (orderToast && window.bootstrap) {
        var toastInstance = new bootstrap.Toast(orderToast);
        toastInstance.show();
      }

      setTimeout(function () {
        addToOrderBtn.disabled = false;
        addToOrderBtn.innerHTML = originalText;
      }, 2000);
    });
  }
});
