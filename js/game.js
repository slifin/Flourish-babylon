function Game(def){
	var that = def,
	initCanvas = function(){
		var canvas = document.createElement('canvas');
		canvas.id = that.name;
		document.body.appendChild(canvas);
		return canvas;
	},
	initCamera = function(scene){
		var camera = new BABYLON.FreeCamera("camera1", 
			new BABYLON.Vector3(0, 5, -10), scene);
		camera.setTarget(new BABYLON.Vector3.Zero());
		return camera;
	},
	initLight = function(scene){
		var light = new BABYLON.HemisphericLight("light1", 
			new BABYLON.Vector3(0,1,0), scene);
		light.intensity = 1;
		light.diffuse = new BABYLON.Color3(0, 0, 0);
		light.specular = new BABYLON.Color3(0, 0, 0);
		// light.groundColor = new BABYLON.Color3(0, 0, 0);
		return light;
	},
	initScene = function(canvas,engine){
		var scene = new BABYLON.Scene(engine);
		var camera = initCamera(scene);
		var light = initLight(scene); 
		scene.clearColor = BABYLON.Color3.Black();
		return scene;
	},
	setup = function(){
		var canvas = that.canvas = initCanvas();
		var engine = that.engine = new BABYLON.Engine(canvas, true);
		var scene = that.scene = initScene(canvas,engine);
		engine.runRenderLoop(loop(scene));

	},
	render = function(){
		that.engine.runRenderLoop(loop);
	},
	loop = function(){
		that.scene.render();
	}

	;that.render = render;
	that.setup = setup;
	return that;
}



