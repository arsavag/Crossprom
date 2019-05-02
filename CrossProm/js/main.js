$(document).ready(function () {

    $('button.navbar-toggler').click(function () {
        if ($('button.navbar-toggler').attr("aria-expanded") == "false") {
            $('nav').css({
                "box-shadow": "none"
            });
            $(this).children("img").attr("src", "img/navbaricons/openedMenu.svg");
        } else {
            $('nav').css({
                "box-shadow": "0px 18px 23px rgba(0, 0, 0, 0.05)"
            });
            $(this).children("img").attr("src", "img/navbaricons/closedMenu.svg");
        }

    });

    $('ul.variant-items li.item-list').click(function () {
        $(this).addClass('active-item-list');
        if ($('ul.variant-items').children().not($(this)).hasClass('active-item-list')) {
            $('ul.variant-items li.item-list').removeClass('active-item-list');
            $(this).addClass('active-item-list');
        }
    });

    $('ul.option-dropdown li.option-item').on('click', function () {
        var getValue = $(this).text();
        $('.select-toggler').text(getValue);
        $('.select-toggler').addClass('collapsed');
        $('.navbar-collapse').removeClass('show');
    });
$(".all_cards").hide();
        var size_card = $(".all_cards").length;
        var x = 4;
        $('.all_cards:lt(' + x + ')').show();
        $('.see_more').click(function () {
            x = (x + 4 <= size_card) ? x + 4 : size_card;
            $('.all_cards:lt(' + x + ')').show();
        });


});
