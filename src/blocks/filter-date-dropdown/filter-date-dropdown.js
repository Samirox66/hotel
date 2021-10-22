import './filter-date-dropdown.scss'
import './filter-date-dropdown__label.scss'
import './filter-date-dropdown__input.scss'

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
    multipleDates: 2,
    multipleDatesSeparator: " - ",
    dateFormat: 'd MMM',
    selectedDates: ["2019.08.19", "2019.08.23"],
    buttons: ['clear', submitButton]
})
new AirDatepicker("#filter-date-dropdown-search-room", {
    navTitles: {
        days: '<strong>MMMM yyyy</strong>',
        months: 'Select month of <strong>yyyy</strong>' 
    },
    range: true,
    multipleDates: 2,
    multipleDatesSeparator: " - ",
    dateFormat: 'd MMM',
    selectedDates: ["2019.08.19", "2019.08.23"],
    buttons: ['clear', submitButton]
})
