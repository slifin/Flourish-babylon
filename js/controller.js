var flourish = Game({name:'flourish'});
flourish.setup();

var earth = Planet({name:'earth'});
earth.create(flourish.scene);

flourish.render();