import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'
import './range-slider.scss'
import './range-slider__head.scss'
import './range-slider__title.scss'
import './range-slider__slider.scss'
import './range-slider__range.scss'
import './range-slider_margin-top_30px.scss'

var slider = document.getElementById('range-slider1')
var values = [5000, 10000]
if (slider != null) {
    noUiSlider.create(slider, {
        start: [5000, 10000],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 15000
        }
    })
}

if (slider != null) {
    slider.noUiSlider.on('update', function(){
        values = slider.noUiSlider.get()
        values[0] = parseInt(values[0])
        values[1] = parseInt(values[1])
        if (values[0] / 1000 != 0) {
            values[0] = values[0] / 1000 + ' ' + values[0] % 1000;
        }
        if (values[1] / 1000 != 0) {
            values[1] = values[1] / 1000 + ' ' + values[1] % 1000;
        }
        $('.range-slider__range').text(parseInt(values[0]) + '₽' + ' - ' + parseInt(values[1]) + '₽')
    })
}