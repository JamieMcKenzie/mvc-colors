var ColorApp = {};

function Grid() {
  this.size = 0;
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
