ColorApp.Controller = function(config){
  this.view = config.view;
};

ColorApp.Controller.prototype = {
  makeNewGrid: function() {
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

  colorTile: function(e) {
                e.target.style.backgroundColor=this.randColor();
  },

  randColor: function(){
                return "#" + Math.floor(Math.random()*16777215).toString(16);
  }

}



