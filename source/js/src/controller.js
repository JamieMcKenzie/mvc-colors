ColorApp.Controller = function(config){
  this.view = config.view;
};

ColorApp.Controller.prototype = {
  makeGrid: function(e) {
              this.grid = new Grid();
              this.view.update(this);
              console.log(this.grid);
  },

}


