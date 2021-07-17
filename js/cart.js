
$(function() {
    /*购物车列表信息加载 */
    axios.get("http://yapi.smart-xwork.cn/mock/78814/M78Shop/cart")
    .then((resposen)=>{
        let cartN = "";
        for(let item of resposen.data.data){
            var price = (item.price * item.discount/10).toFixed(2);
            cartN += `<tr class = "cart_goods">
            <td width="75px" height="90px" align="center" valign="middle">
                <label for="checkall1">
                    <input type="checkbox" name="checklist" id="" class="j-checkbox">
                    <span class="checkallspan fl"></span>
                </label>
            </td>
            <td width="200px" height="90px" align="center" valign="middle" class="goods_name">
                <img src="${item.img}" alt="Auman toy set" class="shoppingitem">
                <p class="shoppingdesc">
                    ${item.Pname}
                </p>
                <div style="clear: both;"></div>
            </td>
            <td width="135px" height="90px" align="center" valign="middle" class="price_td">￥<span class = "price">${price}</span></td>
            <td width="135px" height="90px" align="center" valign="middle" class="price_td">￥<span>${item.price}</span></td>
            <td width="100px" height="90px" align="center" valign="middle" class="sumup"><span class="discount">${item.discount}</span>折</td>
            <td width="230px" height="90px" align="center" valign="middle" class="purchasenum ">
                <i class="minus iconfont icon-jianhao"></i>
                <input type="text" class="itxt" value="${item.Pnumber}">
                <i class="plus iconfont icon-jiahao"></i>
            </td>
            <td width="115px" height="90px" align="center" valign="middle">   
                <button type="submit" class="collect">收藏</button>
                <button type="submit" class="delete">删除</button>
            </td>
        </tr>`
        }
        $(".account").before(cartN);
        
        //删除商品
        $(".delete").on('click',function(){
            let del = this;
            layer.confirm('您确定要删除吗？', {
                btn: ['取消','删除'] //按钮
              }, function(){
                layer.msg('已取消');
              }, function(){
                  $(del).parents("tr").remove();
                  layer.msg('删除成功', {icon: 1});
                  total();
                });
            
        })
        //减少商品数量模块
        $(".minus").on('click',function() {
            // 得到兄弟文本框的值
            var num = $(this).siblings('.itxt').val();
            if (num == 1) {
                return false;
            }
            num--;
            $(this).siblings('.itxt').val(num);
            total();
        });

        
        //增加商品数量模块
        $(".plus").on('click',function(){
            // 得到兄弟文本框的值
            var num = $(this).siblings('.itxt').val();
            num++;
            $(this).siblings('.itxt').val(num);
            total();
        })
        $(".collect").on('click',()=>{
            layer.msg('收藏成功',{icon:6});
        })
        //商品总价
        total();
                   
    })
    .catch((error)=>{
        console.log(error);
    }); 
    /*信息加载结束 */


    //全选按钮:随时监听$()
    $("#checkAll").click(function() {
        if (this.checked) {
            $("input[name='checklist']").each(function() {
                this.checked = true;
            });
        } else {
            $("input[name='checklist']").each(function() {
                this.checked = false;
            });
        }
    });
   
});
//商品总价函数
function total(){
    var cartN = $(".cart_goods").length;
    var total = 0;
    for(let i=0; i < cartN;i++){
        var price = $(".price").eq(i).html();
        var number = $(".itxt").eq(i).val();
        total += price*number;
    }
    $(".total").text((total.toFixed(2)))
}
/*删除选框选中的商品 */
$(".delete_check").on('click',function(){
            layer.confirm('您确定要删除吗？', {
                btn: ['取消','删除'] //按钮
              }, function(){
                layer.msg('已取消');
              }, function(){
                $("input[name='checklist']").each(function() {
                    if(this.checked == true){
                        $(this).parents("tr").remove();
                        total();
                    }
                });
                  layer.msg('删除成功', {icon: 1});
                });

})
