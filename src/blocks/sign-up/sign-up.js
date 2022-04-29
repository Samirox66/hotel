import IMask from 'imask';
import './sign-up.scss';
import $ from 'jquery';

const elements = $('.input__input[data-class=date]');
const maskOptions = {
  mask: Date,
  pattern: 'd.`m.`Y',
};
[...elements].forEach((element) => {
  (() => IMask(element, maskOptions))();
});
