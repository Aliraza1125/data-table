
  function openEditModal(prodId) {
   
       const productRow = document.querySelector(`tr[data-id="${prodId}"]`);
       console.log(`Product Row: ${productRow}`);
       if (!productRow) {
           console.error(`Product with ID ${prodId} not found.`);
           return;
       }

    const productId = productRow.cells[1].textContent;
    const productName = productRow.cells[2].textContent;
    const productTitle = productRow.cells[3].textContent;
    const productDescription = productRow.cells[4].textContent;
    const productVendor = productRow.cells[5].textContent;
    const inStock = productRow.cells[6].textContent;
    const buyingPrice = productRow.cells[7].textContent;
    const salePrice = productRow.cells[8].textContent;
    const purchaseQuantity = productRow.cells[9].textContent;
    const productType = productRow.cells[10].textContent;
    const shippingRates = productRow.cells[11].textContent;
    const refillLimit = productRow.cells[12].textContent;
    const productLocationAddress = productRow.cells[13].textContent;

    document.getElementById("edit-product-name").value = productName;
    document.getElementById("edit-product-id").value = productId;
    document.getElementById("edit-product-title").value = productTitle;
    document.getElementById("edit-product-description").value = productDescription;
    document.getElementById("edit-product-vendor").value = productVendor;
    document.getElementById("edit-in-stock").value = inStock;
    document.getElementById("edit-buying-price").value = buyingPrice;
    document.getElementById("edit-sale-price").value = salePrice;
    document.getElementById("edit-purchase-quantity").value = purchaseQuantity;
    document.getElementById("edit-product-type").value = productType;
    document.getElementById("edit-shipping-rates").value = shippingRates;
    document.getElementById("edit-refill-limit").value = refillLimit;
    document.getElementById("edit-product-location-address").value = productLocationAddress;

    const modal = document.getElementById("editModal");
    modal.style.display = "block";

    document.getElementById("edit-product-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      
      const updatedProductName = document.getElementById("edit-product-name").value;
      const updatedProductId = document.getElementById("edit-product-id").value;
      const updatedProductTitle = document.getElementById("edit-product-title").value;
      const updatedProductDescription = document.getElementById("edit-product-description").value;
      const updatedProductVendor = document.getElementById("edit-product-vendor").value;
      const updatedInStock = document.getElementById("edit-in-stock").value;
      const updatedBuyingPrice = document.getElementById("edit-buying-price").value;
      const updatedSalePrice = document.getElementById("edit-sale-price").value;
      const updatedPurchaseQuantity = document.getElementById("edit-purchase-quantity").value;
      const updatedProductType = document.getElementById("edit-product-type").value;
      const updatedShippingRates = document.getElementById("edit-shipping-rates").value;
      const updatedRefillLimit = document.getElementById("edit-refill-limit").value;
      const updatedProductLocationAddress = document.getElementById("edit-product-location-address").value;

      productRow.cells[2].textContent = updatedProductName;
      productRow.cells[3].textContent = updatedProductTitle;
      productRow.cells[4].textContent = updatedProductDescription;
      productRow.cells[5].textContent = updatedProductVendor;
      productRow.cells[6].textContent = updatedInStock;
      productRow.cells[7].textContent = updatedBuyingPrice;
      productRow.cells[8].textContent = updatedSalePrice;
      productRow.cells[9].textContent = updatedPurchaseQuantity;
      productRow.cells[10].textContent = updatedProductType;
      productRow.cells[11].textContent = updatedShippingRates;
      productRow.cells[12].textContent = updatedRefillLimit;
      productRow.cells[13].textContent = updatedProductLocationAddress;

      modal.style.display = "none";
    });
  }

document.querySelectorAll(".button-edit-product").forEach(button => {
    button.addEventListener("click", function() {
        const productId = this.closest("tr").dataset.id;
        openEditModal(productId);
    });
});


  document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function() {
      const modal = this.closest(".modal");
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });

