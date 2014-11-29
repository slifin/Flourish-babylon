(function(){
	var flourish = Game({name:'flourish'}).Setup(),
	solarSystem = PlanetCollection();
	for(var i = 0;i<5;i++){
		eve = Planet({name:'eve'+i}).Create(flourish.scene,i*5,0);
		solarSystem.add('eve'+i,eve);
	}

	flourish.Render([solarSystem]);
})();