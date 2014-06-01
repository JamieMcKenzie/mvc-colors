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
                      for (var i = grids.length - 1; i > 0; i--) {
                        $(".saved-grids").append("<ul class=" + i + "><h2> Saved Grid:" + grids[i].name + "</h2></ul>");
                        this.updateGridImage(grids[i].tiles, ".saved-grids ul." + i);
                      }
  },

  updateGridImage: function(tiles, selector) {
                      var gridSelector = selector || this.opts.gridSelector
                      if (tiles) {
                        for (var i = 0; i < tiles.length; i++) {
                          $(gridSelector).append( "<li class=" + i + "></li>" );
                          this.setColor(tiles[i], i, gridSelector);
                        }
                      }
  },

  setColor: function(tile, index, gridSelector) {
              $(gridSelector + " " + this.opts.tileSelector + "." + index).css("background-color", tile.color)
  },
}



