// jsを記述する際はここに記載していく
jQuery(function () {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    $('a[href^="#"]').click(function () {
        var time = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" ? 'html' : href);
        var distance = target.offset().top;
        $("html, body").animate({ scrollTop: distance }, time, "swing");
        return false;
    });
});

function clickEvent() {
    alert('※チーズアカデミーは実際には存在しません。');
}