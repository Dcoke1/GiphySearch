//Automobile button array
let buttonName = ["Jamaica", "Travi$Scott", "Ferrari", "4K", "Goku", "Cookies", "Adidas", "Xbox", "Google"];

//Display function renders html to display gifs
function displayGif() {

	let name = $(this).attr("bttn-row");
	let queryURL = "https://api.giphy.com/v1/gifs/search?q="+ name + "&api_key=nKYmqq0i5gKOMDdBteTiDiEH6QNqbUae&limit=25"
	
// Ajax call for specific giphy data 
$.ajax({
	url: queryURL,
	method: "GET"
}).done((response)=> {
	console.log(response);
	let results = response.data.sort(() => Math.random() - 0.5);

//Looping through giphy results after button is clicked
	let i = 20;
	let len = results.length;

	for (i; i < len; i++) {

		let gifDiv = $("<div class='img-thumbnail w3-animate-zoom'>");

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
//function to clear giphydrop
$(".clrBtn").on("click", (event) => {
		event.preventDefault();
		$("#giphyDrop").empty();	
});

//function for displaying buttons
let renderButtons = ()=> {

//Deletes buttons prior to adding new buttons	
	$("#buttonDrop").empty();

//Loops through array of buttons
	let i = 0;
	let len = buttonName.length;

	for (i; i < len; i++) {
	
	let a = $("<button>");
      
	  a.addClass("name");
	  
	  a.attr("bttn-row", buttonName[i]);
	  
	  a.text(buttonName[i]);
	  
	  $("#buttonDrop").append(a);
	}
 }

//Add button to array function
$(".addBtn").on("click", (event) => {
	event.preventDefault();

	let name = $("#mySubmit").val().trim();

	buttonName.unshift(name)
	console.log(name);

	renderButtons();
	
});
//Add button to array function on enter press
$("#mySubmit").on("keyup", (event) => {
	if (event.keyCode == 13) {
	event.preventDefault();

	let name = $("#mySubmit").val().trim();

	buttonName.unshift(name)

	renderButtons();
	}
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