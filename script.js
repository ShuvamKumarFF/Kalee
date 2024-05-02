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
