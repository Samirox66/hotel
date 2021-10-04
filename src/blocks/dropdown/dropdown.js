import './dropdown.scss'

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
        }
    })
    $(this).find('.icon-decrement').text('-')
    $(this).find('.icon-increment').text('+')
    $(this).find('.iqdropdown-selection::after').addClass('material-icons').addClass('material-icons__expand-more').text('expand_more')
})
