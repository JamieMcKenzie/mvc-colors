$('document').ready(function(){
  var selectors = {
    saveGridAction: "button.save",
    clearGridAction: "button.clear",
  };

  ColorApp.view = new ColorApp.View( {
    gridSelector: "ul",
    tileSelector: "li",
  });

  ColorApp.controller = new ColorApp.Controller({view: ColorApp.view});
  ColorApp.controller.makeGrid();
  console.log("makegrid fired");

  ColorApp.binder = new ColorApp.Binder(selectors, ColorApp.controller);
  ColorApp.binder.bind();
})


