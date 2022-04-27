import $ from 'jquery';

import './iqdropdown.scss';
import './dropdown.scss';

const createGuestDropdown = function (dataId, strings) {
  $(`.js-iqdropdown[data-id=${dataId}]`).iqDropdown({
    // max total items
    maxItems: 20,
    // min total items
    minItems: 0,
    // buttons to increment/decrement
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    onChange: () => {
      $('.js-iqdropdown .button-increment').on('click', function () {
        const $menu = $(this).parents('.js-iqdropdown-menu');
        if (
          $menu.find('.dropdown__buttons') &&
          $menu.find('.dropdown__clear-button .button__button').is(':hidden')
        ) {
          $menu.find('.dropdown__clear-button .button__button').show();
        }

        const $buttonDecrement = $(this)
          .parents('.iqdropdown-item-controls')
          .find('.button-decrement');

        if ($buttonDecrement.hasClass('button-decrement_inactive')) {
          $buttonDecrement.removeClass('button-decrement_inactive');
        }
      });
      $('.js-iqdropdown .button-decrement').on('click', function () {
        const itemCount = $(this)
          .parents('.iqdropdown-item-controls')
          .find('.counter')
          .text();
        if (
          itemCount === '0' &&
          !$(this).hasClass('button-decrement_inactive')
        ) {
          $(this).addClass('button-decrement_inactive');
        }
      });
    },
    setSelectionText: (itemCount, totalItems) => {
      let guest;
      const isItemsSuitableForMultipleEnding =
        totalItems % 10 >= 5 || (totalItems >= 10 && totalItems <= 20);
      const isLastNumberOfGuestsBetweenTwoAndFour =
        totalItems % 10 >= 2 && totalItems % 10 <= 4;
      if (isItemsSuitableForMultipleEnding) {
        guest = `${totalItems} ${strings[0]}`;
      } else if (totalItems % 10 === 1) {
        guest = `${totalItems} ${strings[1]}`;
      } else if (isLastNumberOfGuestsBetweenTwoAndFour) {
        guest = `${totalItems} ${strings[2]}`;
      } else {
        guest = strings[strings.length - 1];
      }

      if (itemCount.babies > 0) {
        const isBabiesSuitableForMultipleEnding =
          itemCount.babies % 10 >= 5 ||
          (itemCount.babies >= 10 && itemCount.babies <= 20);
        const isLastNumberOfBabiesBetweenTwoAndFour =
          itemCount.babies % 10 >= 2 && itemCount.babies % 10 <= 4;
        if (isBabiesSuitableForMultipleEnding) {
          guest += `, ${itemCount.babies} младенцев`;
        } else if (itemCount.babies % 10 === 1) {
          guest += `, ${itemCount.babies} младенец`;
        } else if (isLastNumberOfBabiesBetweenTwoAndFour) {
          guest += `, ${itemCount.babies} младенца`;
        }
      }
      if (totalItems === 0) {
        $(
          `.js-iqdropdown[data-id=${dataId}] .button__clear .button__button`
        ).hide();
      } else {
        $(
          `.js-iqdropdown[data-id=${dataId}] .button__clear .button__button`
        ).show();
      }

      return guest;
    },
  });
};

