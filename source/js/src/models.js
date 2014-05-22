var ColorApp = {};

function Grid() {
  this.size = this.tiles.size;
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
