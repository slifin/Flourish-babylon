(function(){
	var flourish = Game({name:'flourish'}).Setup(),
	earth = Planet({name:'earth'}).Create(flourish.scene),
	solarSystem = PlanetCollection().add('earth',earth);
	flourish.Render([solarSystem]);
})();