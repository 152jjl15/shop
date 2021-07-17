var small = $(".small")[0];
  var slider = $(".slider")[0];
  var big = document.getElementById("big");//试一试js获取
  var bigImg = document.getElementById("bigImg");
//让slider跟随鼠标移动.给小的方块绑定事件
  $(".small").mousemove(function(e) {
      alert(1);
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