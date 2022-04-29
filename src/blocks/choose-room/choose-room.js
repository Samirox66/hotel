import './choose-room.scss';
import $ from 'jquery';

$('.js-choose-room__img').on('mouseover', function () {
  $(this)
    .children('.choose-room__img-expand')
    .removeClass('choose-room__img-expand_display_none');
  $(this)
    .children('.choose-room__dots')
    .removeClass('choose-room__dots_display_none');
});

$('.js-choose-room__img').on('mouseleave', function () {
  $(this)
    .children('.choose-room__img-expand')
    .addClass('choose-room__img-expand_display_none');
  $(this)
    .children('.choose-room__dots')
    .addClass('choose-room__dots_display_none');
});

$('.js-choose-room__dot').on('click', function () {
  const newImg = $(this).attr('data-class');
  const $roomImg = $(this).parents('.choose-room__img');
  $roomImg
    .removeClass()
    .addClass(`js-choose-room__img choose-room__img ${newImg}`);
  $roomImg
    .find('.choose-room__dot')
    .removeClass('choose-room__dot_background_white');
  $(this).addClass('choose-room__dot_background_white');
});

$('.js-choose-room__img-expand').on('click', function () {
  const $roomImg = $(this).parents('.choose-room__img');
  const currentImg = $(this).parent().attr('class').slice(37);
  const dots = $(this).parent().find('.choose-room__dot');
  const currentDot = [...dots].find(
    (dot) => $(dot).attr('data-class') === currentImg
  );
  let index = [...dots].indexOf(currentDot);
  $roomImg
    .find('.choose-room__dot')
    .removeClass('choose-room__dot_background_white');
  if ($(this).children('.choose-room__expand-left').length) {
    index = index - 1 < 0 ? 3 : index - 1;
  } else {
    index = index + 1 > 3 ? 0 : index + 1;
  }
  const newImg = $([...dots][index]).attr('data-class');
  $roomImg
    .removeClass()
    .addClass(`js-choose-room__img choose-room__img ${newImg}`);
  $([...dots][index]).addClass('choose-room__dot_background_white');
});
