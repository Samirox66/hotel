import $ from 'jquery';

import './toggle.scss';

$(() => {
  $('.js-toggle__form').each(function () {
    if ($(this).find('.js-toggle__input').is(':checked')) {
      $(this).find('.js-toggle__switch').addClass('toggle__switch_active');
      $(this).addClass('toggle__form_active');
      $(this)
        .find('.js-toggle__switch')
        .css({ '-webkit-transform': 'translateX(19px)' });
    }
  });
});

$('.js-toggle__form').on('click', function () {
  if ($(this).find('.js-toggle__input').is(':checked')) {
    $(this).removeClass('toggle__form_active');
    $(this).find('.js-toggle__input').prop('checked', false);
    $(this)
      .find('.js-toggle__switch')
      .css({ '-webkit-transform': 'translateX(0px)' });
    $(this).find('.js-toggle__switch').removeClass('toggle__switch_active');
  } else {
    $(this).find('.js-toggle__switch').addClass('toggle__switch_active');
    $(this).addClass('toggle__form_active');
    $(this).find('.js-toggle__input').prop('checked', true);
    $(this)
      .find('.js-toggle__switch')
      .css({ '-webkit-transform': 'translateX(19px)' });
  }
});
