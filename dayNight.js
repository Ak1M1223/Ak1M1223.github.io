$(document).ready(function() {

	var night = true;

	// dzien
	const D_TITLE = '#333';
    const D_BG_ALL = 'linear-gradient(#FFF, #22DDEE)';
	const D_BG_CELL = 'linear-gradient(45deg, #7BB, #FFF)';

	// noc
	const N_TITLE = '#CCC';
	const N_BG_ALL = 'linear-gradient(0, #000000, #555555)';
	const N_BG_CELL = 'linear-gradient(45deg, #454545, #707070)';


	$('#dayNight').click(function() {
		if(night) {
			$('body').css('background-image', D_BG_ALL);
			$('p').css('color', D_TITLE);
			$('.sudoku-board-cell > input').css('background-image', D_BG_CELL);
			$('.sudoku-board-cell > input').css('color', D_TITLE);
			$('button').addClass('btn-primary');
			$('button').removeClass('btn-secondary');
			night = false;
		} else {
			$('body').css('background-image', N_BG_ALL);
			$('p').css('color', N_TITLE);
			$('.sudoku-board-cell > input').css('background-image', N_BG_CELL);
			$('.sudoku-board-cell > input').css('color', N_TITLE);
			$('button').removeClass('btn-primary');
			$('button').addClass('btn-secondary');
			night = true;
		}
		
	});
});