function Unit(){
	var that = {},
	Setup = function(scene){
// 		scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);
// 		scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
// scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
// 		 scene.fogStart = 20.0;
// scene.fogEnd = 60.0;scene.fogDensity = 0.01;


var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 1, -0.9), scene);


light0.intensity = 2;
light0.range = 5;
light0.emissiveColor = new BABYLON.Color3(0.5,2,0.1);

      var plane = BABYLON.Mesh.CreatePlane("plan", 20, scene);
      plane.position.z = 1;
      var mirrorMaterial = new BABYLON.StandardMaterial("texture4", scene);
    mirrorMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    mirrorMaterial.emissiveColor = new BABYLON.Color3(0,0,0);
    plane.material = mirrorMaterial;
    // plane.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);
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