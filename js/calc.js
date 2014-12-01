function Calc(){
	var that = {},
	Between = function(min,max){
		if (max == null) {
			max = min;
			min = 0;
		}
		return min + Math.floor(Math.random() * (max - min + 1));
	},
	getRandomColor = function(){
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) 
			color += letters[Math.floor(Math.random() * 16)];
		return color;
	};
	that.getRandomColor = getRandomColor;
	that.Between = Between;
	return that;
}