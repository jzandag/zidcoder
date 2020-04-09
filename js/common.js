const liActive = (li) => {
	$('.menu_nav li').removeClass('active');
    $('.menu_nav .'+li).addClass('active');
};