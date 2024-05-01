// JavaScript to clone the menu container
document.querySelector(".addMoreButton").addEventListener("click", function () {
  var mainContainer = document.getElementById("mainContainer");
  var clonedContainer = mainContainer.cloneNode(true);

  var inputs = clonedContainer.querySelectorAll('input');
  inputs.forEach(function (input) {
      input.value = '';
  });

  // Log a message to verify the click event
  console.log("Add More button clicked");

  // Append the cloned container after the last occurrence of the main container
  mainContainer.parentNode.insertBefore(clonedContainer, mainContainer.nextSibling);
});




/* document.querySelectorAll(".add-more-button").forEach(function(button) {
  button.addEventListener("click", function() {
    var mainContainer = document.getElementById("mainContainer");
    var clonedContainer = mainContainer.cloneNode(true);

    // Clear input values in the cloned container
    clonedContainer.querySelectorAll('input').forEach(function(input) {
      input.value = '';
    });

    // Update IDs of elements in cloned container to maintain uniqueness
    clonedContainer.querySelectorAll('[id]').forEach(function(element) {
      var oldId = element.id;
      var newId = oldId + "-clone"; // Appending "-clone" to maintain uniqueness
      element.id = newId;
    });

    // Insert the cloned container before the button
    mainContainer.parentNode.insertBefore(clonedContainer, button);
  });
});  */