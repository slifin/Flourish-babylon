function Collection(){
	var that = {},
	collection = [],
	count = 0,
	add = function(key,item){
		if(collection[key]!==undefined)
			return undefined;
		collection[key]=item;
		++count;
		return that;
	}, 
	remove = function(key){
		if(collection[key]!==undefined)
			return undefined;
		delete collection[key];
		--count;
		return that;
	},
	foreach = function(callback){
		for(var key in collection)
			callback(collection[key]);
		return that;
	};
	that.foreach = foreach;
	that.remove = remove;
	that.add = add;
	return that;
}