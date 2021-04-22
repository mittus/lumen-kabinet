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


    if(_attr == 'menu') {
        UIkit.modal($('#offcanvas-flip')).hide();
        UIkit.modal($('#modal-products')).hide();
    }

    _this.attr('uk-icon', _attr);


}).on('click', '.qty > .btn', function() {
    var qty = $(this).parent(),
        cart_id = qty.data('cart_id'),
        input = qty.find('input'),
        cl = $(this).data('act'),
        val = Number.parseInt(input.val());

    if(cl=='minus') {
        if(val <= 0) {
            return false;
        } else val = val - 1;
    } else if(cl=='plus') {
        val = val + 1;
    }
    input.val(val);
}).on('click', '[data-filter]', function() {
    var filters = $(this).data('filter'),
    dropdown = $(this).parents('[uk-dropdown]');

    UIkit.dropdown(dropdown).hide();

    if (typeof filterShows === "function") { 
        filterShows(filters);
    }
});

/* Функция для теста, надо удалить */
function filterShows(filters) {
    console.log(filters);
}
/* !!!!!!!!!! */