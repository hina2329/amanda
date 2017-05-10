// var tabItems = document.getElementById("tabs").getElementsByTagName("li");

// for (i = 0; i < tabItems.length; i++) {
//     var anchor = tabItems[i].getElementsByTagName("a");
//     //console.log(anchor[0].getAttribute("href"));
//     anchor[0].addEventListener("click", function(){
//         alert(this.getAttribute("href"));
//     });
// }




//Review Rating
if (document.getElementsByClassName("stars").length > 0) {

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

}


//Review Partner
if (document.getElementsByClassName("rate").length > 0) {
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
}


// FAQ Tabs
if (document.getElementById("tabs") !== null) {

    var faqs = document.getElementById("tabs").getElementsByTagName("li");

    for (var i = 0; i < faqs.length; i++) {

        var link = faqs[i].getElementsByTagName("a");

        faqs[i].addEventListener("click", activeIt);

        link[0].addEventListener("click", getTab);


    }

    function getTab(e) {

        var tabID = (this.hash).replace("#", "");
        var tab = document.getElementById(tabID);
        var tabs = document.getElementsByClassName("tab");

        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }

        tab.style.display = "block";

        e.preventDefault();

    }

    function activeIt() {

        for (var i = 0; i < faqs.length; i++) {

            faqs[i].classList.remove("active");

        }

        this.classList.add("active");

    }

}
//// FAQ Read More
//if (document.getElementById("tabWrap") !== null) {
//    
//    var faqMore = document.getElementById("tabWrap").getElementsByClassName("faqHeading");
//    
// for (more = 0; more< faqMore.length; more++) {
//     
//        faqMore[more].addEventListener("click", activeFQA);
//
//    }
//    function activeFQA(e) {
//  
//        for (a = 0; a < faqMore.length; a++) {
//            faqMore[a].classList.toggle("active");
//        }
//          e.preventDefault();
//    }
//  
// 
//  
//   
//         
//}
// jQuery
jQuery(function () {

//    FQA description accordian
    jQuery('#faqHeading a').click(function () {

        jQuery(this).parent('#faqHeading').find('.faqContent').slideToggle();

        jQuery(this).toggleClass('.active');


        return false;





    });


});