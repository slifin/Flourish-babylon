function Planet(def,scene){
	var that = def,
	size = that.size||200,
	calc = Calc(),
	minRotate = -0.002, maxRotate = 0.005,
	rotation = {
		x:calc.getBetween(minRotate,maxRotate),
		y:calc.getBetween(minRotate,maxRotate),
		z:calc.getBetween(minRotate,maxRotate)
	},
	sphere = BABYLON.Mesh.CreateSphere(that.name, 16, 2, scene),
	create = function(){
		sphere.position.y = 0;
		sphere.position.x = 0;
		sphere.material = getMaterial(scene);
		label();
		},
	getMaterial = function(){
		var material =  new BABYLON.StandardMaterial("texture1", scene);
		var texture = new BABYLON.DynamicTexture("Planet Texture", getCanvas(), scene);
		texture.hasAlpha = true;
		var ctx = texture.getContext();
		ctx = applyTexture(ctx);
		material.diffuseTexture = texture;
		material.diffuseColor = new BABYLON.Color3(255, 0, 0);
		material.emissiveColor = new BABYLON.Color3(255, 0, 0);
		texture.update();
		return material;
	},
	label = function(){
		var plane = BABYLON.Mesh.CreatePlane('label',5,scene);
		plane.position.z = 2;
		plane.position.y = sphere.position.y;
		plane.position.x = sphere.position.x;
		plane.material = new BABYLON.StandardMaterial("label_bg", scene);

		var texture = new BABYLON.DynamicTexture("Text Texture", 512, scene,true);
		plane.material.diffuseTexture = texture; 
		plane.material.diffuseTexture.hasAlpha = true;
		plane.material.backFaceCulling = false; 
		plane.material.diffuseColor = new BABYLON.Color3(155,155,155);
		texture.drawText(that.name, null,500, "5rem Verdana", "white",'#555');
	

	},
	render = function(){
		if ((Math.random()*2) % 2)
			sphere.rotation.y += rotation.y; 
		if ((Math.random()*2) % 2)
			sphere.rotation.z += rotation.z; 
		if ((Math.random()*2) % 2)
			sphere.rotation.x += rotation.x; 
	},

	getCanvas = function(){
		canvas = document.createElement( 'canvas' );
		canvas.width = size;
		canvas.height = size;
		return canvas;
	},
	applyTexture = function(context){
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
	that.sphere = sphere;
	that.render = render;
	that.create = create;
	return that;
}

function PlanetCollection(){
	var that = Collection();
	return that;
}