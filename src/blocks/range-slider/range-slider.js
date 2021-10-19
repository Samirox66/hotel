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
        $('.range-slider__range').text(values[0] + '-' + values[1])
    })
}