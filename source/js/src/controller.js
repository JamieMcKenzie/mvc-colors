ColorApp.Controller = function(config){
  this.view = config.view;
  this.gridCollection = new GridCollection();
};

ColorApp.Controller.prototype = {
  loadDefaultGrid: function() {
              this.grid = new Grid();
              this.populateGrid(this.grid);
              this.view.displayDefaultGrid(this.grid);
  },

  populateGrid: function(grid) {
                  for (var i = 0; i < grid.size; i++){
                    grid.addTile();
                  }
  },

  colorTile: function(e) {
                var index = e.target.getAttribute('class');
                var gridSelector = e.target.parentElement.parentElement.getAttribute('class') + " ul";
                var tile = this.grid.tiles[index]
                var newColor = this.randColor();
                tile.setColor(newColor);
                this.view.setColor(tile, index, gridSelector);
  },

  randColor: function(){
                return "#" + Math.floor(Math.random()*16777215).toString(16);
  },

  saveGrid: function(e){
                this.grid.name = ($("#formValueID").val());
                this.gridCollection.grids.push(this.grid);
                this.view.appendSavedGrids(this.gridCollection);
  },

}



