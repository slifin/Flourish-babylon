var flourish = Game({name:'flourish'});
flourish.setup();
var earth = Planet({name:'earth'});
earth.create(flourish.scene);

flourish.solarSystem.add('earth',earth);

flourish.render();