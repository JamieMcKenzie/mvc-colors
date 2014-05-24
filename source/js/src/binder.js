ColorApp.Binder = function(targets, controller){
  this.targets = targets;
  this.controller = controller;
}

ColorApp.Binder.prototype = {
  bind: function(){
          this.bindClearGridAction();
          this.bindColorTileAction();
  },

  bindClearGridAction: function(){
                          var controller = this.controller,
                          but = this.targets.clearGridAction;

                          $(but).on('click', function(){
                            controller.makeNewGrid();
                          })
  },

  bindColorTileAction: function(){
                          var controller = this.controller,
                          but = this.targets.tileSelector;

                          $("li").on('click', function(e){
                            controller.colorTile(e);
                          })


  }

}