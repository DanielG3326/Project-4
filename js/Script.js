     var form = document.getElementById("animeForm");
     var input = document.getElementById("animeInput");
     var result = document.getElementById("result");
    
    form.addEventListener("submit", function(event) {

        event.preventDefault();

            var animeTitle = input.value;
        
        if (animeTitle == "") {
            result.textContent = "Please enter an anime!";
        } else {
            result.textContent = "Your favorite anime is: " + animeTitle;

            input.value = "";
        }
    });