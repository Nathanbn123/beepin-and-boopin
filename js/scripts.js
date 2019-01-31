/**********************************************************************
ATTEMPTS TO SALVAGE OLD CODE
*****************/
// var roboArray = []
// var roboInput;
//
// for (var i = 0; i <= roboInput; i += 1) {
//   var roboString = i.toString();
// }
// function translate(input) {
//     if (input.includes('3')) {
//        roboArray.push("I'm sorry, Dave. I can't do that.");
//     } else if (input.includes('2')) {
//         roboArray.push("Boop!");
//     } else if (input.includes('1')) {
//         roboArray.push("Beep!");
//     } else {
//         roboArray.push(input)
//     }
//   }
//
//
// $(document).ready(function() {
//   $("#roboForm").submit(function(event) {
//     event.preventDefault();
//     $( ".output .card-text" ).empty();
//     var roboInput = parseInt($('.robot').val());
//       var translated = translate(roboString);
//       $('.output .card-text').text(roboArray);
//
//
//   });
// });

/**********************************************************************
CODE 2.0
*****************/

var roboArray = [];
var translatedArray = [];


function translate(input) {
  roboArray = [];
  translatedArray = [];
for (var i = 0; i <= input; i += 1) {
  var incrString = i.toString();
      if (incrString.includes('3')) {
        translatedArray.push("I'm sorry, Dave. I can't do that.");
     } else if (incrString.includes('2')) {
        translatedArray.push("Boop!");
     } else if (incrString.includes('1')) {
         translatedArray.push("Beep!");
     } else {
        translatedArray.push(incrString)
     }
   }
}

$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    $( ".output .card-text" ).empty();
    var roboInput = parseInt($('.robot').val());
      roboArray.push(roboInput)
      translate(roboArray[0])
       $('.output .card-text').text(translatedArray);
     });
   });



   /**********************************************************************
   OLD CODE
   *****************/
//    function translate(input) {
//   if (input.includes('3')) {
//      return "I'm sorry, Dave. I can't do that.";
//   } else if (input.includes('2')) {
//       return "Boop!";
//   } else if (input.includes('1')) {
//       return "Beep!";
//   } else {
//       return input
//   }
// }
//
// $(document).ready(function() {
//   $("#roboForm").submit(function(event) {
//     event.preventDefault();
//     $( ".output .card-text" ).empty();
//     var roboInput = parseInt($('.robot').val());
//     for (var roboOut = 0; roboOut <= roboInput; roboOut += 1) {
//     var roboString = roboOut.toString();
//       var translated = translate(roboString);
//       $('.output .card-text').append(' '+ '"' + translated + '"' + ',');
//
//     }
//   });
// });
