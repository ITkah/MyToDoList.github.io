$(document).ready(function(){

	var $newItemForm = $('#newItemForm');
	var $delete = $('.filter');

	$delete.hide();

	$newItemForm.on('submit', function(e){
		e.preventDefault();
		var newText = $('input:text').val();

		if(newText.length==0){
			alert('Пусто');
			console.log(newText.length);
			return;
		}

		$delete.show();

		$('ol').append('<li>' + newText + '</li>');

		$('li').on('click', function(){
			$(this).fadeOut(600, function(){
				$(this).remove();
			});
			$(this).css({
				"text-decoration": "line-through"
			});

			if($('ol').children().length <=2){
			$delete.hide();
			}

		});

		$('.filter').click( function(){
			$('li').fadeOut(600, function(){
				$(this).remove();
			});
			$('li').css({
				"text-decoration": "line-through"
			});
			$(this).fadeOut(600);
		});
	});

});


