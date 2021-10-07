import "./date-dropdown.scss"
import "./date-dropdown__label.scss"
import "./date-dropdown__label_height_44px.scss"
import "./date-dropdown__label_width_150px.scss"
import "./date-dropdown__label_width_266px.scss"
import "./date-dropdown__input.scss"
import './date-dropdown__input_width_103px.scss'
import './date-dropdown__input_height_24px.scss'

import AirDatepicker from "air-datepicker"
new AirDatepicker("#date-dropdown-ui-kit1")
new AirDatepicker("#date-dropdown-ui-kit2", {
    selectedDates: [new Date(2019, 7, 19)]
})
new AirDatepicker("#filter-date-dropdown-ui-kit", {
    range: true,
    multipleDatesSeparator: " - ",
    selectedDates: [new Date("19 авг"), new Date("23 авг")]
})