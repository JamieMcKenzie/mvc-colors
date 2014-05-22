var ColorApp = {};

function Grid() {
  this.tiles = new Array();
  this.size = this.tiles.length;
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
