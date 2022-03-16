import $ from 'jquery';

import './like-button.scss';

$('.js-like-button__button').on('click', function () {
  const text = $(this).find('.js-like-button__number').text();
  let number = Number(text);
  if ($(this).hasClass('like-button__button_active')) {
    number -= 1;
    $(this).removeClass('like-button__button_active');
    $(this).find('.js-like-button__number').removeClass('like-button__number_active');
    $(this).find('.material-icons').removeClass('material-icons__favorite').addClass('material-icons__favorite-border')
      .text('favorite_border');
    $(this).find('.js-like-button__number').text(number);
  } else {
    number += 1;
    $(this).addClass('like-button__button_active');
    $(this).find('.js-like-button__number').addClass('like-button__number_active');
    $(this).find('.material-icons').removeClass('material-icons__favorite-border').addClass('material-icons__favorite')
      .text('favorite');
    $(this).find('.js-like-button__number').text(number);
  }
});
