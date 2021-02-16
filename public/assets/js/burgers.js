$(function() {
    $(".change-eat").on("click", function(event) {
        event.preventDefault();
        var id = $(this).val();
        console.log("devoured button clicked");
        var id = $(this).data("id");
  
      var newDevourState = {
        devoured: true
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".again").on("click", function(event) {
      event.preventDefault();
      var id = $(this).val();
      console.log("again button clicked");
      var id = $(this).data("id");

    var newDevourState = {
      devoured: false
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
     
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: false
      };
    

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
