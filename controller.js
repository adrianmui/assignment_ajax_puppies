APP = APP || {};

var Controller = (function(View, Model, Ajax) {

  return {
    init: function() {
      Model.updatePuppyList().then(function(puppy) {
        View.renderPuppyList(Model.getPuppyList());
      });

      Model.updateBreedList().then(function(breed) {
        View.renderDropDown(Model.getBreedList());
      });


                
    }
  }
})(APP.View, APP.Model, APP.Ajax);


APP.Controller = Controller;