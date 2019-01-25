

alert("hello!")











$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    var roboInput = parseInt($('.robot').val());
    alert(roboInput);




  });
});
