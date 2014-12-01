function Game(def){
	var that = def,
	Setup = function(){
		Canvas(); Camera(); Light(); Scene(); Resize();
		return that;
	},
	Canvas = function(){
		var canvas = document.createElement('canvas');
		canvas.id = that.name;
		document.body.appendChild(canvas);
		return canvas;
	},
	Camera = function(){
		var zoom = 15;
		camera.angularSensibility = 2;
		camera.mode = 1;


		camera.orthoTop = zoom;
		camera.orthoBottom = -Math.abs(zoom);
		camera.orthoLeft = -Math.abs(zoom);
		camera.orthoRight = zoom;

		scene.activeCamera = camera;
		scene.activeCamera.attachControl(canvas);
		addWheelListener(canvas, Zoom);

		
	},
	Zoom = function(event){

		if (event.wheelDelta>0){
			if (camera.orthoTop<2)
				return false;
			camera.orthoTop -= 0.5;
		}else{
			camera.orthoTop += 0.5;
		}
		camera.orthoBottom = camera.orthoLeft = -Math.abs(camera.orthoTop);
		camera.orthoRight = camera.orthoTop;
		
	},
	Light = function(){
		light.intensity = 1;
		light.specular = new BABYLON.Color3(0, 0, 0);
		light.groundColor = new BABYLON.Color3(0, 0, 0);
	},
	Scene = function(){
		scene.clearColor = BABYLON.Color3.Black();

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
	Resize = function(){
		window.addEventListener("resize", function () {
			engine.resize();
		});
	},
	objects = [],
	canvas = Canvas(),
	engine = new BABYLON.Engine(canvas, true),
	scene = new BABYLON.Scene(engine),
	// camera = Camera2D(new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -3), scene)),
	camera = Camera2D(new BABYLON.TouchCamera("TouchCamera", new BABYLON.Vector3(0, 1, -15), scene)),

	light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0,0,-100), scene)
	;
	that.scene = scene;
	that.Setup = Setup;
	that.canvas = canvas;
	that.Render = Render;
	return that;
}



