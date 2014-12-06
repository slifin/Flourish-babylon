function Unit(){
	var that = {},
	Setup = function(scene){
		scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);
		scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
		 scene.fogStart = 20.0;
scene.fogEnd = 60.0;scene.fogDensity = 0.01;

	    var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 10, 0), scene);
    var light1 = new BABYLON.PointLight("Omni1", new BABYLON.Vector3(0, -10, 0), scene);
    var light2 = new BABYLON.PointLight("Omni2", new BABYLON.Vector3(10, 0, 0), scene);
    var light3 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(1, -1, 0), scene);
	  var lightSphere0 = BABYLON.Mesh.CreateSphere("Sphere0", 16, 0.5, scene);
    var lightSphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 16, 0.5, scene);
    var lightSphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 16, 0.5, scene);
    

    light0.diffuse = new BABYLON.Color3(1, 0, 0);
    light0.specular = new BABYLON.Color3(1, 0, 0);
    
    light1.diffuse = new BABYLON.Color3(0, 1, 0);
    light1.specular = new BABYLON.Color3(0, 1, 0);
    
    light2.diffuse = new BABYLON.Color3(0, 0, 1);
    light2.specular = new BABYLON.Color3(0, 0, 1);
    
    light3.diffuse = new BABYLON.Color3(1, 1, 1);
    light3.specular = new BABYLON.Color3(1, 1, 1);
    lightSphere2.material = new BABYLON.StandardMaterial("blue", scene);
    lightSphere2.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    lightSphere2.material.specularColor = new BABYLON.Color3(0, 0, 0);
    lightSphere2.material.emissiveColor = new BABYLON.Color3(0, 0, 1);

// light0.emissive = new BABYLON.color3(1,255,255);
		return that; 
	};

	that.Setup = Setup;
	return that;
}