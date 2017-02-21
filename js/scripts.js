$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    var warningTotal = 0;
    var symptomsTotal = 0;
    var copeTotal = 0;
    $("input:checkbox[name=warningsigns]:checked").each(function(){
      warningTotal += parseInt($(this).val());
    });
    //$('#help-responses').append(warningResponses + "<br>");
    $("input:checkbox[name=symptoms]:checked").each(function(){
      symptomsTotal += parseInt($(this).val());
    });
    $("input:checkbox[name=cope]:checked").each(function(){
      copeTotal += parseInt($(this).val());
    });
    if ((warningTotal + symptomsTotal > 4) && (copeTotal < 2)) {
      $("#help-responses").show();
    }else if ((warningTotal + symptomsTotal < 4) && (copeTotal > 2)) {
      $("#great-responses").show();
    }else {
      $("#learn-responses").show();
    }
  });
});



// var userResponses = [];
//   $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       userResponses.push(workTransportationMode);
//     });
//
//     $("input:checkbox[name=work-transportation]:checked").each(function(){
//     var workTransportationMode = $(this).val();
//     var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
//     ...
//   });
