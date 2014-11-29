(function(){
	var Flourish = Game({name:'Flourish'}).Setup(),
	solarSystem = PlanetCollection();
	for(var i = 0;i<5;i++){
		var eve = Planet({name:'eve'+i}).Create(Flourish.scene,i*5,0);
		solarSystem.add('eve'+i,eve);
	}

	Flourish.Render([solarSystem]);
})();