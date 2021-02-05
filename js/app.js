$(function() {
    var datepicker = new Datepicker('#datepicker', {
        weekStart: 1,
        i18n: {
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            weekdays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
        },
    });


})

$(document).on('click', 'button[id=menu-btn]', function() {
    var _this = $(this),
        _attr = _this.attr('aria-expanded') == 'true' ? 'close' : 'menu';

    _this.attr('uk-icon', _attr);
})