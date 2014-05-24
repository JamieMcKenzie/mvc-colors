ColorApp.Controller = function(config){
  this.view = config.view;
};

ColorApp.Controller.prototype = {
  makeGrid: function() {
              this.grid = new Grid();
              this.populateGrid(this.grid);
              this.view.update(this);
              console.log("new grid!")
  },

  populateGrid: function(grid) {
                  for (var i = 0; i <= grid.size; i++){
                    grid.addTile();
                  }
  },

}


