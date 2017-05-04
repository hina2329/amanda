var tabItems = document.getElementById("tabs").getElementsByTagName("li");

for (i = 0; i < tabItems.length; i++) {
    var anchor = tabItems[i].getElementsByTagName("a");
    //console.log(anchor[0].getAttribute("href"));
    anchor[0].addEventListener("click", function(){
        alert(this.getAttribute("href"));
    });
}
