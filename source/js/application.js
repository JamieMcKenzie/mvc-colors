ColorApp = {}; // This is the top-level file, define your namespace here

$('document').ready(function(){
  var selectors = {
    makeGridAction: "button.new",
    clearGridAction: "button.clear",
    saveGridAction: "submit",
  };

  ColorApp.view = new ColorApp.View( {
    gridSelector: ".default-grid ul",
    tileSelector: "li",
  });

  ColorApp.controller = new ColorApp.Controller({view: ColorApp.view});
  ColorApp.controller.loadDefaultGrid();

  ColorApp.binder = new ColorApp.Binder(selectors, ColorApp.controller);
  ColorApp.binder.bind();
})


