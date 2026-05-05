// Grab the elements we need
    var form = document.getElementById("animeForm");
    var input = document.getElementById("animeInput");
    var result = document.getElementById("result");

    // Listen for when the form is submitted
    form.addEventListener("submit", function(event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Get what the user typed
        var animeTitle = input.value;

        // Check if they actually typed something
        if (animeTitle == "") {
            result.textContent = "Please enter an anime!";
        } else {
            result.textContent = "Your favorite anime is: " + animeTitle;

            // Clear the input box after submitting
            input.value = "";
        }
    });