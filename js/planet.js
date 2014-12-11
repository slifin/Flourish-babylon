function Planet(def){
	var that = def,
	Create = function(scene,x,y){
		that.scene = scene;
		that.x = x; 
		that.y = y;
		Sphere();
		Orbit(); 
		Label();
		return that;
	},
	Sphere = function(){
		sphere = BABYLON.Mesh.CreateSphere(that.name, 16, 2, that.scene);
		sphere.position.x = that.x;
		sphere.position.y = that.y;
		sphere.material = getMaterial();
	},
	getMaterial = function(){
		var material =  new BABYLON.StandardMaterial("Planet Material", that.scene);
		var texture = new BABYLON.DynamicTexture("Planet Texture", getCanvas(), that.scene);
		texture.hasAlpha = true;
		context = texture.getContext();
		applyTexture();
		material.diffuseTexture = texture;
		material.diffuseColor = new BABYLON.Color3(255, 0, 0);
		texture.update();
		return material;
	},
	Orbit = function(){
		var orbit = BABYLON.Mesh.CreateSphere(that.name+'_orbit', 32, 5, that.scene);
		orbit.position.x = that.x;
		orbit.position.y = that.y;
		orbit.position.z = 1;
		orbit.visibility = 0.05;
	},
	Label = function(){
		var plane = BABYLON.Mesh.CreatePlane('label',4,that.scene);
		plane.position.z = 1;
		plane.position.y = that.y;
		plane.position.x = that.x;
		plane.material = new BABYLON.StandardMaterial("label_bg", that.scene);

		var texture = new BABYLON.DynamicTexture("Text Texture", 512,that.scene,true);
		plane.material.diffuseTexture = texture; 
		plane.material.diffuseTexture.hasAlpha = true;
		plane.material.backFaceCulling = false; 
		plane.material.diffuseColor = new BABYLON.Color3(155,155,155);
		texture.drawText(that.name, null,500, "5rem Verdana", "white",'');
	},
	Render = function(){
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
	applyTexture = function(){
		for(i = 0;i < 1000;i++){
			context.beginPath();
			context.fillStyle = "rgba(" + Math.floor(calc.Between(50,255)) + "," + Math.floor(calc.Between(50,255)) + "," + Math.floor(calc.Between(50,255)) + "," + calc.Between(0.1,1) + ")";
			context.arc(
				calc.Between(0,200),//x
				calc.Between(0,200),//y
				calc.Between(10,100),//r
				calc.Between(0,1)*Math.PI,//angle
				calc.Between(0,1)*Math.PI,//angle
				calc.Between(0,1) < 0.5?true:false//direction
				);
			context.fill();
		}
		return canvas;
	},
	sphere,
	context,
	calc = Calc(),
	size = that.size||200,
	minRotate = -0.002, maxRotate = 0.005,
	rotation = {
		x:calc.Between(minRotate,maxRotate),
		y:calc.Between(minRotate,maxRotate),
		z:calc.Between(minRotate,maxRotate)
	}
	;
	that.Render = Render;
	that.Create = Create;
	return that;
}

function PlanetCollection(){
	var that = Collection();
	return that;
}