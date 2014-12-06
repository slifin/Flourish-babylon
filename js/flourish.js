(function(){
	var Flourish = Game({name:'Flourish'}).Setup(),
	solarSystem = PlanetCollection();
	for(var i = 0;i<5;i++){
		var eve = Planet({name:'earth'+i})
		.Create(Flourish.scene,Calc().Between(-10,10),Calc().Between(-10,10));
		solarSystem.add('earth'+i,eve);
	}

	var fighter = Unit().Setup(Flourish.scene); 

	Flourish.Render([solarSystem]);
})();