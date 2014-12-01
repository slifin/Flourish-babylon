function Calc(){
	var that = {},
	Between = function(min,max){
		var num = Math.random()*max + min; 
		num *= (Math.random()*2) % 2 ? 1 : -1; 
		return num;
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