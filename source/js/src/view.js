ColorApp.View = function(opts){
  this.opts = opts;
}

ColorApp.View.prototype = {
  displayDefaultGrid: function(grid){
                      if (grid.tiles){
                        this.updateGridImage(grid.tiles);
                      }
  },

  appendSavedGrids: function(gallery){
                      var grids = gallery.grids;
                      $(".saved-grids").html("");
                      for (var i = 0; i < grids.length; i++) {
                          $(".saved-grids").append("<ul id=" + i + "></ul>")
                      }
  },

  updateGridImage: function(tiles) {
                      if (tiles) {
                        for (var i = 0; i < tiles.length; i++) {
                          $(this.opts.gridSelector).append( "<li id=" + i + "></li>" );
                          this.setColor(tiles[i], i);
                        }
                      }
  },

  setColor: function(tile, index) {
                var n = +index + 1;
                $(this.opts.tileSelector + ":nth-child( " + n + " )").css("background-color", tile.color)
  },
}



