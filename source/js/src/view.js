ColorApp.View = function(opts){
  this.opts = opts;
}

ColorApp.View.prototype = {
  displayDefaultGrid: function(grid){
                      if (grid.tiles){
                        this.updateGridImage(grid.tiles);
                      }
  },

  updateGridImage: function(tiles) {
                      if (tiles) {
                        for (var i = 0; i < tiles.length; i++) {
                          $(this.opts.gridSelector).append( "<li id=" + i + "></li>" );
                          this.setColor(tiles[i], i);
                        }
                        // if (data.gridCollection.grids.length > 0) {
                        //   var gallery = data.gridCollection.grids;
                        //   for (var i = 0; i < gallery.length; i++) {
                        //     $(".savedGrids").append( "<ul id=" + i + "></ul> ");
                        //     for (var j = 0; j < gallery[i].tiles.size; j++) {
                        //       $(".savedGrids").append( "<li id=" + j + "></li>" );
                        //       this.setColor(data, j);
                        //     }
                        //   }
                        // }
                      }
  },

  setColor: function(tile, index) {
                var n = +index + 1;
                $(this.opts.tileSelector + ":nth-child( " + n + " )").css("background-color", tile.color)
  },
}



