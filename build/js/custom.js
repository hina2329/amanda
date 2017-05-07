//var tabItems = document.getElementById("tabs").getElementsByTagName("li");
//
//for (i = 0; i < tabItems.length; i++) {
//    var anchor = tabItems[i].getElementsByTagName("a");
//    //console.log(anchor[0].getAttribute("href"));
//    anchor[0].addEventListener("click", function(){
//        alert(this.getAttribute("href"));
//    });
//}
//
//
//Review Rating

var ratingStars = document.getElementById("rating").getElementsByClassName("stars");
for (i = 0; i < ratingStars.length; i++) {
    ratingStars[i].addEventListener("click", activeStars);
}
function activeStars() {
    for (i = 0; i < ratingStars.length; i++) {
        ratingStars[i].classList.remove("active");
    }
    this.classList.add("active");
    }
//Review Partner

var partnerRating = document.getElementById("partners").getElementsByClassName("rate");
for (a = 0; a < partnerRating.length; a++) {
    partnerRating[a].addEventListener("click", activePartner);
}
function activePartner() {
    for (a = 0; a < partnerRating.length; a++) {
        partnerRating[a].classList.remove("active");
    }
    this.classList.add("active");
}

