var clickToggle = false;
$(document).ready(
	function(){
		console.log("hi");
		var width = $(window).width();
		console.log("page width: " + width);
		
		if(width < 785){
			$(".nav-toggle").show();
			$(".col-6of10").hide();
			$(".ham").show();
		}
		if(width > 785){
			$(".nav-toggle").hide();
			$(".col-6of10").show();
			$(".ham").hide();
		}
		
		$(".nav-toggle").click(
			function(){
				$(".col-6of10").slideToggle(800);
				if(clickToggle == false){
					clickToggle = true;
					document.getElementById("menuText").innerHTML = "Close Menu";
				}
				else if(clickToggle == true){
					clickToggle = false;
					document.getElementById("menuText").innerHTML = "Menu";
				}
			}
		);
	}
);

//make the menu window show up dynamic
$(window).resize(function() {
	var width = $(window).width();
	console.log(width);
	if(width < 785){
		$(".nav-toggle").show();
		$(".col-6of10").hide();
		$(".ham").show();
	}
	if(width > 785){
		$(".nav-toggle").hide();
		$(".col-6of10").show();
		$(".ham").hide();
		document.getElementById("menuText").innerHTML = "Menu";
	}
});