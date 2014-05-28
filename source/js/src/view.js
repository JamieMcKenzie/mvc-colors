ColorApp.View = function(opts){
  this.opts = opts;
}

ColorApp.View.prototype = {
  update: function(data){
            if (data){
              this.updateGridImage(data);
            }
  },


  updateGridImage: function(data) {
                      if (data.grid) {
                        for (var i = 0; i < data.grid.size; i++) {
                          $(this.opts.gridSelector).append( "<li id=" + i + "></li>" );
                          this.setColor(data, i);
                        }
                      }
  },

  setColor: function(data, index) {
                var n = +index + 1;
                $(this.opts.tileSelector + ":nth-child( " + n + " )").css("background-color", data.grid.tiles[index].color)
  },

}


