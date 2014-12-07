function Unit(){
	var that = {},
	Setup = function(scene){
// 		scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);
// 		scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
// scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
// 		 scene.fogStart = 20.0;
// scene.fogEnd = 60.0;scene.fogDensity = 0.01;

var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 0, 0), scene);
var lightSphere0 = BABYLON.Mesh.CreateSphere("Sphere0", 32, 0.5, scene);
lightSphere0.emissiveColor = new BABYLON.Color3(100, 100, 100);

    // light0.diffuse = new BABYLON.Color3(1, 0, 0);
    // light0.specular = new BABYLON.Color3(1, 0, 0);
    
    
    // lightSphere0.material = new BABYLON.StandardMaterial("white", scene);
    // lightSphere0.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    // lightSphere0.material.specularColor = new BABYLON.Color3(0, 0, 0);
    // lightSphere0.material.emissiveColor = new BABYLON.Color3(100, 100, 100);

// light0.emissiveColor = new BABYLON.color3(1,255,255);
return that; 
};

that.Setup = Setup;
return that;
}