ColorApp.View = function(opts){
  this.opts = opts;
}

ColorApp.View.prototype = {
  update: function(data){
            if (data){
              this.updateGridImage(data);
              if (data.gridCollection.grids.length > 0){
                var gallery = data.gridCollection.grids;
                for (var i = 0; i < gallery.length; i++){
                  this.updateGridImage(gallery);
                }
              }
            };
  },

  updateGridImage: function(data) {
                      if (data.grid) {
                        for (var i = 0; i < data.grid.size; i++) {
                          $(this.opts.gridSelector).append( "<li id=" + i + "></li>" );
                          this.setColor(data, i);
                        }
                        if (data.gridCollection.grids.length > 0) {
                          var gallery = data.gridCollection.grids;
                          for (var i = 0; i < gallery.length; i++) {
                            $(".savedGrids").append( "<ul id=" + i + "></ul> ");
                            for (var j = 0; j < gallery[i].tiles.size; j++) {
                              $(".savedGrids ul").append( "<li id=" + j + "></li>" );
                              this.setColor(data, j);
                            }
                          }
                        }
                      }
  },

  setColor: function(data, index) {
                var n = +index + 1;
                $(this.opts.tileSelector + ":nth-child( " + n + " )").css("background-color", data.grid.tiles[index].color)
  },
}


