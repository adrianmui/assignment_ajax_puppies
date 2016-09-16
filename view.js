APP = APP || {};

var View =  (function() {

  var renderDropDown = function(breedList) {
    var $breedList = $('#breed-list');
    breedList.forEach( function(el) {
      $('<option>').text(el).appendTo($breedList);
    });
  };



  return {
    render: function(breedList) {
      renderDropDown(breedList);
    },
  };

})();


APP.View = View;