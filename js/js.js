$(document).ready(function(){

	var $newItemForm = $('#newItemForm');
	var $textInput = $('input:text');
	var $delete = $('.filter');

	$delete.hide();

	$newItemForm.on('submit', function(e){
		e.preventDefault();
		var newText = $('input:text').val();

		$delete.show();

		$('ol').append('<li>' + newText + '</li>');

		$('li').on('click', function(){
			$(this).fadeOut(600);
			$(this).css({
				"text-decoration": "line-through"
			});
		});

		$('.filter').click( function(){
			$('li').fadeOut(600);
			$('li').css({
				"text-decoration": "line-through"
			});
			$(this).fadeOut(600);
		});
	});

});


