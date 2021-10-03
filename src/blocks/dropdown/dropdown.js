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
    $(this).find('#rooms .counter').text(2)
    $(this).find('#bed .counter').text(2)
})

$('.button-increment').on('click', function() {
    var increment = parseInt($(this).find('.counter').text()) + 1
    $(this).find('.counter').text(increment)
})

$('.button-decrement').on('click', function(){
    var decrement = parseInt($(this).find('.counter').text()) -1
    $(this).find('.counter').text(decrement)
})