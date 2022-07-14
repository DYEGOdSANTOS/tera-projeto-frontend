let menuToggle = $('.toggle');
let navigation = $('.navigation');
menuToggle.click(function () {
    menuToggle.toggleClass('active');
    navigation.toggleClass('active');
});

let list = $('.list');

$('.list').click(function () {
    $('.list').removeClass('active');
    $(this).addClass('active');
});