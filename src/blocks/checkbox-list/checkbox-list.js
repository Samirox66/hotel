import './checkbox-list.scss';

$('.iqdropdown__checkbox-list').on('click', function() {
    if ($(this).hasClass('menu-open')) {
        $(this).removeClass('menu-open').find('.material-icons').css('transform', 'rotate(180deg)');
    } else {
        $(this).addClass('menu-open').find('.material-icons').css('transform', 'rotate(0deg)');
    }
});
