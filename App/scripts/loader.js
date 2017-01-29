$(document).ready(function() {
	setTimeout(function(){
		$('#loader_wrapper h1').fadeTo(400, 1).delay(2000).fadeTo(400, 0);
		$('#loader_wrapper h1 span').delay(500).fadeTo(400, 1).delay(1000).fadeTo(400, 0);
	}, 300);

    setTimeout(function(){
        $('#loader_wrapper').hide('slide', { direction: 'left' }, 'fast');
    }, 3500);
});