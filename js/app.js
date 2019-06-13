// aminate fade in index section
$(function() {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.foo');
    window.onscroll = function() { stickyHeader() };
});

function stickyHeader() {
    var posCover = $('#zone-cover').offset().top;
    console.log(posCover);
    if (document.documentElement.scrollTop > posCover || document.body.scrollTop > posCover) {
        $('#site-header').addClass('affix');
    } else {
        $('#site-header').removeClass('affix');
    }
}