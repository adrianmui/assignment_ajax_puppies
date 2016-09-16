APP = APP || {};

var Controller = (function(View, Model, Ajax) {

  return {
    init: function() {
      Model.init();
      View.init(Model.getBreedList());
    },
  }

})(APP.View, APP.Model, APP.Ajax);


APP.Controller = Controller;