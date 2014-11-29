var flourish = Game({name:'flourish'});
flourish.setup();
var earth = Planet({name:'earth'},flourish.scene);
earth.create();

flourish.solarSystem.add('earth',earth);

flourish.render();

