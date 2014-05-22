ColorApp.View = function(opts){
  this.opts = opts;
}

ColorApp.View.prototype = {
  update: function(data){
    if (data){
      console.log(data);
    }
  }
}