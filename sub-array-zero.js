function getArray(numberArray) {
	var i = 0, j = i+1, sum = numberArray[0];

	while(i < numberArray.length) {
		if( sum === 0) {
			sum = numberArray[i];
		}
		if( numberArray[j] ) {
			sum += numberArray[j];
			if( sum === 0 ) {
				console.log(numberArray.slice(i, j+1 ));
			}
			j++;
        }
		else {
			i++;
			j = i+1;
			sum = 0;
		}
	}
}
