/* This function takes string as an argument in a random order of chars, checks if it is palindrome or not */
function shuffleAndPalindrome(str) {
	var charMap = {};
	for (var i=0;i<str.length;i++) {
		var temp = str[i];
		if(charMap[temp]) {
			charMap[temp].count = charMap[temp].count + 1;
		} else {
			charMap[temp] = {count: 1}
		}
	}
	var oddCounter = 0, evenCounter = false;
	for (key in charMap) {
		if(charMap[key].count === 1) {
			oddCounter++;
		}
		if( charMap[key].count % 2 === 0 ) {
			evenCounter = true;
		}
	}
	if(!evenCounter || oddCounter > 1)
		console.log("Not Palindrome");
	else
		console.log("Palindrome");
}
