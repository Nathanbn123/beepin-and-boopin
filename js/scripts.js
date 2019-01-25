

// function translate(input) {
//   for (var i = 0; i < input; i += 1) {
//
// });
// };
// };
// var numArray = input.map(function(number) {
//     return









$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    var roboInput = parseInt($('.robot').val());
    for (var i = 0; i <= roboInput; i += 1) {
      console.log(i);
    }



  });
});
