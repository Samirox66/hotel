import $ from 'jquery';

import './toggle.scss';
import './toggle__input.scss';
import './toggle__switch.scss';
import './toggle__text.scss';
import './toggle__form_active.scss';
import './toggle__switch_active.scss';
import './toggle__form.scss';
import './toggle_margin-bottom_10px.scss';

$(function() {
  $('.toggle__form').each(function () {
    if ($(this).find('.toggle__input').is(':checked')) {
      $(this).find('.toggle__switch').addClass('toggle__switch_active');
      $(this).addClass('toggle__form_active');
      $(this).find('.toggle__switch').css({ '-webkit-transform': 'translateX(19px)' });
    }
  });
})

$('.toggle__form').on('click', function () {
  if ($(this).find('.toggle__input').is(':checked')) {
    $(this).removeClass('toggle__form_active');
    $(this).find('.toggle__input').prop('checked', false);
    $(this).find('.toggle__switch').css({ '-webkit-transform': 'translateX(0px)' });
    $(this).find('.toggle__switch').removeClass('toggle__switch_active');
  } else {
    $(this).find('.toggle__switch').addClass('toggle__switch_active');
    $(this).addClass('toggle__form_active');
    $(this).find('.toggle__input').prop('checked', true);
    $(this).find('.toggle__switch').css({ '-webkit-transform': 'translateX(19px)' });
  }
});
