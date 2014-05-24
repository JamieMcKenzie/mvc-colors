var ColorApp = {};

function Grid(size) {
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