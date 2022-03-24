

//UI logic
$(document).ready(function () {
  $("#form").submit(function (event) {

    event.preventDefault();

    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const dob = parseInt($("input#DOB").val());
    const streetAddr = $("input#streetAddr").val();
    const city = $("input#city").val();
    const state = $("input#state").val();
    const email = $("input#email").val();
    const phone = parseInt($("input#phone").val());
    const output = $(".output");


    output.append(
        "<form> <ol class='catalogue hidden' id='contact'>" +
        "<li>" + firstName +"</li>" +
        "<li>" + lastName +"</li>" +
        "<li>" + dob +"</li>"+
        "<li>" + streetAddr +"</li>"+
        "<li>" + city +"</li>"+
        "<li>" + state +"</li>"+
        "<li>" + email +"</li>"+
        "<li>" + phone +"</li>" + "</ol>" +
        "<button class='btn btn-info' id='contactBtn'>" + "</form>"
        );
    
    const catalogue = $(".catalogue");
    const contact = $("#contact");
    let contactBtn = $("#contactBtn");
    let def = false;

    contactBtn.click(function(event) {

      event.preventDefault();

      if(def === false) {
        catalogue.toggle();
        def = true;
      } else {
        catalogue.toggle();
        def = false;
      }
    });
  });
});

$(document).ready(function () {


});