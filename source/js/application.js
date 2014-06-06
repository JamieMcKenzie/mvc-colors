ColorApp = {}; // This is the top-level file, define your namespace here

$('document').ready(function(){
  var controller, binder,
    selectors = {
    makeGridAction: "button.new",
    clearGridAction: "button.clear",
    saveGridAction: "submit",
  };

  controller = new ColorApp.Controller({
    view: new ColorApp.View({
      gridSelector: ".default-grid ul",
      tileSelector: "li",
    })
  });

  controller.loadDefaultGrid();

  binder = new ColorApp.Binder(selectors, controller);
  binder.bind();
})


