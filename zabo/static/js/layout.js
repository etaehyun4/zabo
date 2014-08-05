function applyEvent(id) {
	$(id).mouseenter(function(){
		$(id).css("background-color","#35AE9D");
		$(id+">.subcategory").show();
	});
	$(id).mouseleave(function(){
		$(id).css("background-color","#76CCE7");
		$(id+">.subcategory").hide();
	});
}

$(document).ready(function(){
	applyEvent("#newbie");
	applyEvent("#perform");
	applyEvent("#temp");
});