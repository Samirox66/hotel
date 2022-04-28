import $ from 'jquery';

import './checkbox-list.scss';

$('.js-iqdropdown__checkbox-list').on('click', function (event) {
  if (
    $(this).hasClass('menu-open') &&
    !$(event.target).parents().hasClass('iqdropdown-menu')
  ) {
    $(this)
      .removeClass('menu-open')
      .find('.material-icons')
      .css('transform', 'rotate(180deg)');
  } else {
    $(this)
      .addClass('menu-open')
      .find('.material-icons')
      .css('transform', 'rotate(0deg)');
  }
});
