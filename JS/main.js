
$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

function MyBtn(){
    var Links = document.getElementById("nav-links");
    Links.classList.toggle("links-active")
}

function myDropdown(){
	var dropDown = document.getElementById("dropToggle");
	dropDown.classList.toggle("dropToggle-active")
}
