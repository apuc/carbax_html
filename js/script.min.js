$(document).ready(function () {

    /*slider for market single proposal*/
    $(window).load(function () {
        $('.market-slider__single').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            slideshow: false
        });
    });
    /*close slider for market single proposal*/

    /*market yandex map*/
    if ($('#marketMap').length > 0) {//проверяет наличие блока на странице
        ymaps.ready(function () {

            var myMap = new ymaps.Map('marketMap', {
                    center: [55.425471, 38.264108],
                    zoom: 13,
                    controls: []
                }, {
                    searchControlProvider: 'none'
                }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: myajax.img + 'img/marker.png',
                    balloonContent: 'Это красивая метка'
                }, {});

            myMap.geoObjects.add(myPlacemark);
        });
    };
    /*close market yandex map*/

    /*business yandex map*/
    if ($('#businessMap').length > 0) {//проверяет наличие блока на странице
        ymaps.ready(function () {
            var myMap = new ymaps.Map('businessMap', {
                center: [56.948048, 24.107018],
                zoom: 6
            });
            myMap.controls.add('smallZoomControl');
            myMap.controls.add('searchControl');
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: myajax.img + 'img/marker.png',
                balloonContent: 'Это красивая метка'
            }, {});

            myMap.geoObjects.add(myPlacemark);
        });
    };
    /*close business yandex map*/

    /*rating map*/
    if ($('#ratingMap').length > 0) {//проверяет наличие блока на странице
        ymaps.ready(function () {
            var myMap = new ymaps.Map('ratingMap', {
                center: [55.75396, 37.620393],
                zoom: 10
            });
            /*myMap.controls.add('smallZoomControl');
            myMap.controls.add('searchControl');*/
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: myajax.img + 'img/marker.png',
                balloonContent: 'Это красивая метка'
            }, {});

            myMap.geoObjects.add(myPlacemark);
        });
    };
    /*close rating map*/

    /*market tabs*/
    $('.page__tabs_target').click(function (event) {
        $('.page__tabs_target').removeClass('active');//при клике на нужный элемент удаляем у соседних класс 'active'
        $(this).addClass('active'); //и добавляем класс 'active' элементу, по которому кликнули
        event.preventDefault();//отменяем действие браузера по умолчанию для тега 'a',
        var target = ($(this).data('tab'));//создаем переменную 'target' которая содержит значение атрибута 'data-tab'

        $('.page__tabcontent').hide();//страница с контентом спрятана по умолчанию
        $("." + target).show();//отображаем страницу при клике на соответсвующую вкладку с соответсвующим значением 'data-tab',
    });
    /*close market tabs*/

    /*menu scroll*/
    $('.smoothScroll').click(function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html, body').animate({scrollTop: top}, 1000);
        return false;
    });
    /*close menu scroll*/

    /*open add share fields validation*/

    $('.share__select').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([a-zA-Zа-яА-Я0-9\D])+$/; // используем регулярное выражение для букв, цифр и символов

        if(val.length > 3 && val != '' && rv_name.test(val))// Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });

    $('.share__price').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([0-9_.])+$/; // используем регулярное выражение для цифр

        if(val.length > 1 && val != '' && rv_name.test(val))// Eсли длина имени больше 1 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });

    $('#vin').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([A-Z0-9])+$/; // используем регулярное выражение для букв, цифр и символов

        if(val.length > 3 && val != '' && rv_name.test(val))// Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });
    
    $('#part').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([a-zA-Zа-яА-Я0-9\D])+$/; // используем регулярное выражение для букв, цифр и символов

        if(val.length > 3 && val != '' && rv_name.test(val))// Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });
    
    $('#part-number').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([a-zA-Zа-яА-Я0-9])+$/; // используем регулярное выражение для букв, цифр и символов

        if(val.length > 3 && val != '' && rv_name.test(val))// Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });

    $('#ns').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([a-zA-Zа-яА-Я\D])+$/; // используем регулярное выражение для букв и пробелов

        if(val.length > 3 && val != '' && rv_name.test(val))// Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });

    $('#ph-number').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([0-9])+$/; // используем регулярное выражение для цифр

        if(val.length > 3 && val != '' && rv_name.test(val))// Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });

    $('#email').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([a-zA-Zа-яА-Я0-9\s\D])+$/; // используем регулярное выражение для букв, цифр и символов

        if(val.length > 3 && val != '' && rv_name.test(val))// Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });    
    /*$('#date').unbind().blur( function(){//валидация поля формы с буквами и пробелами

        var val = $(this).val();// Для удобства записываем значение атрибута каждого поля в переменные
        var rv_name = /^([0-9_.])+$/; // используем регулярное выражение для цифр и точек

        if(val.length > 3 && val != '' && rv_name.test(val))// Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
        {
            $(this).addClass('not_error').removeClass('error');// то добавляем этому полю класс .not_error и убираем класс error,
        }
        else
        {
            $(this).removeClass('not_error').addClass('error');// Иначе, мы удаляем класс not-error и заменяем его на класс error
        }
    });*/
    /*close add share fields validation*/
});

$(document).ready(function(){
    $(function () {
        $('#date-from').datepicker(
            {
                pickTime: false,
                language: "ru",
                orientation: "bottom left"
            }
        );
    });
    $(function () {
        $('#date-to').datepicker(
            {
                pickTime: false,
                language: "ru",
                orientation: "bottom left"
            }
        );
    });
});
