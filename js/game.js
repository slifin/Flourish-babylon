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
		camera.setTarget(new BABYLON.Vector3.Zero());
		addWheelListener(canvas, Zoom);
	},
	Zoom = function(event){
		if (event.wheelDelta>0){
			if (camera.position.z<-5)
				camera.position.z+=0.5;
		}else{
			camera.position.z-=0.5;
		}
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
	Resize = function(){
		window.addEventListener("resize", function () {
			engine.resize();
		});
	},
	objects = [],
	canvas = Canvas(),
	engine = new BABYLON.Engine(canvas, true),
	scene = new BABYLON.Scene(engine),
	camera = new BABYLON.TouchCamera("Camera3", new BABYLON.Vector3(0, 0, -10), scene),
	// camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene),
	light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0,1,0), scene)
	;
	that.scene = scene;
	that.Setup = Setup;
	that.canvas = canvas;
	that.Render = Render;
	return that;
}



