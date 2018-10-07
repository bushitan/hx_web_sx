
$(document).ready(function(e) {
        var unslider04 = $('#hot').unslider({
            dots: true
        }),
        data04 = unslider04.data('unslider');
        //            $('.unslider-arrow04').click(function() {
        //                var fn = this.className.split(' ')[1];
        //                data04[fn]();
        //            });

        var unsliderad = $('#ad').unslider({
            dots: true
        }),
        dataad = unsliderad.data('unslider');
        //            $('.unslider-arrow04').click(function() {
        //                var fn = this.className.split(' ')[1];
        //                data04[fn]();
        //            });

    $('.title').click(function () {
        //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
        $('html,body').animate({scrollTop: ($($(this)).offset().top )}, 1000);
    });
});