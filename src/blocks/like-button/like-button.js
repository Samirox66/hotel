import './like-button.scss'
import './like-button__button.scss'
import './like-button__number.scss'
import './like-button__button_active.scss'
import './like-button__number_active.scss'

$('.like-button__button').on('click', function(){
    var text = $(this).find('.like-button__number').text()
    var number = parseInt(text);
    if ($(this).hasClass('like-button__button_active')) {
        number -= 1;
        $(this).removeClass('like-button__button_active')
        $(this).find('.like-button__number').removeClass('like-button__number_active')
        $(this).find('.material-icons').removeClass('material-icons__favorite').addClass('material-icons__favorite-border').text('favorite_border')
        $(this).find('.like-button__number').text(number)
    } else {
        number += 1;
        $(this).addClass('like-button__button_active')
        $(this).find('.like-button__number').addClass('like-button__number_active')
        $(this).find('.material-icons').removeClass('material-icons__favorite-border').addClass('material-icons__favorite').text('favorite')
        $(this).find('.like-button__number').text(number)
    }
})