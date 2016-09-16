APP = APP || {};

var Controller = (function(View, Model, Ajax) {

  return {
    init: function() {
      Model.update().then(function() {
        View.render(Model.getBreedList());
      });
    }
  }
})(APP.View, APP.Model, APP.Ajax);


APP.Controller = Controller;