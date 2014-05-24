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
                        for (var i = 0; i <= data.grid.size; i++) {
                          $('.wrapper ul').append( "<li></li>" );
                          this.setColor(data, i);
                        }
                      }
  },

  setColor: function(data, index) {
                $("li:nth-child( " + index + " )").css("background-color", data.grid.tiles[index].color)
  },

}


