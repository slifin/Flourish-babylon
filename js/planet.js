function Planet(def){
	var that = def,
	size = that.size||200,
	minRotate = -0.002, maxRotate = 0.005,
	rotateX = Calc().getBetween(minRotate,maxRotate),
	rotateY = Calc().getBetween(minRotate,maxRotate),
	rotateZ = Calc().getBetween(minRotate,maxRotate),
	
	create = function(scene){
		var sphere = BABYLON.Mesh.CreateSphere(that.name, 16, 2, scene);
		sphere.position.y = 0;
		sphere.position.x = 0;
		sphere.material = getMaterial(scene);
		that.sphere = sphere;
	},
	getMaterial = function(scene){
		var material =  new BABYLON.StandardMaterial("texture1", scene);
		var texture = new BABYLON.DynamicTexture("dynamic texture", getCanvas(), scene);
		var ctx = texture.getContext();
		ctx = drawTexture(ctx);
		// document.body.appendChild(ctx);
		texture.hasAlpha = true;
		material.diffuseTexture = texture;
		material.ambientColor = new BABYLON.Color3(255, 0, 0);
		material.emissiveColor = new BABYLON.Color3(255, 0, 0);
		texture.update();
		return material;
	},
	render = function(){
		if ((Math.random()*2) % 2)
			that.sphere.rotation.y += rotateY; 
		if ((Math.random()*2) % 2)
			that.sphere.rotation.z += rotateZ; 
		if ((Math.random()*2) % 2)
			that.sphere.rotation.x += rotateX; 
	},

	getCanvas = function(){
		canvas = document.createElement( 'canvas' );
		canvas.width = size;
		canvas.height = size;
		return canvas;
	},
	drawTexture = function(context){
		var calc = Calc();
		var opacity = 1;
		for(i = 0;i < 1000;i++){
			context.beginPath();
			context.fillStyle = "rgba(" + Math.floor(calc.getBetween(50,255)) + "," + Math.floor(calc.getBetween(50,255)) + "," + Math.floor(calc.getBetween(50,255)) + "," + calc.getBetween(0.1,1) + ")";
			context.arc(
				calc.getBetween(0,200),//x
				calc.getBetween(0,200),//y
				calc.getBetween(10,100),//r
				calc.getBetween(0,1)*Math.PI,//angle
				calc.getBetween(0,1)*Math.PI,//angle
				calc.getBetween(0,1) < 0.5?true:false//direction
				);
			context.fill();
		}
		return canvas;
	}
	;
	that.render = render;
	that.create = create;
	return that;
}

function PlanetCollection(){
	var that = Collection();
	return that;
}