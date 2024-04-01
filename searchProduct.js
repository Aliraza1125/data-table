document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const table = document.querySelector(".data-table");
  
    // Event listener for Search button
    searchButton.addEventListener("click", function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      filterProducts(searchTerm);
    });
  
    // Function to filter product rows based on search input
    function filterProducts(searchTerm) {
      const dataRows = table.querySelectorAll("tbody tr");
      dataRows.forEach(row => {
        const productName = row.querySelector("td:nth-child(3)").textContent.toLowerCase(); // Assuming product name is in the 3rd column
        if (productName.includes(searchTerm)) {
          row.style.display = "table-row";
        } else {
          row.style.display = "none";
        }
      });
    }
  });
  