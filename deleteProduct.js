function deleteProductRow(productId) {
    const productRow = document.querySelector(`tr[data-id="${productId}"]`);

    if (productRow) {
        productRow.remove();
    } else {
        console.error(`Product with ID ${productId} not found.`);
    }
}

document.querySelectorAll(".button-delete-product").forEach(button => {
    button.addEventListener("click", function() {
        const productId = this.closest("tr").dataset.id;
        deleteProductRow(productId);
    });
});
