import './dropdown_width_320px.scss'
import './dropdown_width_266px.scss'
import './iqdropdown.scss'
import './dropdown__buttons.scss'
import './dropdown__buttons_justify-content_flex-end.scss'

document.addEventListener("DOMContentLoaded", function() {
    $('.iqdropdown[data-id=guest]').iqDropdown({
        // max total items
        maxItems: Infinity,
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
                guest = totalItems + ' гостей';
            } else if (totalItems % 10 === 1 && totalItems !== 11) {
                guest = totalItems + ' гость';
            } else if (totalItems % 10 >= 2 && totalItems % 10 <= 4) {
                guest = totalItems + ' гостя';
            } else {
                guest = 'Сколько гостей';
            }
            if (totalItems === 0) {
                $('.dropdown__buttons').find('.button__clear').hide();
            }
            return guest;
        },
        onChange: (id, count, totalItems) => {
            if (count === 0) {
                $(this).find('.button-decrement').prop('disabled', true)
            }
        },
    }),
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
        onChange: (id, count, totalItems) => {
            if (count === 0) {
                //$(this).find('.button-decrement').prop('disabled', true)
            }
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
