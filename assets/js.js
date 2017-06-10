var buttonName = ["Honda", "Toyota", "Ferrari", "Lamborghini", "Acura", "Nissan", "Lexus", "Mercedes", "BMW"];

$("#buttonDrop").empty();
for (var i = 0; i < buttonName.length; i++) {
	var usrButton = $("<button class='bttn-row'>" + buttonName[i] + "</button>");

	$("#buttonDrop").append(usrButton);
}


$(".bttn-row").on("click", function displayGif() {

	// Api key for gif URL
var name = $(this).text();
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ name + "&api_key=dc6zaTOxFJmzC&limit=10"
	
	// Ajax call for giphy data 
$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
	console.log(response);
	var results = response.data;

	for (var i = 0; i < results.length; i++) {
		var gifDiv = $("<div class='item'>");

		var rating = results[i].rating;

		var pTag = $("<p>").text("Rating: " + rating);

		var gifImage = $("<img>");
		gifImage.attr("src", results[i].images.fixed_height.url);

		gifDiv.prepend(pTag);
		gifDiv.prepend(gifImage);

		$("#giphyDrop").prepend(gifDiv)
	}
	});
});

	function renderButtons() {

		$("#buttonDrop").empty();

        
        for (var i = 0; i < buttonName.length; i++) {

          var a = $("<button class='bttn-row'>" + buttonName[i] + "</button>");
          
          a.addClass("name");
          
          a.attr("bttn-row", buttonName[i]);
          
          a.text(buttonName[i]);
          
          $("#buttonDrop").append(a);
      }
     }


$(".input-group-btn").on("click", function(event) {
	event.preventDefault();

	var name = $("#mySubmit").val().trim();

	buttonName.push(name);

	renderButtons();


});

