$('document').ready(function(){
  ColorApp.view = new ColorApp.View();

  ColorApp.controller = new ColorApp.Controller({view: ColorApp.view});
  ColorApp.controller.makeGrid();

})


