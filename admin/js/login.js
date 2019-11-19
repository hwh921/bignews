$(function () {
    //一:登录需求:
    //1.给登录按钮设置一个点击事件
    $('.input_sub').on('click', function (e) {
        e.preventDefault();
        //2.获取输入的账号和密码
        var username = $('.input_txt').val().trim();
        var password = $('.input_pass').val().trim();

        // 3.判断非空
        if (username == "" || password == "") {
            $('.modal-body').text('帐号和密码不能为空');
            $('#myModal').modal();
            return;
        }
        //4.发送ajax请求,完成登录
        $.ajax({
            type: 'post',
            url: BigNew.user_login,
            data: {
                username: username,
                password: password
            },
            success: function (backData) {
                console.log(backData);
                $('.modal-body').text(backData.msg);
                $('#myModal').modal();
                if (backData.code == 200) {
                    window.localStorage.setItem('token', backData.token);
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        window.location.href = './index.html';
                    })
                }
            }
        })
    })
})