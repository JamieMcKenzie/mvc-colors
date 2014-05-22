var ColorApp = {};

function Grid(size) {
  this.size = size || 25;
  this.tiles = new Array(this.size);
}

function Tile() {
  this.color = "#ffffff";
}

Grid.prototype = {
  addTile: function(){
    this.tiles.push(new Tile());
    this.size = this.tiles.length;
  },

  removeTile: function(){
    this.tiles.pop()
  },

}
