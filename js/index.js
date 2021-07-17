
$(document).ready(function(){

/*首页创建商品展示列表*/
axios.get("http://yapi.smart-xwork.cn/mock/78814/M78Shop/index")
    .then(function(resposen){
        let showUl = "<ul class='show_ul'>";
        for(let item of resposen.data.data){
            showUl += `<li class='show_li'>
                        <div>
                            <img class='show_img' src="${item.img}" title="${item.title}">
                            <p class='title'>${item.title}</p>
                            <div class="show_buttom">
                                <p class='price'>￥${item.price}</p>
                                <div class='show_btn text-center add_cart'>加入购物车</div>
                            </div>
                        </div>
                    </li>`;
        }
        showUl += "</ul>";
        $("#show").append(showUl);

    /*点击商品获取信息跳转详情页面 */
    $('.show_li').on('click', function(e) {
            sessionStorage.setItem("produce",JSON.stringify(resposen.data.data[$(this).index()]));
            location.href = "detail.html";
        

    });
    //判断是否登录购物车按钮
    var username = sessionStorage.getItem("username");
    $(".add_cart").on('click',function(e){
        e.stopPropagation();
        if(username == null || username == undefined){
            layer.msg('<span style="color:#000;">您还没有登录！</span>', {icon: 2});
        }
        else{
            layer.msg('<span style="color:#000;">成功加入购物车！</span>', {icon: 6});
        }
        
        }) 
 
    /*跳转结束 */
    

})
/*首页创建商品展示列表结束 */


});


