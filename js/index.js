+(function(){var Locate=$("#location");
Locate.on("click",function(){
    var locationmain=$("#location-main");
    if(locationmain.css("opacity")=="0"){
        locationmain.addClass("block1");
        setTimeout(function(){
            "use strict";
            locationmain.css({
                "opacity":"1",
                "top":"60px"
            })
        },100)
    }
    else if(locationmain.css("opacity","1")){
        locationmain.removeClass("block1");
        setTimeout(function(){
            "use strict";
            locationmain.css({
                "opacity":"0",
                "top":"80px"
            })
        },100)
    }
})})();
$(document).mouseup(function(e){
    var locationmain=$("#location-main");
    if($(e.target).parents("#location-main").length==0&&$(e.target).attr("id")!="location-main"){
        locationmain.removeClass("block1");
        setTimeout(function(){
            "use strict";
            locationmain.css({
                "opacity":"0",
                "top":"80px"
            })
        },100)
    }
});
$("#location-main ul").click(function(e){
    if(e.target.nodeName=="A"){
        var locationmain=$("#location-main");
        if(locationmain.css("opacity")=="1"){
            locationmain.css({
                "opacity":"0",
                "top":"80px"
            })
    }
        e.preventDefault();
        var a=$(e.target).html();
        $("#location span").html(a);
    }
});
+(function(){
    var closeLocation=document.getElementById("location-main-closed");
    closeLocation.addEventListener("click",function(){
    this.parentNode.style.opacity="0";
    this.parentNode.style.top="100px";
    this.parentNode.style.display="none";
})})();
$("#search1").click(function(){
   $("html,body").animate({scrollTop:370},500);
});
$(".search p").on("click",function(e){
    var span=$(e.target);
    span.parent().children("i").css("left",a(span));
    var active=$(".search p .active");
    if(!(span.hasClass(".active"))){
        active.removeClass("active");
        span.addClass("active");
    }
});
function a(e){
    "use strict";
    switch(e.attr("class")){
        case "span0":return "15px";
        case "span1":return "99px";
        case "span2":return "174px";
        case "span3":return "256px";
        case "span4":return "348px"
    }
}
$('#fixed-top').on('mouseenter','i',function(){
    var b=$(this).children('b');
    b.css('display','block');
    setTimeout(function(){
        b.css({
            'opacity':'1',
            'right':'40px'
        });
    },100)
});
$('#fixed-top').on('mouseleave','i',function(){
    var b=$(this).children('b');
    b.css('display','none');
    setTimeout(function(){
        b.css({
            'opacity':'0',
            'right':'62px'
        });
    },100)
});
$('#fixed-top i:last-child').click(function(){
    $('html,body').animate({
        scrollTop:0
    },800)
});
$('.friendLink ul li a').mouseenter(function(e){
    e.preventDefault();
    var div=$($(e.target).attr('href'));
    $(e.target).addClass('active').parent().siblings('li').children('a').removeClass('active');
    div.addClass('active').siblings().removeClass('active');
});
//上下滚动轮播
$(function(){
    var cut=0;
    var next=1;
    var interval=3000;
    var duration = 1000;
    var as=$('div.header-main div.scroll a');
    var timer=setInterval(function(){
        up();
    },interval)
    $(as).hover(function(){
        clearInterval(timer);
        timer=null;
    },function(){
        if(timer==null)
        timer=setInterval(function(){
            up()
        },interval)
    })
    function up(){
        $(as[cut]).animate({
            'top':'-30px'
        },duration,function(){
            $(this).css('top','30px')
        });
        $(as[next]).animate({
            'top':'0'
        },duration);
        cut=next;
        next++;
        if(next==as.length-1){
            next=0;
        }
    }
})

$('div.fixed-search > span').click(function(event){
    if(!($(this).hasClass('active'))){
        $(this).next().css('display','block');
        $(this).addClass('active');
    }else{
        $(this).next().css('display','none');
        $(this).removeClass('active');
    }
    event.stopPropagation();
})
$('div.fixed-search > ul.toggle-down').on('click','a',function(e,event){
    e.preventDefault();
    $(this).parents('ul').css('display','none').prev().removeClass('active');
    var html=$(this).html();
    html+= `<i class="icon"></i>`;
    $(this).parents('ul').prev().html(html);
})
$('body').click(function(){
    $('div.fixed-search > ul.toggle-down').css('display','none');
    $('div.fixed-search > span').removeClass('active');
})






