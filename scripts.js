(function($){

    $(function() {
        var btn = $('.nav-bar__btn'),
            list = $('.nav-bar__list'),
            ui = $('.nav-bar__btn-ui');

        btn.on('click', function(){
            if (btn.hasClass('nav-bar__btn--active')) {
                list.removeClass('nav-bar__list--active');
                ui.removeClass('nav-bar__btn-ui--active');
                btn.removeClass('nav-bar__btn--active');
            }
            else {
                list.addClass('nav-bar__list--active');
                ui.addClass('nav-bar__btn-ui--active');
                btn.addClass('nav-bar__btn--active');
            }
        });
    });

})(jQuery);

