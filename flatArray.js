/* 
This function accepts an array and returns the flat array.
e.g 
flatArray([1, 2, [3, [4, [5] ], [6, 7] ] ]) => [1, 2, 3, 4, 5, 6, 7]
 */
var newArray = [];
function flatArray(array) {
	for (var i=0;i<array.length;i++) {
		var temp = array[i];
		if(Array.isArray(temp) ) {
			flatArray(temp);
		} else {
			newArray.push(temp);
		}
	}
}
