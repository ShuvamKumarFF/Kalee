document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("nav ul li:not(:nth-child(1)):not(:nth-child(2)) a");

    sections.forEach(section => {
        section.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Determine which section was clicked
            const sectionName = this.textContent;

            // Update the table with links for the corresponding section
            updateTable(sectionName);

            // Update the section heading
            document.getElementById("section-heading").textContent = sectionName;
        });
    });

    function updateTable(sectionName) {
        const table2022 = document.getElementById("link2022");
        const table2023 = document.getElementById("link2023");

        // Clear previous content
        table2022.textContent = "";
        table2023.textContent = "";

        // Dummy data for now, replace with actual links and their corresponding text
        let links2022 = [];
        let text2022 = [];
        let links2023 = [];
        let text2023 = [];

        // Populate links and their text based on section
        if (sectionName === "English") {
            links2022 = ["https://example.com/english/1", "https://example.com/english/2", "https://example.com/english/3"];
            text2022 = ["English Topic 1", "English Topic 2", "English Topic 3"];
            links2023 = ["https://example.com/english/4", "https://example.com/english/5", "https://example.com/english/6"];
            text2023 = ["English Topic 4", "English Topic 5", "English Topic 6"];
        } else if (sectionName === "General Test") {
            // Populate links and text for General Test section...
        } else if (sectionName === "Geography") {
            // Populate links and text for Geography section...
        } else if (sectionName === "Fine Arts") {
            // Populate links and text for Fine Arts section...
        } else if (sectionName === "EVS") {
            // Populate links and text for EVS section...
        }
        // Add conditions for other sections...

        // Populate table with links and text for both years
        populateTable(table2022, links2022, text2022);
        populateTable(table2023, links2023, text2023);
    }

    function populateTable(table, links, text) {
        // Populate table with links and text for both years
        for (let i = 0; i < links.length; i++) {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = text[i];
            row.appendChild(cell);
            table.appendChild(row);
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("nav ul li:not(:nth-child(1)):not(:nth-child(2)) a");

    sections.forEach(section => {
        section.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Determine which section was clicked
            const sectionName = this.textContent;

            // Update the table with links for the corresponding section
            updateTable(sectionName);

            // Update the section heading
            document.getElementById("section-heading").textContent = sectionName;
        });
    });

    function updateTable(sectionName) {
        // Dummy data for now, replace with actual links and their corresponding text
        let links2022 = [];
        let text2022 = [];
        let links2023 = [];
        let text2023 = [];

        // Populate links and their text based on section
        if (sectionName === "English") {
            links2022 = ["https://example.com/english2022/1", "https://example.com/english2022/2", "https://example.com/english2022/3"];
            text2022 = ["English Topic 2022-1", "English Topic 2022-2", "English Topic 2022-3"];
            links2023 = ["https://example.com/english2023/1", "https://example.com/english2023/2", "https://example.com/english2023/3"];
            text2023 = ["English Topic 2023-1", "English Topic 2023-2", "English Topic 2023-3"];
        } else if (sectionName === "General Test") {
            links2022 = ["https://example.com/generaltest2022/1", "https://example.com/generaltest2022/2", "https://example.com/generaltest2022/3"];
            text2022 = ["General Test Topic 2022-1", "General Test Topic 2022-2", "General Test Topic 2022-3"];
            links2023 = ["https://example.com/generaltest2023/1", "https://example.com/generaltest2023/2", "https://example.com/generaltest2023/3"];
            text2023 = ["General Test Topic 2023-1", "General Test Topic 2023-2", "General Test Topic 2023-3"];
        } else if (sectionName === "Geography") {
            links2022 = ["https://example.com/geography2022/1", "https://example.com/geography2022/2", "https://example.com/geography2022/3"];
            text2022 = ["Geography Topic 2022-1", "Geography Topic 2022-2", "Geography Topic 2022-3"];
            links2023 = ["https://example.com/geography2023/1", "https://example.com/geography2023/2", "https://example.com/geography2023/3"];
            text2023 = ["Geography Topic 2023-1", "Geography Topic 2023-2", "Geography Topic 2023-3"];
        } else if (sectionName === "Fine Arts") {
            links2022 = ["https://example.com/finearts2022/1", "https://example.com/finearts2022/2", "https://example.com/finearts2022/3"];
            text2022 = ["Fine Arts Topic 2022-1", "Fine Arts Topic 2022-2", "Fine Arts Topic 2022-3"];
            links2023 = ["https://example.com/finearts2023/1", "https://example.com/finearts2023/2", "https://example.com/finearts2023/3"];
            text2023 = ["Fine Arts Topic 2023-1", "Fine Arts Topic 2023-2", "Fine Arts Topic 2023-3"];
        } else if (sectionName === "EVS") {
            links2022 = ["https://example.com/evs2022/1", "https://example.com/evs2022/2", "https://example.com/evs2022/3"];
            text2022 = ["EVS Topic 2022-1", "EVS Topic 2022-2", "EVS Topic 2022-3"];
            links2023 = ["https://example.com/evs2023/1", "https://example.com/evs2023/2", "https://example.com/evs2023/3"];
            text2023 = ["EVS Topic 2023-1", "EVS Topic 2023-2", "EVS Topic 2023-3"];
        }
        // Add conditions for other sections...

        // Populate table with links and text for both years
        populateTable("link2022", text2022);
        populateTable("link2023", text2023);
    }

    function populateTable(tableId, text) {
        // Populate table cells with text for the specified section
        const cells = document.querySelectorAll(`#${tableId} td`);
        text.forEach((textContent, index) => {
            cells[index].textContent = textContent;
        });
    }
});
