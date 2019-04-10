//Automobile button array
let buttonName = ["Jamaica", "Travi$Scott", "Ferrari", "4K", "Goku", "Cookies", "Adidas", "Xbox", "Google"];

//Display function renders html to display gifs
function displayGif() {

	let name = $(this).attr("bttn-row");
	let queryURL = "https://api.giphy.com/v1/gifs/search?q="+ name + "&api_key=dc6zaTOxFJmzC&limit=25"
	
// Ajax call for specific giphy data 
$.ajax({
	url: queryURL,
	method: "GET"
}).done((response)=> {
	console.log(response);
	let results = response.data.sort(() => Math.random() - 0.5);

//Looping through giphy results after button is clicked
	for (let i = 20; i < results.length; i++) {

		let gifDiv = $("<div class='img-thumbnail'>");

		let rating = results[i].rating;

		let pTag = $("<center><p>").text("Rating: " + rating);

		let gifImage = $("<img class='still'>");
		gifImage.attr("src", results[i].images.fixed_height.url);

		gifDiv.prepend(pTag);
		gifDiv.prepend(gifImage);

		$("#giphyDrop").prepend(gifDiv)
	}
	});

}

//function for displaying buttons
let renderButtons = ()=> {

//Deletes buttons prior to adding new buttons	
	$("#buttonDrop").empty();

//Loops through array of automobiles	
	for (let i = 0; i < buttonName.length; i++) {
	
	let a = $("<button>");
      
	  a.addClass("name");
	  
	  a.attr("bttn-row", buttonName[i]);
	  
	  a.text(buttonName[i]);
	  
	  $("#buttonDrop").append(a);
	}
 }

//Add button to array function
$(".input-group-btn").on("click", (event) => {
	event.preventDefault();

	let name = $("#mySubmit").val().trim();

	buttonName.push(name)
	console.log(name);

	renderButtons();
	
});

//Click event assigned to class .name user creates to display Gif
$(document).on("click", ".name", displayGif);

//Displays initial buttons
renderButtons();

$(".img").on("click", function() {
   
      let state = $(this).attr("data-state")


      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
      }
    });
  




	




