function division(number) {
  number / number
}

function translate(input) {
  for (var i = 0; i < input.length; i += 1) {
input.map(function(number) {

});
};
};










$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    var roboInput = parseInt($('.robot').val());
    var divided = division(roboInput)
    alert(divided)



  });
});
