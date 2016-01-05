/**
 * Created by lcc on 16/1/5.
 */
$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var  dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"1.jpg"},{"src":"1.jpg"},{"src":"1.jpg"},{"src":"1.jpg"},{"src":"1.jpg"},{"src":"1.jpg"},{"src":"1.jpg"}]};
        window.onscroll=function(){
            if(scrollside()) {
                $.each(dataImg.data, function (index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src", "./" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        }
    });
});

function scrollside(){
    var box=$(".box");
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight=$(document).width();
    //获取滚动的高度
    var scrollHeight=$(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}

function imgLocation(){
    var box=$(".box");
    var boxWidth=box.eq(0).width();
    var num=Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function(index,value){
        console.log(index+"----"+value);
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;
        }else{
            var minboxHeight=Math.min.apply(null,boxArr);
            var minboxindex=$.inArray(minboxHeight,boxArr);
            console.log(minboxindex);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxindex).position().left
            });
            boxArr[minboxindex]+=box.eq(index).height()
        }
    })
}