//Array of ten emotions to be used to make buttons
var topics = ['happy', 'sad', 'angry', 'scared', 'disgusted', 'sleepy', 'hyper', 'calm', 'confident', 'optimistic'];

//When a button is clicked, load ten static gifs with ratings, then add them all to gifsAndRatings
$(document).on("click", '.dynamicBtn', function() {
    var emotion = $(this).data("emotion");
    console.log(emotion);
	var queryURL = "http:api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";

	// Perfoming an AJAX GET request to our queryURL
	$.ajax({
	    url: queryURL,
	    method: "GET"
	}) 

	.done(function(response) {

		// Logging the response to our request
		console.log(response);

		// Putting ten gifs and ratings in "gifsAndRatings"
		for (var i = 0; i<10; i++) {
			var stillGif = response.data[i].images.original_still.url;
			var emotionStill = $("<img class='gif'>");

			emotionStill.attr("src", stillGif);
			emotionStill.attr("alt", "emotion");
			emotionStill.attr("width", "200px");
			emotionStill.attr("height", "200px");

			//Overwrite the HTML for the first GIF
			if (i === 0) {
				$("#gifsAndRatings").html(emotionStill);
				$("#gifsAndRatings").append("<-- Rating: " + response.data[i].rating);
			}
			//Append for the rest
			else {
				$("#gifsAndRatings").append(emotionStill);
				$("#gifsAndRatings").append("<-- Rating: " + response.data[i].rating);
			};
		};
	});
});

// When a gif is clicked, if it's static, animate it.  If it's animated, make it static.
$(document).on("click", '.gif', function() {
	// get the src of the image
	var src = jQuery(this).attr("src");
	// change the image
	if(jQuery(src.split("_")).last()[0] == "s.gif")
		jQuery(this).attr('src', src.replace('_s.gif', '.gif'));
	else
		jQuery(this).attr('src', src.replace('.gif', '_s.gif'));
})

//Creates a button for each member in the topics[] array and adds them to buttonArea
function loadButtons() {
	for (var i = 0; i<topics.length; i++) {
		var gifTopic = topics[i];
		if (i===0) {
			$("#buttonArea").html('<button class="dynamicBtn" type="submit" data-emotion="' + gifTopic + '">' + gifTopic + '</button>');
		}
		else {
			$("#buttonArea").append('<button class="dynamicBtn" type="submit" data-emotion="' + gifTopic + '">' + gifTopic + '</button>');
		}
	}
}

//When a new word is typed into the form...
//Append the word to the end of the array
//loadButtons()
function loadNewButton() {
    var x = document.getElementById("frm1");
    console.log(x);
}

$( document ).ready(function() {
    loadButtons();
});