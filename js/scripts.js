

// function translate(input) {
//   for (var i = 0; i < input; i += 1) {
//
// });
// };
// };
// var numArray = input.map(function(number) {
//     return

function translate(input) {
  for (var j = 0; j < input.length; j += 1){
    if (input[j] == 3) {
      return "I'm sorry, Dave. I can't do that."
    } else if (input[j] == 2) {
      return "Boop!";
    } else if (input[j] == 1) {
      return "Beep!";
    }
  }
}









$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    var roboInput = parseInt($('.robot').val());
    for (var roboOut = 0; roboOut <= roboInput; roboOut += 1) {
      translate(roboOut);

    }



  });
});
