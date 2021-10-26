import './dropdown_width_320px.scss'
import './dropdown_width_266px.scss'
import './iqdropdown.scss'
import './dropdown__buttons.scss'
import './dropdown__buttons_justify-content_flex-end.scss'

let createGuestDropdown = function(dataId, strings) {
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
            if (totalItems === 0) {
                $('.iqdropdown[data-id=' + dataId + '] .button__clear .button__button').hide();
            } else {
                $('.iqdropdown[data-id=' + dataId + '] .button__clear .button__button').show();
            }
            return guest;
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    createGuestDropdown('guest1', ['гостей', 'гость', 'гостя', 'Сколько готсей']),
    createGuestDropdown('guest2', ['гостей', 'гость', 'гостя', 'Сколько готсей']),
    createGuestDropdown('guest3', ['гостей', 'гость', 'гостя', 'Сколько готсей']),
    createGuestDropdown('guest-search-room', ['гостей', 'гость', 'гостя', 'Сколько готсей']),
    createGuestDropdown('guest-room-details', ['гостей', 'гость', 'гостя', 'Сколько готсей']),
    createGuestDropdown('ui-kit-room-guest', ['гостей', 'гость', 'гостя', 'Сколько готсей']),
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
        }
    })
    $('.icon-decrement').text('-');
    $('.icon-increment').text('+');
    $('.iqdropdown-selection::after').addClass('material-icons').addClass('material-icons__expand-more').text('expand_more');
    $('.iqdropdown.iqdropdown__checkbox-list').find('.iqdropdown-item-controls').addClass('checkbox-list__controls');
})

$('.iqdropdown .button__submit .button__button').on('click', function() {
    $(this).parents('.iqdropdown').removeClass('menu-open')
})

$('.iqdropdown .button__clear .button__button').on('click', function() {
    let controlId = ['adults', 'kids', 'babies']
    let dataId = $(this).parents('.iqdropdown').attr('data-id')
    let itemCount = ($(this).parents('.iqdropdown-menu').find('.counter').text()).slice(0, -1).split('')
    for (let i = 0; i < controlId.length; i++) {
        while (itemCount[i] != 0) {
            $(this).parents('.iqdropdown-menu').find('.iqdropdown-menu-option[data-id=' + controlId[i] + '] .button-decrement').trigger('click')
            itemCount[i]--
        }
    }
})