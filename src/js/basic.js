

var selector = '.subMenu li a';

$(selector).on('click', function(){

    $(selector).removeClass('active');
    $(this).addClass('active');
})
