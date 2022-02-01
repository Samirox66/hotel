import './dropdown_width_320px.scss'
import './dropdown_width_266px.scss'
import './iqdropdown.scss'
import './dropdown__buttons.scss'
import './dropdown__buttons_justify-content_flex-end.scss'
import './dropdown__clear-button.scss'
import './dropdown__submit-button.scss'

const createGuestDropdown = function(dataId, strings) {
    $('.iqdropdown[data-id=' + dataId + ']').iqDropdown({
        // max total items
        maxItems: 20,
        // min total items
        minItems: 0,
        // buttons to increment/decrement
        controls: {
            position: 'right',
            displayCls: 'iqdropdown-item-display',
            controlsCls: 'iqdropdown-item-controls',
            counterCls: 'counter'
        },
        onChange: (id, count, totalItems) => {
            $('.iqdropdown .button-increment').on('click', function() {
                if ($(this).parents('.iqdropdown-menu').find('.dropdown__buttons') && $(this).parents('.iqdropdown-menu').find('.dropdown__clear-button').is(':hidden')) {
                    $(this).parents('.iqdropdown-menu').find('.dropdown__clear-button').show();
                }
            });
        },
        setSelectionText: (itemCount, totalItems) => {
            let guest;
            if (totalItems % 10 >= 5 || totalItems >= 10 && totalItems <= 20) {
                guest = totalItems + ' ' + strings[0];
            } else if (totalItems % 10 === 1 && totalItems !== 11) {
                guest = totalItems + ' ' + strings[1];
            } else if (totalItems % 10 >= 2 && totalItems % 10 <= 4) {
                guest = totalItems + ' ' + strings[2];
            } else {
                guest = strings[3];
            }

            if (itemCount.babies > 0) {
                if (itemCount.babies % 10 >= 5 || itemCount.babies >= 10 && itemCount.babies <= 20) {
                    guest += ', ' + itemCount.babies + ' младенцев'
                } else if (itemCount.babies % 10 === 1 && itemCount.babies !== 11) {
                    guest += ', ' + itemCount.babies + ' младенец'
                } else if (itemCount.babies % 10 >= 2 && itemCount.babies % 10 <= 4) {
                    guest += ', ' + itemCount.babies + ' младенца'
                }
            }

            if (totalItems === 0) {
                $('.iqdropdown[data-id=' + dataId + '] .button__clear .button__button').hide();
            } else {
                $('.iqdropdown[data-id=' + dataId + '] .button__clear .button__button').show();
            }

            return guest;
        },
    });
};

document.addEventListener("DOMContentLoaded", function() {
    createGuestDropdown('guest1', ['гостей', 'гость', 'гостя', 'Сколько гостей']),
    createGuestDropdown('guest2', ['гостей', 'гость', 'гостя', 'Сколько гостей']),
    createGuestDropdown('guest3', ['гостей', 'гость', 'гостя', 'Сколько гостей']),
    createGuestDropdown('guest-search-room', ['гостей', 'гость', 'гостя', 'Сколько гостей']),
    createGuestDropdown('guest-room-details', ['гостей', 'гость', 'гостя', 'Сколько гостей']),
    createGuestDropdown('ui-kit-room-guest', ['гостей', 'гость', 'гостя', 'Сколько гостей']),
    createGuestDropdown('landing-page-guest', ['гостей', 'гость', 'гостя', 'Сколько гостей']),
    $('.iqdropdown[data-id=furniture]').iqDropdown({
        // max total items
        maxItems: 20,
        // min total items
        minItems: 0,
        // buttons to increment/decrement
        controls: {
            position: 'right',
            displayCls: 'iqdropdown-item-display',
            controlsCls: 'iqdropdown-item-controls',
            counterCls: 'counter'
        },
        setSelectionText: (itemCount, totalItems) => {
            let furniture = '';
            if (itemCount.rooms != 0) {
                if (itemCount.rooms == 1) {
                    furniture += itemCount.rooms + ' спальня'
                } else if (itemCount.rooms >= 2 && itemCount.rooms <= 4) {
                    furniture += itemCount.rooms + ' спальни'
                } else {
                    furniture += itemCount.rooms + ' спален'
                }
                if (itemCount.bed != 0) {
                    furniture += ', '
                }
            }
            if (itemCount.bed == 1) {
                furniture += itemCount.bed + ' кровать'
            } else if (itemCount.bed >= 2 && itemCount.bed <= 4) {
                furniture += itemCount.bed + ' кровати'
            } else if (itemCount.rooms > 4) {
                furniture = itemCount.bed + ' кроватей'
            }
            furniture += '...'
            return furniture
        },
    }),
    $('.icon-decrement').text('-');
    $('.icon-increment').text('+');
    $('.iqdropdown-selection::after').addClass('material-icons').addClass('material-icons__expand-more').text('expand_more');
    $('.iqdropdown.iqdropdown__checkbox-list').find('.iqdropdown-item-controls').addClass('checkbox-list__controls');
});

$('.iqdropdown .dropdown__submit-button .button__button').on('click', function() {
    $(this).parents('.iqdropdown').removeClass('menu-open');
});

$('.iqdropdown .dropdown__clear-button .button__button').on('click', function() {
    const controlId = ['adults', 'kids', 'babies'];
    const itemCount = ($(this).parents('.iqdropdown-menu').find('.counter').text()).slice(0, -1).split('');
    for (let i = 0; i < controlId.length; i++) {
        while (itemCount[i] != 0) {
            $(this).parents('.iqdropdown-menu').find('.iqdropdown-menu-option[data-id=' + controlId[i] + '] .button-decrement').trigger('click');
            itemCount[i] -= 1;
        }
    }
    $(this).parents('.dropdown__clear-button').hide();
});
