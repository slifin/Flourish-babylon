function Planet(def){
	var that = def,
	create = function(scene){
		var sphere = BABYLON.Mesh.CreateSphere(that.name, 16, 2, scene);
		sphere.position.y = 0;
		sphere.position.x = 0;
		sphere.material = getMaterial(scene);

	},
	getMaterial = function(scene){
		var material =  new BABYLON.StandardMaterial("texture1", scene);
		var texture = new BABYLON.DynamicTexture("dynamic texture", getCanvas(), scene);

		var ct = texture.getContext();
		ct = getCanvas(ct);
		texture.hasAlpha = true;
		// material.emissiveTexture = texture;
		material.diffuseTexture = texture;
		// material.specularTexture = texture;
		material.emissiveColor = new BABYLON.Color3(0, 0, 255);
		// material.specularColor = new BABYLON.Color3(0, 0, 255);

		texture.update();
		return material;
	},
	getCanvas = function(can){
		if (can){
			var context = can;
		}else{
			var canvas = can || document.createElement( 'canvas' );
			var size = 200;
			canvas.width = size;
			canvas.height = size;
			var context = canvas.getContext( '2d' );
		}
		context.rect( 0, 0, size, size);
		var x = 100, y = 100;
		var gradient = context.createRadialGradient( x,y,10,x,y,100);
		var calc = Calc();
		for(var i = calc.getBetween(3,10);i<10;i++)
			gradient.addColorStop(calc.getBetween(0,1),calc.getRandomColor());
		var opacity = 1;
		that.strength = calc.getBetween(20,50);
		for(i = 0;i < that.strength;i++){
			context.beginPath();
			context.fillStyle = "rgba(" + Math.floor(calc.getBetween(50,255)) + "," + Math.floor(calc.getBetween(50,255)) + "," + Math.floor(calc.getBetween(50,255)) + "," + calc.getBetween(0.1,1) + ")";
			context.arc(calc.getBetween(0,200),calc.getBetween(0,200),calc.getBetween(0,100),calc.getBetween(0,100),calc.getBetween(0,100),calc.getBetween(0,1));
			context.fill();
		}
		return canvas;
	}

	;
	that.create = create;
	return that;
}


function PlanetCollection(){
	var that = Collection();
	return that;
}