const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");


searchButton.addEventListener("click", function () {

    const query = searchInput.value.trim();

    if (query === "") {
        results.innerHTML = `
            <p>Please enter something to search.</p>
        `;
        return;
    }


    results.innerHTML = `
        <h3>Searching Modium...</h3>
        <p>You searched for: <strong>${query}</strong></p>
        <p>Search engine connection coming soon.</p>
    `;

});


searchInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchButton.click();
    }

});
