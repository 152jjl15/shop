$(function(){

  /*热门商品 */
  axios.get("http://yapi.smart-xwork.cn/mock/78814/M78Shop/hot")
  .then((response)=>{
      let hotLi = "";
      for(let item of response.data.data){
        hotLi += `<li><a href="#">${item.title}</a></li>`
      }
      $(".hot").append(hotLi);
  })
    /*将商品详细信息显示到页面 */
    let details = JSON.parse(sessionStorage.getItem("produce"));
    if(details != null){
      var old_price =Number(details.price).toFixed(2);
      var discount = Number(details.discount).toFixed(1);
      var price = (discount / 10 * old_price).toFixed(2);
      $(".goods_img").attr("src",details.img);
      $(".goods_title").html(details.title);
      $(".price").html(price);
      $(".old_price").html(old_price);
      $(".discount").html(discount);
      $(".stoc").html(details.stoc);
      $(".candicine").html(details.candicine);
    }
  

/*放大境开始 */
  var small = $(".small")[0];
  var slider = $(".slider")[0];
  var big = document.getElementById("big");//试一试js获取
  var bigImg = document.getElementById("bigImg");
//让slider跟随鼠标移动.给小的方块绑定事件
  $(".small").mousemove(function(e) {
    var even = e || event; //兼容火狐浏览器
    var x = even.clientX - small.offsetLeft - slider.offsetWidth/2;
    var y = even.clientY - small.offsetTop - slider.offsetHeight/2;
//测试even.clientX和even.clientY
    $("#test").val(even.clientX);
    $("#test1").val(even.clientY);
//水平方向的最大值
    var maxX = small.clientWidth - slider.clientWidth;
//竖直方向的最大值
    var maxY = small.clientHeight - slider.clientHeight;
    if(x<0){
//相当于超出左侧,超出左侧时,拉回
      x=0;
    }
//超出右侧时拉回
    if(x>maxX){
      x = maxX;
    }
//顶部超出
    if(y<0){
      y=0;
    }
//底部超出
    if(y>maxY){
      y = maxY;
    }
    slider.style.top = (y+small.offsetTop) + "px";
    slider.style.left = (x+small.offsetLeft) + "px";
//放大的图片的主要实现代码:比例计算, big.scrollLeft是id=big的div中下方滚轴的位置
//由于id=big的div设置成固定大小，而图片又非常大，所以这个div就像个放大镜一样在大图上晃
//比例计算很简单，鼠标在缩略图的位置与缩略图宽高比=鼠标在大图位置与大图宽高比，现在未知数是大图鼠标的位置
    big.scrollLeft = x/maxX * (bigImg.clientWidth - big.clientWidth) ;
    big.scrollTop = y/maxY * (bigImg.clientHeight -big.clientHeight) ;
  });
//鼠标移入事件
  $(".small").mouseenter(function(){
//鼠标移入到缩略图时候实现,上面出现的小的方块
    $(".slider").css("display","block");
    $("#big").css("top",small.offsetTop+"px");
//隐藏的大图=获取左图的左边位置+宽度+10(隔开点缝隙与缩略图)+px
    big.style.left = small.offsetLeft + small.offsetWidth + 10 + "px";
//右侧的大图区域显示出来图片
    $("#big").css("display","block");
  });
//移除事件
//添加鼠标移出事件,鼠标移出缩略图的时候
  $(".small").mouseleave(function(){
    $(".slider").css("display","none");
    $("#big").css("display","none");
  });
  /*放大境结束 */ 

  //增加商品数量模块
  $(".plus").click(function() {
    // 得到兄弟文本框的值
    var num = $(this).siblings('.itxt').val();
    num++;
    $(this).siblings('.itxt').val(num);
  });
  //减少购买数量模块
  $(".minus").click(function() {
    // 得到兄弟文本框的值
    var num = $(this).siblings('.itxt').val();
    if (num == 1) {
      return false;
    }
    num--;
    $(this).siblings('.itxt').val(num);
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
})