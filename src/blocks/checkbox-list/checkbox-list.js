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
})