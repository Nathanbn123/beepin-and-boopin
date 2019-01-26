function translate(input) {
  if (input.includes('3')) {
     return "I'm sorry, Dave. I can't do that.";
  } else if (input.includes('2')) {
      return "Boop!";
  } else if (input.includes('1')) {
      return "Beep!";
  } else {
      return input
  }
}


$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    $( ".output .card-text" ).empty();
    var roboInput = parseInt($('.robot').val());
    for (var roboOut = 0; roboOut <= roboInput; roboOut += 1) {
    var roboString = roboOut.toString();
      var translated = translate(roboString);
      $('.output .card-text').append(' '+ '"' + translated + '"' + ',');

    }



  });
});
