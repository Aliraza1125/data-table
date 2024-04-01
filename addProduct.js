function displayModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function addProductToTable(productDetails) {
  const tbody = document.getElementById("table-body");
  const row = document.createElement("tr");
  row.innerHTML = `
      <td><input type="checkbox"></td>
      <td>${productDetails.id}</td>
      <td>${productDetails.productName}</td>
      <td>${productDetails.productTitle}</td>
      <td>${productDetails.productDescription}</td>
      <td>${productDetails.productVendor}</td>
      <td>${productDetails.inStock}</td>
      <td>${productDetails.buyingPrice}</td>
      <td>${productDetails.salePrice}</td>
      <td>${productDetails.purchaseQuantity}</td>
      <td>${productDetails.productType}</td>
      <td>${productDetails.shippingRates}</td>
      <td>${productDetails.refillLimit}</td>
      <td>${productDetails.productLocationAddress}</td>
      <td style="display: flex" >
 
 
        <button class="button-edit-product"><i class="fas fa-edit"></i> Edit</button>
        <button class="button-delete-product"><i class="fas fa-trash-alt"></i> Delete</button>

</td>

    `;
  tbody.appendChild(row);
}

document.getElementById("addProduct").addEventListener("click", displayModal);

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", closeModal);

document
  .getElementById("product-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const productDetails = {
      id: document.getElementById("product-id").value,
      productName: document.getElementById("product-name").value,
      productTitle: document.getElementById("product-title").value,
      productDescription: document.getElementById("product-description").value,
      productVendor: document.getElementById("product-vendor").value,
      inStock: document.getElementById("in-stock").value,
      buyingPrice: document.getElementById("buying-price").value,
      salePrice: document.getElementById("sale-price").value,
      purchaseQuantity: document.getElementById("purchase-quantity").value,
      productType: document.getElementById("product-type").value,
      shippingRates: document.getElementById("shipping-rates").value,
      refillLimit: document.getElementById("refill-limit").value,
      productLocationAddress: document.getElementById(
        "product-location-address"
      ).value,
    };

    addProductToTable(productDetails);

    document.getElementById("product-form").reset();

    closeModal();
  });
