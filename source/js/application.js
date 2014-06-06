ColorApp = {}; // This is the top-level file, define your namespace here

$('document').ready(function(){
  var view, controller, binder,
    selectors = {
    makeGridAction: "button.new",
    clearGridAction: "button.clear",
    saveGridAction: "submit",
  };

  view = new ColorApp.View({
    gridSelector: ".default-grid ul",
    tileSelector: "li",
  });

  controller = new ColorApp.Controller({view: ColorApp.view});
  controller.loadDefaultGrid();

  binder = new ColorApp.Binder(selectors, controller);
  binder.bind();
})


