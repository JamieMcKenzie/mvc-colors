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
                        $(".saved-grids").append("<ul class=" + i + "></ul>");
                        this.updateGridImage(grids[i].tiles, ".saved-grids ul." + i);
                      }
  },

  updateGridImage: function(tiles, selector) {
                      var gridSelector = selector || this.opts.gridSelector
                      if (tiles) {
                        for (var i = 0; i < tiles.length; i++) {
                          $(gridSelector).append( "<li class=" + i + "></li>" );
                          this.setColor(tiles[i], i);
                        }
                      }
  },

  setColor: function(tile, index) {
                var n = +index + 1;
                console.log(tile);
                $(this.opts.tileSelector + ":nth-child( " + n + " )").css("background-color", tile.color)
  },
}



