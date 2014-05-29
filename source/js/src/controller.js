ColorApp.Controller = function(config){
  this.view = config.view;
  this.gridCollection = new GridCollection();
};

ColorApp.Controller.prototype = {
  makeNewGrid: function() {
              this.grid = new Grid();
              this.populateGrid(this.grid);
              this.view.loadDefaultGrid(this.grid);
  },

  populateGrid: function(grid) {
                  for (var i = 0; i < grid.size; i++){
                    grid.addTile();
                  }
  },

  colorTile: function(e) {
                var index = e.target.getAttribute('id');
                var newColor = this.randColor();
                this.grid.tiles[index].setColor(newColor);
                this.view.setColor(this, index);
  },

  randColor: function(){
                return "#" + Math.floor(Math.random()*16777215).toString(16);
  },

  saveGrid: function(e){
                this.grid.name = ($("#formValueID").val());
                this.gridCollection.grids.push(this.grid);
                this.view.update(this.gridCollection);
  },

}



