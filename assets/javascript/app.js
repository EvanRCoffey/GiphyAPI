var topics = ['happy', 'sad', 'angry', 'scared', 'disgusted', 'sleepy', 'hyper', 'calm', 'confident', 'optimistic'];

$( document ).ready(function() {
    loadButtons();
});

//When a button is clicked, load ten static gifs with ratings, then add them all to gifsAndRatings
$(document).on("click", '.dynamicBtn', function() {
    var emotion = $(this).data("emotion");
    console.log(emotion);
    for (var i = 0; i<10; i++) {
    	//Load the first gif and its rating
    	if (i===0) {
			$("#gifsAndRatings").html("Gif and rating goes here");
		}
		//Append the other nine gifs and their ratings
		else {
			$("#gifsAndRatings").append("Gif and rating goes here");
		}
    }
});

//When a gif is clicked...
	//if it's inactive, activate it
	//if it's active, deactivate it

//DO THIS PART LAST!
//When a new word is typed into the form...
	//Append the word to the end of the array
	//loadButtons();

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