$(document).ready(function(){

	var $newItemForm = $('#newItemForm');
	var $textInput = $('input:text');

	$newItemForm.on('submit', function(e){
		e.preventDefault();
		var newText = $('input:text').val();

		$('ol').append('<li>' + newText + '</li>');


		$('li').on('click', function(){
			$(this).fadeOut(600);
			$(this).css({
				"text-decoration": "line-through"
			});
		});

	});

});