/* Function to add items to a list */

$(document).on('click', 'button#add-to-list', function (){
var inputItem = $("input#item").val();
addToList(inputItem);
$("input#item").val("");
$("input#item").focus();
});

function addToList(item) {
var list = $("ol#items");

/* Add to the bottom of the list */

list.append("<li>" + item + "<span class='label pending'>Pending</span></li>");
}

/* Change lable from 'pending' to done */

$(document).on('click', 'span.label.pending', function(){
var item = $(this).parent();
item.addClass("complete");
item.append("<span class='label success'>Done!</span>");
$(this).remove();
});

/* Delete item from list */

$(document).on('click', 'span.label.success', function(){
	$(this).parent().remove();
});

/* Google maps API function 
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(41.6639729,8.3359013),
          zoom: 2
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }

       google.maps.event.addDomListener(window, 'load', initialize); 
