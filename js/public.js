
$(function(){
    /*判断是否登陆 */
    let username = sessionStorage.getItem("username");
    if(username != null && username != undefined){
    $("#top").append(`
    <ul class="right top_p user_ul">
        欢迎您，${username}
        <li id="logout">注销</li>
    </ul>   
    `);
    }else{
        $("#top").append(`
        <p class="right top_p">
        <a href="login.html">登录</a>&nbsp;|&nbsp;<a href="register.html">注册</a>
    </p>   `);
    }
    /*判断结束 */
    /*注销操作 */
    $("#logout").click(()=>{
        //清除session
        sessionStorage.removeItem("username");
        location.href = "index.html";
    });
    /*注销结束 */


$(window).scroll(function(){  //只要窗口滚动,就触发下面代码
 
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度

    if( scrollt >200 ){  //判断滚动后高度超过200px,就显示

        $("#back_top").fadeIn(400); //淡入

    }else{

        $("#back_top").stop().fadeOut(400); //如果返回或者没有超过,就淡出.必须加上stop()停止之前动画,否则会出现闪动

    }

});

$("#back_top").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部

    $("html,body").animate({scrollTop:"0px"},200);

}); 
    //判断是否登录
    $(".isLogin").on('click',function(){
    let username = sessionStorage.getItem("username");
    if(username == null || username == undefined){
        layer.msg('<span style="color:#000;">您还没有登录！</span>', {icon: 2});
    }
    else{
        window.location.href="cart.html";
    }
    })

        
        
    $(".buy").on('click',function(){
        if(username == null || username == undefined){
            layer.msg('<span style="color:#000;">您还没有登录！</span>', {icon: 2});
        }
        else{
            layer.msg('<span style="color:#000;">购买成功！</span>', {icon: 6});
        }
        })

        $(".serach").click(()=>{
   
            var serach = document.getElementById("serach").value;
            sessionStorage.setItem("serach", serach);
            location.href = "serach.html";
        });
})



   