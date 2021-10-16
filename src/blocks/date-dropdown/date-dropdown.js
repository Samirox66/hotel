import "./date-dropdown.scss"
import "./date-dropdown__label.scss"
import "./date-dropdown__label_height_44px.scss"
import "./date-dropdown__label_width_150px.scss"
import "./date-dropdown__label_width_266px.scss"
import "./date-dropdown__input.scss"
import './date-dropdown__input_width_103px.scss'
import './date-dropdown__input_height_24px.scss'
import './air-datepicker.scss'

let submitButton = {
    content: 'Применить',
    classname: 'button_color_blue button_border_none button_background-color_white',
    onClick: (dp) => {
        dp.hide()
    }
}

import AirDatepicker from "air-datepicker"
new AirDatepicker("#filter-date-dropdown-ui-kit", {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    range: true,
    multipleDatesSeparator: " - ",
    selectedDates: [new Date("19 авг"), new Date("23 авг")],
    buttons: ['clear', submitButton]
})
new AirDatepicker("#date-dropdown-ui-kit1", {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton]
})
new AirDatepicker("#date-dropdown-ui-kit-cards1", {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton],
    range: true,
    prevHtml: `<div class="material-icons material-icons__arrow-back">arrow_back</div>`,
    nextHtml: `<div class="material-icons material-icons__arrow-forward material-icons__arrow-forward_color_blue">arrow_forward</div>`,
    onSelect: function(fd, d, picker) {
        $(".date-dropdown__departure").val(fd.split("-")[0]);
        $(".date-dropdown__arrival").val(fd.split("-")[1]);
      }
})
new AirDatepicker("#date-dropdown-ui-kit-cards2", {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    range: true,
    selectedDates: [new Date(2019, 7, 19), new Date(2019, 7, 23)],
    buttons: ['clear', submitButton]
})
new AirDatepicker('#static-date', {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton],
    classes: ''
})
new AirDatepicker('#landing', {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    buttons: ['clear', submitButton],
    selectedDates: [new Date("19 авг"), new Date("23 авг")],
})
