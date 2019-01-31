function translate(input) {

  var translatedArray = [];
  for (var i = 0; i <= input; i += 1) {
    var incrString = i.toString();
    if (incrString.includes('3')) {
      translatedArray.push('"' + "I'm sorry, Dave. I can't do that." + '"');
    } else if (incrString.includes('2')) {
      translatedArray.push('"' + "Boop!" + '"');
    } else if (incrString.includes('1')) {
      translatedArray.push('"' + "Beep!" + '"');
    } else {
      translatedArray.push('"' + incrString + '"')
    }
  }
  return translatedArray
}

$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    var roboInput = parseInt($('.robot').val());
    var translatedInput = translate(roboInput)
    $('.output .card-text').text(translatedInput);
  });
});
