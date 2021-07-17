$.validator.setDefaults({
    submitHandler: function() {
        alert("提交事件!");
    }

});
$().ready(function() {
    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
        rules: {

            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },




        },
        errorPlacement: function(error, element) {
            // Append error within linked label
            $( element )
                .closest( "form" )
                .find( "label[for='" + element.attr( "id" ) + "']" )
                .append( error );
        },
        errorElement: "span",
        messages: {

            username: {
                required: "请输入用户名",
                minlength: "用户名错误"
            },
            password: {
                required: "请输入密码",
                minlength: "密码错误"
            },




        }
    });
});

/*登陆开始*/
$("#username").blur(function(){
    /*$("#password").blur(function(){
        var nameinput = document.getElementById("username").value;
        var passwordinput = document.getElementById("password").value;
        var xhr = new XMLHttpRequest();
        var url = "https://efd54c26-de7e-4fee-b3ec-fb4a48a1ec38.mock.pstmn.io?username=yunyou&password=111111";
        url += "?username=" + nameinput + "&password=" + passwordinput;
        console.log(url);
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200){
                var result = xhr.responseText;
                console.log(result);
            
            }
        };
    });*/
    
});
/*登陆结束 */
