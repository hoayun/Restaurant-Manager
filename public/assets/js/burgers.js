$(function () {
  $(".change").on("click", function (event) {
    var id = $(this).data("id");
    if ($(this).data("ready") === 0) {
      var change = 1
      $(this).attr("data-ready", 1);
    }
    else{
      var change = 0
      $(this).attr("data-ready", 0);
    

    };

    var newReady = {
      ready: change
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newReady
    }).then(
      function () {
        console.log("changed status to", change);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTable = {
      table_number: $("#tablenumber").val().trim(),
      ready: false
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newTable
    }).then(
      function () {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});
