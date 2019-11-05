/**
 * Created by hp on 2018/1/23.
 */
/*调用全屏的方法*/
$(function () {
    $("#dowebok").fullpage({
        /*设置每一屏的颜色*/
        sectionsColor:["#0da5d6","#2AB561","#DE8910","#16BA9D","#0DA5D6"],
        /*afterLoad滚动到某一屏后的回调函数：接收anchorLink和index两个参数,anchorLink是锚链接的名称
        ，link是序号，从1开始计算*/
        afterLoad: function (anchorLink,index) {
            /*alert(index);*/
            /*current类名加给谁，谁就做动画效果（哪一屏）*/
            $(".section").removeClass("current");
            /*让添加类名延迟100毫秒 解决第一屏动画的bug*/
            setTimeout(function () {
                $(".section").eq(index-1).addClass("current");
            },100)
        }
    });
});
