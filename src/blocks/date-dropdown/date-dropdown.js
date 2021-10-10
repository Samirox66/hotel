import "./date-dropdown.scss"
import "./date-dropdown__label.scss"
import "./date-dropdown__label_height_44px.scss"
import "./date-dropdown__label_width_150px.scss"
import "./date-dropdown__label_width_266px.scss"
import "./date-dropdown__input.scss"
import './date-dropdown__input_width_103px.scss'
import './date-dropdown__input_height_24px.scss'

let submitButton = {
    content: 'Применить',
    classname: 'button_color_blue button_border_none button_background-color_white',
    onClick: (dp) => {
        dp.hide()
    }
}

import AirDatepicker from "air-datepicker"
new AirDatepicker("#date-dropdown-ui-kit1", {
    buttons: ['clear', submitButton]
})
new AirDatepicker("#date-dropdown-ui-kit2", {
    selectedDates: [new Date(2019, 7, 19)],
    buttons: ['clear', submitButton]
})
new AirDatepicker("#filter-date-dropdown-ui-kit", {
    range: true,
    multipleDatesSeparator: " - ",
    selectedDates: [new Date("19 авг"), new Date("23 авг")],
    buttons: ['clear', submitButton]
})
new AirDatepicker("#date-dropdown-ui-kit-cards1", {
    buttons: ['clear', submitButton]
})
new AirDatepicker("#date-dropdown-ui-kit-cards2", {
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
new AirDatepicker("#date-dropdown-ui-kit-cards3", {
    buttons: ['clear', submitButton],
    selectedDates: [new Date(2019, 7, 19)]
})
new AirDatepicker("#date-dropdown-ui-kit-cards4", {
    buttons: ['clear', submitButton],
    selectedDates: [new Date(2019, 7, 23)]
})