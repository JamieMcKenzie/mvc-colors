ColorApp.Binder = function(targets, controller){
  this.targets = targets;
  this.controller = controller;
}

ColorApp.Binder.prototype = {
  bind: function(){
          this.bindMakeGridAction();
          this.bind
  },

  bindMakeGridAction: function(){
                        var controller = this.controller,
                        but = this.targets.makeGridAction;

                        $(but).on('click', function(e){
                          controller.makeGrid();
                          });
  },

  bindClearGridAction: function(){
                          var controller = this.controller,
                          but = this.targets.
  }

}