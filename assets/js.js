//Automobile button array
var buttonName = ["Honda", "Toyota", "Ferrari", "Lamborghini", "Acura", "Nissan", "Lexus", "Mercedes", "BMW"];

//Display function renders html to display gifs
function displayGif() {

	var name = $(this).attr("bttn-row");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ name + "&api_key=dc6zaTOxFJmzC&limit=15"
	
// Ajax call for specific giphy data 
$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
	console.log(response);
	var results = response.data;

//Looping through giphy results after button is clicked
	for (var i = 0; i < results.length; i++) {
		var gifDiv = $("<div class='img-thumbnail'>");

		var rating = results[i].rating;

		var pTag = $("<center><p>").text("Rating: " + rating);

		var gifImage = $("<img class='data-still'>");
		gifImage.attr("src", results[i].images.fixed_height.url);

		gifDiv.prepend(pTag);
		gifDiv.prepend(gifImage);

		$("#giphyDrop").prepend(gifDiv)
	}
	});

}

//function for displaying buttons
function renderButtons() {

//Deletes buttons prior to adding new buttons	
	$("#buttonDrop").empty();

//Loops through array of automobiles	
	for (var i = 0; i < buttonName.length; i++) {
	
	var a = $("<button>");
      
	  a.addClass("name");
	  
	  a.attr("bttn-row", buttonName[i]);
	  
	  a.text(buttonName[i]);
	  
	  $("#buttonDrop").append(a);
	}
 }

//Add button to array function
$(".input-group-btn").on("click", function(event) {
	event.preventDefault();

	var name = $("#mySubmit").val().trim();

	buttonName.push(name)
	console.log(name);

	renderButtons();
	
});

//Click event assigned to class .name user creates to display Gif
$(document).on("click", ".name", displayGif);

//Displays initial buttons
renderButtons();

$(".img").on("click", function() {
   
      var state = $(this).attr("data-state")


      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
      }
    });
  




	




