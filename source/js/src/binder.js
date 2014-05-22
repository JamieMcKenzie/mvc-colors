ColorApp.Binder = function(targets, controller){
  this.targets = targets;
  this.controller = controller;
}

ColorApp.Binder.prototype = function(){
  bind: function(){
    console.log("bound!");
  }
}