$(() => {
  createGuestDropdown('guest1', ['гостей', 'гость', 'гостя', 'Сколько гостей']);
  createGuestDropdown('guest2', ['гостей', 'гость', 'гостя', 'Сколько гостей']);
  createGuestDropdown('guest3', ['гостей', 'гость', 'гостя', 'Сколько гостей']);
  createGuestDropdown('guest-search-room', [
    'гостей',
    'гость',
    'гостя',
    'Сколько гостей',
  ]);
  createGuestDropdown('guest-room-details', [
    'гостей',
    'гость',
    'гостя',
    'Сколько гостей',
  ]);
  createGuestDropdown('ui-kit-room-guest', [
    'гостей',
    'гость',
    'гостя',
    'Сколько гостей',
  ]);
  createGuestDropdown('landing-page-guest', [
    'гостей',
    'гость',
    'гостя',
    'Сколько гостей',
  ]);
  $('.js-iqdropdown[data-id=furniture]').iqDropdown({
    // max total items
    maxItems: 20,
    // min total items
    minItems: 0,
    // buttons to increment/decrement
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    onChange: () => {
      $('.js-iqdropdown .button-increment').on('click', function () {
        const $buttonDecrement = $(this)
          .parents('.iqdropdown-item-controls')
          .find('.button-decrement');
        if ($buttonDecrement.hasClass('button-decrement_inactive')) {
          $buttonDecrement.removeClass('button-decrement_inactive');
        }
      });
      $('.js-iqdropdown .button-decrement').on('click', function () {
        const itemCount = $(this)
          .parents('.iqdropdown-item-controls')
          .find('.counter')
          .text();
        if (
          itemCount === '0' &&
          !$(this).hasClass('button-decrement_inactive')
        ) {
          $(this).addClass('button-decrement_inactive');
        }
      });
    },
    setSelectionText: (itemCount) => {
      let furniture = '';
      if (itemCount.rooms !== 0) {
        const isLastNumberBetweenTwoAndFour =
          itemCount.rooms >= 2 && itemCount.rooms <= 4;
        if (itemCount.rooms === 1) {
          furniture += `${itemCount.rooms} спальня`;
        } else if (isLastNumberBetweenTwoAndFour) {
          furniture += `${itemCount.rooms} спальни`;
        } else {
          furniture += `${itemCount.rooms} спален`;
        }

        if (itemCount.bed !== 0) {
          furniture += ', ';
        }
      }

      const isLastNumberBetweenTwoAndFour =
        itemCount.bed >= 2 && itemCount.bed <= 4;
      if (itemCount.bed === 1) {
        furniture += `${itemCount.bed} кровать`;
      } else if (isLastNumberBetweenTwoAndFour) {
        furniture += `${itemCount.bed} кровати`;
      } else if (itemCount.rooms > 4) {
        furniture = `${itemCount.bed} кроватей`;
      }

      furniture += '...';
      return furniture;
    },
  });
  $('.icon-decrement').text('-');
  $('.icon-increment').text('+');
  $('.iqdropdown-selection::after')
    .addClass('material-icons')
    .addClass('material-icons__expand-more')
    .text('expand_more');
  $('.js-iqdropdown.js-iqdropdown__checkbox-list')
    .find('.iqdropdown-item-controls')
    .addClass('checkbox-list__controls');
});

$(() => {
  const $dropdownMenus = $(
    '.js-iqdropdown .dropdown__clear-button .button__button'
  ).parents('.iqdropdown-menu');
  [...$dropdownMenus].forEach((dropdownMenu) => {
    const itemCount = $(dropdownMenu)
      .find('.counter')
      .text()
      .slice(0, -1)
      .split('');
    const sum = itemCount.reduce((res, current) => res + current);
    if (sum === '000') {
      $(dropdownMenu).find('.dropdown__clear-button .button__button').hide();
    }
  });

  $('.js-iqdropdown .counter').each(function () {
    if ($(this).text() === '0') {
      $(this)
        .parent()
        .find('.button-decrement')
        .addClass('button-decrement_inactive');
    }
  });
});

$('.js-iqdropdown .dropdown__submit-button .button__button').on(
  'click',
  function () {
    $(this).parents('.iqdropdown').removeClass('menu-open');
  }
);

$(document).on('mouseup', function (e) {
  let $dropdowns = $('.iqdropdown');
  [...$dropdowns].forEach((dropdown) => {
    if (!$(dropdown).is(e.target) && $(dropdown).has(e.target).length === 0) {
      $(dropdown).removeClass('menu-open');
    }
  });
});

$('.js-iqdropdown .dropdown__clear-button .button__button').on(
  'click',
  function () {
    const controlId = ['adults', 'kids', 'babies'];
    const itemCount = $(this)
      .parents('.iqdropdown-menu')
      .find('.counter')
      .text()
      .slice(0, -1)
      .split('');
    for (let i = 0; i < controlId.length; i += 1) {
      while (itemCount[i] !== '0') {
        $(this)
          .parents('.js-iqdropdown-menu')
          .find(
            `.js-iqdropdown-menu-option[data-id=${controlId[i]}] .button-decrement`
          )
          .trigger('click');
        itemCount[i] = String(Number(itemCount[i]) - 1);
      }
    }

    $(this)
      .parents('.js-iqdropdown-menu')
      .find('.button-decrement')
      .addClass('button-decrement_inactive');
    $(this).hide();
  }
);
