var index = 0,
    num = 5,
    itemWidth = 520,
    timer = undefined;
timerFun();
// 点击左右按钮进行图片切换
function move(dirction) {
    // 防止定时器叠加
    clearTimeout(timer);
    // 防止动画队列的执行
    $('.img-box').stop(false, true);
    if (dirction == 'next') {
        index++;
        // 判断此时的轮播到最后一张图片时改变索引，切换到第一张图片
        if (index > num) {
            $('.img-box').css({
                left: 0
            });
            index = 1;
        }
    } else if (dirction == 'prev') {
        index--;
        // 判断此时的轮播到第一张图片时改变索引，切换到最后一张图片
        if (index < 0) {
            $('.img-box').css({
                left: num * -itemWidth,
            });
            index = 4;
        }
    }
    // 给图片运动加上动画效果
    $('.img-box').animate({
        left: index * -itemWidth,
    }, function () {
        timerFun();
    });
    // 判断此时的小点的索引进行切换小点的样式，并随着图片进行切换
    active($('.item').eq(index == 5 ? 0 : index));
}
// 自动轮播 轮播时相当于点击了nextBtn
function timerFun() {
    timer = setTimeout(function () {
        move('next');
    }, 2000);
}
// 小点随着点击的按钮进行切换，样式也进行改变
function active(dom) {
    $('.active').removeClass('active');
    dom.addClass('active');
}
$('.prevBtn').click(function () {
    move('prev');
});
$('.nextBtn').click(function () {
    move('next');
});
$('.item').click(function () {
    index = $(this).index();
    move('');//此时不需要传入任何值
})