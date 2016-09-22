/**
 * Created by 孟磊 on 2016/8/24.
 */
//banner
$(".box").hover(function(){
    $(".box img").css("opacity",1)
},function(){
    $(".box img").css("opacity",0)
})
$(".box a:gt(0)").css("left","100%");
var now=0
var next=0
function move(){
    next++
    if(next>=$(".box a").length){
        next=0
    }
    $(".box a").eq(now).stop().animate({left:"-100%"})
    $(".box a").eq(next).css("left","100%")
    $(".box a").eq(next).stop().animate({left:0})
    $(".box ul li").css({"background":"#ccc","border":"none"})
    $(".box ul li").eq(next).css({"background":"none","border":"1px solid blue"})
    now=next
}
var t=setInterval(move,3000)
//鼠标一上去停
$(".box").hover(function(){
    clearInterval(t)
},function(){
    t=setInterval(move,3000)
})

//左右箭头
$(".leftbtn").click(function(){
    move()
})
$(".rightbtn").click(function(){
    next--
    if(next<=-1){
        next=$(".box a").length-1
    }
    $(".box a").eq(now).stop().animate({left:"100%"})
    $(".box a").eq(next).css("left","-100%")
    $(".box a").eq(next).stop().animate({left:0})
    $(".box ul li").css({"background":"#ccc","border":"none"})
    $(".box ul li").eq(next).css({"background":"none","border":"1px solid blue"})
    now=next
})

$(".box ul li").click(function(){
    var index=$(".box ul li").index(this)
    next=index
    $(".box a").eq(now).stop().animate({"left":"-100%"})
    $(".box a").eq(next).css("left","100%")
    $(".box a").eq(next).stop().animate({"left":0})
    $(".box ul li").eq(now).css({"background":"#ccc","border":"none"})
    $(".box ul li").eq(next).css({"background":"none","border":"1px solid blue"})
    now=next
})


//小屏移入字体
$(".small-footer .xiaodh").hover(function(){
    $(this).css("color","rgba(0,0,0,.9)")
    var index=$(".small-footer .xiaodh").index(this)
    $(".small-footer .xiaodh .xian").eq(index).find("div").css("background","rgba(0,0,0,.9)")
},function(){
    $(this).css("color","rgba(0,0,0,.7)")
    var index=$(".small-footer .xiaodh").index(this)
    $(".small-footer .xiaodh .xian").eq(index).find("div").css("background","rgba(0,0,0,.6)")
})

//点击
var flag=true
$(".small-footer .xiaodh .dianji").click(function(){
    var index=$(".small-footer .xiaodh .dianji").index(this)
    if(flag){
        $(".small-footer .xiaodh .dianji .xian").eq(index).find(".heng").css("transform","translate(0,0px) rotate(45deg)")
        $(".small-footer .xiaodh .dianji .xian").eq(index).find(".shu").css("transform","translate(0,-1px) rotate(-45deg)")
        $(".small-footer .xiaodh .xiangxi").eq(index).css({"visibility":"visible","height":"auto"})
        $(".small-footer .xiaodh .xiangxi").eq(index).find("a").each(function(index,obj){
            $(obj).css("transition","all 0.4s ease "+index*0.3+"s").css("opacity",1).css("transform","rotateY(0deg) scale(1,1)")
        })
        flag=false
    }else{
        $(".small-footer .xiaodh .dianji .xian").eq(index).find(".heng").css("transform","translate(0,0px) rotate(0deg)")
        $(".small-footer .xiaodh .dianji .xian").eq(index).find(".shu").css("transform","translate(0,0px) rotate(90deg)")
        $(".small-footer .xiaodh .xiangxi").eq(index).css({"visibility":"hidden","height":0})
        $(".small-footer .xiaodh .xiangxi").eq(index).find("a").each(function(index,obj){
            $(obj).css("transition","all 0s ease ").css("opacity",0).css("transform","rotateY(0deg) scale(1,1)")
        })
        flag=true
    }
})


//左上角
$(".hides").click(function(){
    if(flag){
        $(".topbtn").css("transform","translate(0,6px) rotate(45deg)")
        $(".xiabtn").css("transform","translate(0,-3px) rotate(-45deg)")
        $(".caidan").css({"visibility":"visible","height":500,"padding":30})
        $(".caidan ul li").each(function(index,obj){
            $(obj).css("transition","all 0.4s ease "+index*0.3+"s").css("opacity",1).css("transform","rotateY(0deg) scale(1,1)")
        })
        flag=false
    }else{
        $(".topbtn").css("transform","translate(0,0px) rotate(0deg)")
        $(".xiabtn").css("transform","translate(0,0px) rotate(0deg)")
        $(".caidan").css({"height":0,"padding":0})
        $(".caidan ul li").each(function(index,obj){
            $(obj).css("transition","all 0s ease ").css("opacity",0).css("transform","rotateY(0deg) scale(1,1)")
        })
        flag=true
    }
})



