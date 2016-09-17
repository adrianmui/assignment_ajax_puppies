APP = APP || {};

var View =  (function() {

  var renderDropDown = function(breedList) {
    var $breedList = $('#breed-list');
    breedList.forEach( function(el) {
      $('<option>').text(el).appendTo($breedList);
    });
  };

  var renderPuppyList = function(puppyList) {
    console.log("matt where puppy at");
    var $puppyList = $('#puppy-list');
    puppyList.forEach(function(el) {
      $('<li>')
        .text(el)
        .appendTo($puppyList);

    });
  }

  // var submitListener = function () {
  //   $('form').submit(function(e) {
  //     e.preventDefault();

  //     var $puppyList = $('#puppy-list');

  //   })
    
  // };


  return {
    render: function(breedList, puppyList) {
      renderDropDown(breedList);
      renderPuppyList(puppyList);
    },
  };

})();


APP.View = View;