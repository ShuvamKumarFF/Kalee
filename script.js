document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("nav ul li:not(:nth-child(1)):not(:nth-child(2)) a");

  sections.forEach(section => {
    section.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Determine which section was clicked
      const sectionName = this.textContent;

      // Update the table with links for the corresponding section
      updateTable(sectionName);
    });
  });

  function updateTable(sectionName) {
    const table = document.querySelector("#main-content table tbody");

    // Clear previous content
    table.innerHTML = "";

    // Dummy data for now, replace with actual links
    const links2022 = ["Link 1", "Link 2", "Link 3"]; // Example links for 2022
    const links2023 = ["Link 4", "Link 5", "Link 6"]; // Example links for 2023

    // Populate table with links for both years
    for (let i = 0; i < links2022.length || i < links2023.length; i++) {
      const row = document.createElement("tr");
      const cell2022 = document.createElement("td");
      const cell2023 = document.createElement("td");

      // Add links for 2022
      if (i < links2022.length) {
        const link2022 = document.createElement("a");
        link2022.href = links2022[i];
        link2022.textContent = links2022[i];
        cell2022.appendChild(link2022);
      }

      // Add links for 2023
      if (i < links2023.length) {
        const link2023 = document.createElement("a");
        link2023.href = links2023[i];
        link2023.textContent = links2023[i];
        cell2023.appendChild(link2023);
      }

      // Append cells to row
      row.appendChild(cell2022);
      row.appendChild(cell2023);

      // Append row to table
      table.appendChild(row);
    }
  }
});
