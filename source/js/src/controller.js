ColorApp.Controller = function(config){
  this.view = config.view;
  this.gridCollection = new GridCollection();
};

ColorApp.Controller.prototype = {
  loadDefaultGrid: function() {
    this.grid = new Grid();
    this.populateGrid(this.grid);
    this.view.displayDefaultGrid(this.grid);

    /* The above line is a classic give away of not understanding how OO should
     * work.
     *
     * Why is the controller telling the View what to do to draw the screen?
     * Why can't the controller throw itself to the view and then the *view*
     * can decide what it needs from the thing it receives (i.e. .grid) to
     * draw?  Here you're making the contorller know how to display.  Don't.
     * Consult "Inversion of Dependency"
     */
  },

  populateGrid: function(grid) {
    for (var i = 0; i < grid.size; i++){
      grid.addTile();
    }
  },

  colorTile: function(e) {
    var index = e.target.getAttribute('class');
    /* Gross! */
    var gridSelector = "." + e.target.parentElement.parentElement.getAttribute('class') + " ul";
    var tile = this.grid.tiles[index]
    var newColor = this.randColor();
    tile.setColor(newColor);
    this.view.setColor(tile, index, gridSelector);
  },

  randColor: function(){
    /* See code smell called "MAGIC NUMBER" What do these
     * numbers mean?
     */
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  },

  getColors: function(e){
    var colors = new Array();
    for (var i = 0; i < this.grid.size; i++) {
      colors.push(this.grid.tiles[i].color);
    }
    return colors;
  },

  makeNewColoredGrid: function(e){
    var colors = this.getColors(e);
    var grid = new Grid(colors.length);
    // Should probably be configurable
    grid.name = ($("#formValueID").val());
    this.populateGrid(grid);
    for (var i = 0; i < colors.length; i++) {
      grid.tiles[i].color = colors[i];
    }
    return grid;
  },

  saveGrid: function(e){
    var grid = this.makeNewColoredGrid(e);
    this.gridCollection.grids.push(grid);
    this.view.appendSavedGrids(this.gridCollection);
  }
}
