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

        // Dummy data for now, replace with actual links
        let links2022 = [];
        let links2023 = [];
        let text1 = [];
        let text2 = [];

        // Populate links based on section
        if (sectionName === "English") {
            links2022 = ["English Link 1", "English Link 2", "English Link 3"];
            links2023 = ["English Link 4", "English Link 5", "English Link 6"];
            text1 = ["English Link 1", "English Link 2", "English Link 3"];
            text2 = ["English Link 4", "English Link 5", "English Link 6"];
        } else if (sectionName === "General Test") {
            links2022 = ["gt link 1", "General Test Link 2", "General Test Link 3"];
            links2023 = ["https://cdn.shopify.com/s/files/1/0572/7299/1924/files/CUET_UG_2023_-_GT_Paper_-_24th_May_2023.pdf?v=1698238388", "General Test Link 5", "General Test Link 6"];
            text1 = [GT 1,GT 2,GT 3];
            text2 = [24th May,GT 5,GT 6];
        } else if (sectionName === "Geography") {
            links2022 = ["Geography Link 1", "Geography Link 2", "Geography Link 3"];
            links2023 = ["Geography Link 4", "Geography Link 5", "Geography Link 6"];
            text1 = ["Geography Link 1", "Geography Link 2", "Geography Link 3"];
            text2 = ["Geography Link 4", "Geography Link 5", "Geography Link 6"];
        } else if (sectionName === "Fine Arts") {
            links2022 = ["Fine Arts Link 1", "Fine Arts Link 2", "Fine Arts Link 3"];
            links2023 = ["Fine Arts Link 4", "Fine Arts Link 5", "Fine Arts Link 6"];
            text1 = ["Fine Arts Link 1", "Fine Arts Link 2", "Fine Arts Link 3"];
            text2 = ["Fine Arts Link 4", "Fine Arts Link 5", "Fine Arts Link 6"];
        } else if (sectionName === "EVS") {
            links2022 = ["EVS Link 1", "EVS Link 2", "EVS Link 3"];
            links2023 = ["EVS Link 4", "EVS Link 5", "EVS Link 6"];
            text1 = ["EVS Link 1", "EVS Link 2", "EVS Link 3"];
            text2 = ["EVS Link 4", "EVS Link 5", "EVS Link 6"];
        }
        // Add conditions for other sections...

        // Populate table with links for both years
        for (let i = 0; i < links2022.length || i < links2023.length; i++) {
            // Add links for 2022
            if (i < links2022.length) {
                const link2022 = document.createElement("a");
                link2022.href = links2022[i];
                link2022.textContent = text1[i];
                table2022.appendChild(link2022);
                table2022.appendChild(document.createElement("br")); // Add line break after each link
            }

            // Add links for 2023
            if (i < links2023.length) {
                const link2023 = document.createElement("a");
                link2023.href = links2023[i];
                link2023.textContent = text2[i];
                table2023.appendChild(link2023);
                table2023.appendChild(document.createElement("br")); // Add line break after each link
            }
        }
    }
});
