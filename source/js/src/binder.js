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
  },



}
