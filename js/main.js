
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
        //����a��ǩ��hrefת��Ϊidѡ��������ȡidԪ��������λ�ã����߶ȼ�50px�����������Ҫ�������ã�
        $('html,body').animate({scrollTop: ($($(this)).offset().top )}, 1000);
    });
});