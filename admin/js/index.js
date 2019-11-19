$(function () {
    //一:进入首页渲染用户信息
    $.ajax({
        url: BigNew.user_info,
        success: function (backData) {
            console.log(backData);
            $('.user_info>span>i').text(backData.data.nickname);
            $('.user_info>img').attr('src', backData.data.userPic);
            $('.user_center_link>img').attr('src', backData.data.userPic);
        }
    })

    //二:登出
    //1.给登出按钮设置一个点击事件
    $('.logout').on('click', function () {
        window.localStorage.removeItem('token');
        window.location.href = "./login.html";
    })

    //三: 首页左侧一级菜单设置点击事件
    $('.level01').on('click', function () {
        $(this).addClass('active').siblings('div').removeClass('active');

        //文章管理
        if ($(this).index() == 1) {
            $('.level02').slideToggle();
            $(this).find('b').toggleClass('rotate0');
            //默认选中文章列表
            $('.level02>li:eq(0)>a')[0].click();
        }
    })

    //四:首页左侧二级菜单设置点击事件
    $('.level02>li').on('click', function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    })
})
