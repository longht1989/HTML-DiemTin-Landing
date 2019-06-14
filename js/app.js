// aminate fade in index section
$(function() {
    // window.sr = ScrollReveal({ reset: true });
    // ScrollReveal.reveal('.foo');
    var slideUp = {
        delay: 100,
        distance: '50%',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-out'
    };

    ScrollReveal().reveal('.foo', slideUp);
    window.onscroll = function() { stickyHeader() };
});

function stickyHeader() {
    var posCover = $('#zone-cover').offset().top;
    if (document.documentElement.scrollTop > posCover || document.body.scrollTop > posCover) {
        $('#site-header').addClass('affix');
    } else {
        $('#site-header').removeClass('affix');
    }
}