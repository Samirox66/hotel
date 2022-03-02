import noUiSlider from 'nouislider';
import $ from 'jquery';

import 'nouislider/dist/nouislider.css';
import './range-slider.scss';
import './range-slider__head.scss';
import './range-slider__title.scss';
import './range-slider__slider.scss';
import './range-slider__range.scss';
import './range-slider_margin-top_30px.scss';

const slider = document.getElementById('range-slider1');
let values = [5000, 10000];
if (slider != null) {
  noUiSlider.create(slider, {
    start: [values[0], values[1]],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 15000,
    },
  });
}

if (slider != null) {
  slider.noUiSlider.on('update', () => {
    values = slider.noUiSlider.get();
    values[0] = String(Math.floor(Number(values[0])));
    values[1] = String(Math.floor(Number(values[1])));
    if (values[0].length > 3) {
      values[0] = `${values[0].slice(0, -3)} ${values[0].slice(-3)}`;
    }

    if (values[1].length > 3) {
      values[1] = `${values[1].slice(0, -3)} ${values[1].slice(-3)}`;
    }

    $('.range-slider__range').text(`${values[0]}₽ - ${values[1]}₽`);
  });
}
