$(document).ready(function () {


    /* Сортировка отзывов*/
    var selectSortItems = document.querySelectorAll('#ch-sort-list li');
    var selectSortLabel = document.querySelector('#sort-by span:first-child');
    for(var i=0; i<selectSortItems.length; i++){
        var li = selectSortItems.item(i);
        li.onclick = function(){
            var selectSortCurrent = document.querySelector('#ch-sort-list li.ch-sort-list-active');
            selectSortCurrent.removeAttribute('class');
            selectSortLabel.innerHTML = this.innerHTML;
            this.className = 'ch-sort-list-active';
        }
    };
    var selectSortItems2 = document.querySelectorAll('#ch-sort-list2 li');
    var selectSortLabel2 = document.querySelector('#sort-by2 span:first-child');
    for(var i=0; i<selectSortItems2.length; i++){
        var li = selectSortItems2.item(i);
        li.onclick = function(){
            var selectSortCurrent2 = document.querySelector('#ch-sort-list2 li.ch-sort-list-active2');
            selectSortCurrent2.removeAttribute('class');
            selectSortLabel2.innerHTML = this.innerHTML;
            this.className = 'ch-sort-list-active2';
        }
    };
    /* конец Сортировка отзывов*/


    $('#rating-tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#reviewsTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    /*$('.btn-filtr').click(function(){
        $(".search-filters").slideToggle('fast');
        return false;
    });*/
    $('.btn-filtr').click(function() {
        $('.search-filters').animate({width: 'toggle'});
    });


    // Свернуть/развернуть блок запроса
    $('.request__header').click(function() {
        $(this).next('.request__toggle-block').slideToggle('slow',function () {
            if($(this).children().hasClass('rotated')){
                $(this).parent('.request').find('.arrow').removeClass('rotated');
            }
            else{
                $(this).parent('.request').find('.arrow').addClass('rotated');
            }
        });
        return false;
    });

    $(document).ready(function() {
        $('#go').click( function(event){
            event.preventDefault();
            $('#overlay').fadeIn(400,
                function(){
                    $('#modal_form')
                        .css('display', 'block')
                        .animate({opacity: 1, top: '50%'}, 200);
                });
        });
        /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
        $('.close-category, #overlay').click( function(){
            $('#modal_form')
                .animate({opacity: 0, top: '45%'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                );
        });
    });


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

    /*search-map*/
    if ($('#search-map').length > 0) {//проверяет наличие блока на странице
        ymaps.ready(function () {
            var myMap = new ymaps.Map('search-map', {
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
    /*close search-map*/


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

    /* выбор города */
    $(document).ready(function () {
        $('.delivery_list').click(function(){
            $(".cities_list").slideToggle('fast');
        });
        $('ul.cities_list li').click(function(){
            var tx = $(this).html();
            var tv = $(this).attr('alt');
            $(".cities_list").slideUp('fast');
            $(".delivery_list span").html(tx);
            $(".delivery_text").html(tv);
        });
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        verticalSwiping: true

    });



});

$(document).ready(function () {
    /*Диаграмма рейтинга машины*/
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Кондиционирование',9],
            ['Трансмиссия',9],
            ['Кондиционирование', 9],
            ['Кондиционирование TV',9],
            ['Кондиционирование',9],
            ['Кондиционирование',9],
            ['Трансмиссия',9],
            ['Кондиционирование', 9],
            ['Трансмиссия',9],
            ['Трансмиссия',9]
        ]);

        /*var options = {
            title: 'My Daily Activities'
        };*/

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data);
    }
/* close Диаграмма рейтинга машины*/


    /* Измение цвета ячейки рейтинга в таблице*/
    // Получаем значение из ячейки
    $('td span.rat-val').each(function(){
        var x = $(this).text();
        if (x < 3) {
            $(this).css({color: '#f72405'});
        }else{
            $(this).css({color:'#05a42e'});
        }
    });
    /* CLOSE  Измение цвета ячейки рейтинга в таблице*/

    /*fancybox*/
    $('.fancybox-thumb').fancybox({
       prevEffect : 'fade',
       nextEffect : 'fade',

       closeBtn  : true,
       arrows    : true,
       nextClick : true,

       helpers : {
           thumbs : {
               width  : 40,
               height : 40

           }
       }
   });
    /*fancybox*/
});
