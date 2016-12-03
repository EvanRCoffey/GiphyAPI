var topics = ['happy', 'sad', 'angry', 'scared', 'disgusted', 'sleepy', 'hyper', 'calm', 'confident', 'optimistic'];

$( document ).ready(function() {
    loadButtons();
});

//When a button is pressed...
	//Load ten static, non-animated gifs with ratings, and add them all to gifsAndRatings
	//(Don't append.  Load ten new gifs.)

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
			$("#buttonArea").html('<button type="submit">' + gifTopic + '</button>');
		}
		else {
			$("#buttonArea").append('<button type="submit">' + gifTopic + '</button>');
		}
	}
}