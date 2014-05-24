var ColorApp = {};

function GridCollection() {
  this.grids = new Array();
}

function Grid(size) {
  this.name = "";
  this.size = size || 16;
  this.tiles = new Array();
}

function Tile() {
  this.color = "#ffffff";
}

Grid.prototype = {
  addTile: function(){
    this.tiles.push(new Tile());
  },

  removeTile: function(){
    this.tiles.pop()
  },

}

Tile.prototype = {
  setColor: function(color){
    this.color = color
  }
}