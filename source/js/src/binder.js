/* I generally don't like a class like this.  I feel like
 * the controller should have a method called init() or
 * somethign like it that knows how to set up the events
 * based on a config object (like you have in application.js)
 *
 * This Binder thing is a pattern I use with Phase 2's to break
 * up the pattern of jQuery soup.  It's not terrible, but it's
 * a bit unconventional
 *
 *
 * It seems like there should be something like
 *
  controller = new ColorApp.Controller({
    view: new ColorApp.View({
      gridSelector: ".default-grid ul",
      tileSelector: "li",
    })
  });

  controller.loadDefaultGrid();

  binder = new ColorApp.Binder(selectors, controller);


 That moves to...

  new ColorApp.Controller({
    view: new ColorApp.View({
      gridSelector: ".default-grid ul",
      tileSelector: "li",
    })
  }).init();

 WHERE init() does the work of...

  this.loadDefaultGrid();

 and

  binder = new ColorApp.Binder(selectors, controller);
 *
 */

ColorApp.Binder = function(targets, controller){
  this.targets = targets;
  this.controller = controller;
}

ColorApp.Binder.prototype = {
  bind: function(){
    this.bindClearGridAction();
    this.bindColorTileAction();
    this.bindSaveGridAction();
  },

  bindClearGridAction: function(){
    var controller = this.controller,
    but = this.targets.clearGridAction;

    $(but).on('click', function(){
      controller.loadDefaultGrid();
    })
  },

  bindColorTileAction: function(){
    var controller = this.controller,
    but = this.targets.tileSelector;

    $(".default-grid ul li").on('click', function(e){
      controller.colorTile(e);
    })
  },

  bindSaveGridAction: function(){
    var controller = this.controller,
    but = this.targets.saveGridAction;

    $("form").submit(function(e) {
      controller.saveGrid(e);
      e.preventDefault();
    })
  }
}
