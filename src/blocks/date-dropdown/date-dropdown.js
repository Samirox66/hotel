import "./date-dropdown.scss"
import "./date-dropdown__label.scss"
import "./date-dropdown__input.scss"
import './date-dropdown__input_width_103px.scss'
import './date-dropdown__input_height_24px.scss'
import './date-dropdown__label_margin-left_20px.scss'
import './air-datepicker.scss'

let submitButton = {
    content: 'Применить',
    classname: 'button_color_blue button_border_none button_background-color_white',
    onClick: (dp) => {
        dp.hide()
    }
}

import AirDatepicker from "air-datepicker"
new AirDatepicker("#date-dropdown-ui-kit1", {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton],
    range: true,
    multipleDates: 2,
    showEvent: 'click',
    prevHtml: `<div class="material-icons material-icons__arrow-back">arrow_back</div>`,
    nextHtml: `<div class="material-icons material-icons__arrow-forward material-icons__arrow-forward_color_blue">arrow_forward</div>`,
    onSelect({date, formattedDate, datepicker}) {
        $('#date-dropdown-ui-kit1_arrival').val(formattedDate[1])
        $('#date-dropdown-ui-kit1').val(formattedDate[0])
    }
})
new AirDatepicker("#date-dropdown-ui-kit-cards1", {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton],
    range: true,
    multipleDates: 2,
    showEvent: 'click',
    prevHtml: `<div class="material-icons material-icons__arrow-back">arrow_back</div>`,
    nextHtml: `<div class="material-icons material-icons__arrow-forward material-icons__arrow-forward_color_blue">arrow_forward</div>`,
    onSelect({date, formattedDate, datepicker}) {
        $('#date-dropdown-ui-kit-cards1_arrival').val(formattedDate[1])
        $('#date-dropdown-ui-kit-cards1').val(formattedDate[0])
    }

})
new AirDatepicker("#date-dropdown-ui-kit-cards2", {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton],
    range: true,
    multipleDates: 2,
    showEvent: 'click',
    prevHtml: `<div class="material-icons material-icons__arrow-back">arrow_back</div>`,
    nextHtml: `<div class="material-icons material-icons__arrow-forward material-icons__arrow-forward_color_blue">arrow_forward</div>`,
    onSelect({date, formattedDate, datepicker}) {
        $('#date-dropdown-ui-kit-cards2_arrival').val(formattedDate[1])
        $('#date-dropdown-ui-kit-cards2').val(formattedDate[0])
    }
})
new AirDatepicker('#static-date', {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton],
    classes: '',
    prevHtml: `<div class="material-icons material-icons__arrow-back">arrow_back</div>`,
    nextHtml: `<div class="material-icons material-icons__arrow-forward material-icons__arrow-forward_color_blue">arrow_forward</div>`,

})
new AirDatepicker('#date-dropdown-landing', {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton],
    range: true,
    multipleDates: 2,
    showEvent: 'click',
    prevHtml: `<div class="material-icons material-icons__arrow-back">arrow_back</div>`,
    nextHtml: `<div class="material-icons material-icons__arrow-forward material-icons__arrow-forward_color_blue">arrow_forward</div>`,
    onSelect({date, formattedDate, datepicker}) {
        $('#date-dropdown-landing_arrival').val(formattedDate[1])
        $('#date-dropdown-landing').val(formattedDate[0])
    }
})

$(".date-dropdown__input[data-class=arrival]").on('click', function() {
    $(this).parents(".date-dropdown").find(".date-dropdown__input[data-class=departure").trigger('click')
})
