lucide.createIcons();
var exploreButtons = document.querySelectorAll(".category button");

exploreButtons.forEach(function(button){
  button.addEventListener("click", function(){
    //var selectedCategory = button.closest("card").querySelector("h2").textContent;
    var selectedCategory = button.className.replace("Explore-", "");

    console.log(selectedCategory);

    window.location.href = "quiz.html?category=" + selectedCategory;
  });
});