import './dropdown_width_320px.scss'
import './dropdown_width_266px.scss'
import './iqdropdown.scss'
import './dropdown__buttons.scss'

document.addEventListener("DOMContentLoaded", function() {
    $('.iqdropdown').iqDropdown({
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
            return guest;
        },
        onChange: (id, count, totalItems) => {
            if (count === 0) {
                console.log(count)
                $('#' + id).find('.button-decrement').addClass('button-decrement_disabled')
            }
        },
    })
    //$(this).find('.dropdown__buttons_margin-left_14px').hide();
    $('.icon-decrement').text('-')
    $('.icon-increment').text('+')
    $('.iqdropdown-selection::after').addClass('material-icons').addClass('material-icons__expand-more').text('expand_more')
    $('.iqdropdown.iqdropdown__checkbox-list').find('.iqdropdown-item-controls').addClass('checkbox-list__controls')
})
