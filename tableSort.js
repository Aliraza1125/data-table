document.addEventListener("DOMContentLoaded", function() {
    const sortSelect = document.getElementById("sortName");
    const tableBody = document.querySelector("table.data-table tbody");
    let rows = Array.from(tableBody.querySelectorAll("tr"));
    const defaultTableHtml = tableBody.innerHTML;
  
    sortSelect.addEventListener("change", function() {
      const sortBy = sortSelect.value;
      if (sortBy === "byId") {
        sortById();
      } else if (sortBy === "byPrice") {
        sortByPrice();
      }
      else if(sortBy==="default")
      {
        resetTable();
      }
    });
  
    function sortById() {
      rows.sort((a, b) => {
        const idA = parseInt(a.querySelector("td:nth-child(2)").textContent);
        const idB = parseInt(b.querySelector("td:nth-child(2)").textContent);
        return idA - idB;
      });
      reorderRows();
    }
  
    function sortByPrice() {
      rows.sort((a, b) => {
        const priceA = parseFloat(a.querySelector("td:nth-child(8)").textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector("td:nth-child(8)").textContent.replace('$', ''));
        return priceA - priceB;
      });
      reorderRows();
    }
  

    function reorderRows() {
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
      rows.forEach(row => {
        tableBody.appendChild(row);
      });
    }

    function resetTable() {
        tableBody.innerHTML = defaultTableHtml;
      }
  });
  