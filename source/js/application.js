$('document').ready(function(){
  var selectors = {
    makeGridAction: "button.new",
    saveGridAction: "button.save",
    clearGridAction: "button.clear",
  };

  ColorApp.view = new ColorApp.View( {
    gridSelector: "ul",
    tileSelector: "li",
  });

  ColorApp.controller = new ColorApp.Controller({view: ColorApp.view});
  ColorApp.controller.makeGrid();

  ColorApp.binder = new ColorApp.Binder(selectors, ColorApp.controller);
  ColorApp.binder.bind();
})


