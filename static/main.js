document.addEventListener('DOMComponentsLoaded', function () {
  $('.sec').hide();

  //Updating vote per slider
  $(".options-wrapper x-slider").each(function () {
    $(this).change(function () {
      var value = $(this).val();
      $(this).prev().text(value);
    });
  }).change();

  //Binding new input creations
  $(".create").on("keypress", "input", function (key) {
    //Testing if it is alphanumeric
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!key.charCode ? key.which : key.charCode);
    if (regex.test(str)) {
      //It is aplhanum so let's test if last input
      if ($(this).nextAll('input').length === 0) {
        //Counting the inputs
        var count = $('.create input').length - 1;
        //Creating the new input
        $(this).after('<input class="sec" type=text placeholder="Enter vote option ' + count + '"">');
      }
    }
  });

  //Code for index page
  $(".create input").click(function () {
    $(".call").slideUp('slow');
    $('.sec').show('slow');
  });
});