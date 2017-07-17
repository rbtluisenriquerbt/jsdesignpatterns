var nclicks = 0;

$(document).ready(function(){
  $("#nclicks").text(nclicks);
  $("#catimg").on( "click", function() {
    nclicks++;
    $("#nclicks").text(nclicks);
    console.log("The cat was clicked")
  });
});
