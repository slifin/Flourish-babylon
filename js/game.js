function Game(def){
	var that = def,
	Setup = function(){
		Canvas(); Camera(); Light(); Scene();
		return that;
	},
	Canvas = function(){
		var canvas = document.createElement('canvas');
		canvas.id = that.name;
		document.body.appendChild(canvas);
		return canvas;
	},
	Camera = function(){
		// camera.setTarget(new BABYLON.Vector3.Zero());
	},
	Light = function(){
		light.intensity = 1;
		light.specular = new BABYLON.Color3(0, 0, 0);
		light.groundColor = new BABYLON.Color3(0, 0, 0);
	},
	Scene = function(){
		scene.clearColor = BABYLON.Color3.Black();
		scene.activeCamera = camera;
		scene.activeCamera.attachControl(canvas);
	},
	Render = function(objs){
		objects = objs;
		engine.runRenderLoop(Loop);
	},
	Loop = function(){
		scene.render();
		for(var i = 0;i<objects.length;i++)
			objects[i].foreach(function(item){
				item.Render();
			});
	},
	objects = [],
	canvas = Canvas(),
	engine = new BABYLON.Engine(canvas, true),
	scene = new BABYLON.Scene(engine),
	camera = new BABYLON.TouchCamera("Camera3", new BABYLON.Vector3(0, 0, -10), scene),
	light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0,1,0), scene)
	;
	that.scene = scene;
	that.Setup = Setup;
	that.canvas = canvas;
	that.Render = Render;
	return that;
}



