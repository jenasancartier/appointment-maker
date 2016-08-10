$(document).ready(function() {

  $("form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var date = $("input#date").val();
    var startTime = $("input#start").val();
    var endTime = $("input#end").val();

    $(".confirmName").append(name);
    $(".confirmDate").append(date);
    $(".confirmStart").append(startTime);
    $(".confirmEnd").append(endTime);

    $("h2").show();

  });
});
